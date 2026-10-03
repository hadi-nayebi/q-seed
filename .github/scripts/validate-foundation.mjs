import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

function oneMatch(input, pattern, label) {
  const matches = [...input.matchAll(pattern)];
  if (matches.length !== 1) {
    throw new Error(`Expected exactly one ${label}; found ${matches.length}`);
  }
  return matches[0];
}

export function parseReadmeIdentity(readme) {
  const pin = oneMatch(
    readme,
    /The current pin is the reviewed Qwen Code `v([^`]+)` integration at\s+`([0-9a-f]{40})`\./g,
    'current framework pin declaration',
  );
  const expected = oneMatch(
    readme,
    /The expected CLI version is `([^`]+)`\./g,
    'expected CLI version declaration',
  );

  if (pin[1] !== expected[1]) {
    throw new Error(
      `README version declarations disagree: pin v${pin[1]}, expected ${expected[1]}`,
    );
  }

  return { revision: pin[2], version: expected[1] };
}

export function parseGitlink(treeEntry) {
  const match = treeEntry.trim().match(
    /^160000\s+commit\s+([0-9a-f]{40})\tqwen-code$/,
  );
  if (!match) {
    throw new Error('qwen-code must be one commit gitlink in the current tree');
  }
  return match[1];
}

export function validateFoundation({ readme, treeEntry, cliVersion }) {
  const declared = parseReadmeIdentity(readme);
  const revision = parseGitlink(treeEntry);
  const version = cliVersion.trim();

  if (declared.revision !== revision) {
    throw new Error(
      `README revision ${declared.revision} does not match qwen-code gitlink ${revision}`,
    );
  }
  if (declared.version !== version) {
    throw new Error(
      `README version ${declared.version} does not match qwen-code CLI ${version}`,
    );
  }

  return { revision, version };
}

function run() {
  const result = validateFoundation({
    readme: readFileSync('README.md', 'utf8'),
    treeEntry: execFileSync('git', ['ls-tree', 'HEAD', '--', 'qwen-code'], {
      encoding: 'utf8',
    }),
    cliVersion: execFileSync(
      process.execPath,
      ['qwen-code/scripts/cli-entry.js', '--version'],
      { encoding: 'utf8' },
    ),
  });
  console.log(
    `Verified Qwen Code ${result.version} at ${result.revision}`,
  );
}

if (
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  run();
}
