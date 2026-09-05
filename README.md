# Q-Seed

[![Foundation validation](https://github.com/hadi-nayebi/q-seed/actions/workflows/foundation.yml/badge.svg)](https://github.com/hadi-nayebi/q-seed/actions/workflows/foundation.yml)
[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Purpose](https://img.shields.io/badge/purpose-pattern%20accumulation-blue.svg)](#project-status)

Q-Seed is Hadosh Academy's public pattern-accumulation repository for harnesses
using Qwen Code. Its reference composition separates inspectable cognitive
context under `.qwen/` from a user-controlled framework fork under `qwen-code/`.

The project learns from the behavior and failures of an earlier Seed Agent
prototype, but it is not a code port. Each capability is understood, defined
in Q-Seed's own shared language, assigned to the right architectural layer,
tested, and implemented anew.

## Project status

The repository is deliberately sparse: it currently establishes architectural
context, layer boundaries, authority, and a reproducible Qwen Code baseline.
The [Academy writings](https://hadi-nayebi.github.io/blog.html) supply task- and
framework-agnostic principles. Community implementation evidence can lead to
selectively reusable components here; it does not prescribe a standard harness.

Each user and their agent may adapt those components or build entirely from
the writings. Planned cognitive capabilities remain distinct from implemented
framework behavior.

The next engineering work maps Qwen's interception surfaces, specifies local
working-memory behavior, assesses prototype capabilities by cognitive role,
and selects the first narrow end-to-end feature.

## Architecture

```text
Q-Seed
├── .qwen/             cognitive/plugin brain
│   └── jobs/          fluid user–Q-Seed experience, when specified
└── qwen-code/         user-controlled framework fork
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

The current pin is the reviewed Qwen Code `v0.21.7` integration at
`b3784681d129c8d3d237625d42870802d29e00a2`. The original `v0.19.10`
baseline is historical provenance, not the current checkout. Q-Seed-specific framework work
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

The expected CLI version is `0.21.7`. This verifies the pinned
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
`.github/`. New top-level directories require a distinct enduring role that no
existing compartment owns, plus an approved topology decision; local state and
organ-specific tests stay with their owner.

## Contributing

The architecture is still being consolidated, so early contributions are most
valuable when they improve evidence, tests, documentation, or a clearly
approved vertical slice. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before
opening a change.

## License

Q-Seed is licensed under the [Apache License 2.0](LICENSE). The Qwen Code
submodule retains its own upstream license and notices.
