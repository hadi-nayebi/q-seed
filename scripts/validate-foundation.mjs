#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];

function requirePath(path) {
  if (!existsSync(resolve(root, path))) {
    failures.push(`missing required path: ${path}`);
  }
}

function git(args, cwd = root) {
  return execFileSync("git", args, { cwd, encoding: "utf8" }).trim();
}

for (const path of [
  "README.md",
  "LICENSE",
  "CONTRIBUTING.md",
  "SECURITY.md",
  "AGENTS.md",
  "QWEN.md",
  ".qwen/QWEN.md",
  ".qwen/context/INDEX.md",
  ".qwen/context/harness-layers.md",
  ".qwen/context/identity.md",
  ".qwen/settings.json",
  ".gitmodules",
  "qwen-code",
]) {
  requirePath(path);
}

const settings = JSON.parse(
  readFileSync(resolve(root, ".qwen/settings.json"), "utf8"),
);
if (settings?.context?.fileName !== "QWEN.md") {
  failures.push('settings.context.fileName must be exactly "QWEN.md"');
}

const bootstrap = readFileSync(resolve(root, "QWEN.md"), "utf8");
if (!bootstrap.includes("@.qwen/QWEN.md")) {
  failures.push("root QWEN.md must import .qwen/QWEN.md");
}

const tracked = git(["ls-files"]).split("\n");
if (tracked.some((path) => path === ".codex" || path.startsWith(".codex/"))) {
  failures.push(".codex must not be tracked by the public Q-Seed repository");
}
if (tracked.includes("TIMELINE.md")) {
  failures.push(
    "private builder timeline must not be tracked at repository root",
  );
}

const gitlink = git(["ls-files", "--stage", "qwen-code"]).split(/\s+/);
if (gitlink[0] !== "160000" || !/^[0-9a-f]{40}$/.test(gitlink[1] ?? "")) {
  failures.push("qwen-code must be recorded as a Git submodule commit");
} else if (existsSync(resolve(root, "qwen-code/.git"))) {
  const frameworkHead = git(["rev-parse", "HEAD"], resolve(root, "qwen-code"));
  if (frameworkHead !== gitlink[1]) {
    failures.push(
      `qwen-code checkout ${frameworkHead} does not match gitlink ${gitlink[1]}`,
    );
  }
}

if (failures.length > 0) {
  for (const failure of failures) {
    process.stderr.write(`FAIL: ${failure}\n`);
  }
  process.exit(1);
}

process.stdout.write("Q-Seed foundation boundaries are valid.\n");
