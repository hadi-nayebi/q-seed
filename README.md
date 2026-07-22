# Q-Seed

[![Foundation validation](https://github.com/hadi-nayebi/q-seed/actions/workflows/foundation.yml/badge.svg)](https://github.com/hadi-nayebi/q-seed/actions/workflows/foundation.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-foundation-orange.svg)](#project-status)

Q-Seed is an open-source, model-flexible agent harness built from two
independently evolvable organs: an inspectable cognitive brain under `.qwen/`
and a user-controlled fork of Qwen Code under `qwen-code/`.

The project learns from the behavior and failures of an earlier Seed Agent
prototype, but it is not a code port. Each capability is understood, defined
in Q-Seed's own shared language, assigned to the right architectural layer,
tested, and implemented anew.

## Project status

Q-Seed is in its **Foundation** stage and is not ready for general use. The
repository currently establishes the organism's identity, layer boundaries,
authority model, and reproducible Qwen Code baseline. Broad feature
translation has intentionally not begun.

The next engineering work maps Qwen's interception surfaces, specifies local
working-memory behavior, assesses prototype capabilities by cognitive role,
and selects the first narrow end-to-end feature.

## Architecture

```text
Q-Seed
├── .qwen/       cognitive/plugin brain
├── qwen-code/   user-controlled framework fork
└── jobs         fluid user–Q-Seed experience, introduced when specified
```

The active model animates the whole organism but is not its identity.

| Layer                  | Owns                                                                                                            | Change posture            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------- |
| Qwen Code framework    | model and provider access, sessions, tools, hooks, permissions, concurrency, and general enforcement primitives | deepest, most stable      |
| Cognitive/plugin brain | shared context, phase cognition, memory behavior, guards, reusable job semantics, and user-shaped methods       | inspectable and adaptable |
| Job experience         | concrete objectives, rulings, plans, artifacts, outcomes, and accumulated experience                            | most fluid                |

A capability may span layers only when mechanism, reusable policy, and
instance state have explicit owners. The canonical definitions live in
[`harness-layers.md`](.qwen/context/harness-layers.md); Q-Seed's organism and
framework-change authority live in
[`identity.md`](.qwen/context/identity.md).

## Why the framework is a submodule

The cognitive brain and framework are one agent but not one codebase. Keeping
Qwen Code as a submodule provides:

- an exact, reproducible framework revision;
- separate framework and cognitive histories;
- clear upstream Qwen provenance;
- review friction proportional to deeper framework changes; and
- a path for users to remain on the maintained fork or evolve a personal
  descendant.

The pinned baseline is Qwen Code `v0.19.10` at
`095bd160918086a3a33192133e7923635f08f973`. Q-Seed-specific framework work
will use the public [`hadi-nayebi/qwen-code`](https://github.com/hadi-nayebi/qwen-code)
fork and remain distinguishable from upstream behavior.

## Inspect the foundation

Requirements: Git and Node.js 22 or newer.

```bash
git clone --recurse-submodules https://github.com/hadi-nayebi/q-seed.git
cd q-seed
git submodule status
node qwen-code/scripts/cli-entry.js --version
```

The expected CLI version at this stage is `0.19.10`. This verifies the pinned
framework; it does not imply that the planned Q-Seed cognitive features have
already been implemented.

If the repository was cloned without submodules:

```bash
git submodule update --init --recursive
```

## Development method

For each substantial feature:

1. Study current behavior, evidence, and failure modes.
2. Define coherent Q-Seed terminology and guarantees under `.qwen/context/`.
3. Decide framework, cognitive/plugin, job, or explicit mixed ownership.
4. Write executable acceptance tests from the approved contract.
5. Implement the smallest end-to-end slice.
6. Verify behavior, boundaries, recovery, and compatibility before expanding.

Historical prototype code is evidence, not implementation material. General
runtime primitives belong in the Qwen fork; Q-Seed-specific meaning remains
inspectable in `.qwen/`; concrete experience belongs to its job.

## Framework-change authority

Q-Seed may inspect its framework and prepare improvements, but a framework
change cannot land through ordinary self-editing. It requires isolated work,
tests and recovery evidence, a complete pull request in the Qwen fork, and
explicit user approval. Updating this repository's submodule pointer is a
separate intentional act after the framework revision is approved.

## Repository guide

- [`QWEN.md`](QWEN.md) — stable runtime entry point.
- [`.qwen/QWEN.md`](.qwen/QWEN.md) — permanent brain contract and router.
- [`.qwen/context/`](.qwen/context/) — canonical shared language.
- [`qwen-code/`](qwen-code/) — pinned framework fork.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — contribution and repository-boundary workflow.
- [`SECURITY.md`](SECURITY.md) — private vulnerability reporting.

The root directory budget is deliberately finite: `.qwen/`, `qwen-code/`, and
`.github/`. New top-level directories require an explicit unowned role and an
approved topology decision; local state and organ-specific tests stay with
their owner.

## Contributing

The architecture is still being consolidated, so early contributions are most
valuable when they improve evidence, tests, documentation, or a clearly
approved vertical slice. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before
opening a change.

## License

Q-Seed is licensed under the [Apache License 2.0](LICENSE). The Qwen Code
submodule retains its own upstream license and notices.
