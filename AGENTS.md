# Q-Seed Contributor Instructions

This repository is the public development home and reproducible composition
for Q-Seed. These instructions govern builders working in the Q-Seed
repository; they are not Q-Seed runtime instructions.

The public repository accumulates Qwen-specific context and selectively reusable
building blocks as community evidence supports them. Users and their agents may
adapt components or build from the Academy writings alone. Preserve this role;
do not treat sparseness as a defect or prescribe one standard installable harness.

## Repository organs

- `.qwen/` is the shipped cognitive/plugin brain.
- `qwen-code/` is an independently versioned framework fork and Git
  submodule.
- Root files bind the public distribution, contribution process, and runtime
  entry points.
- Builder-private session context is external to this repository. Public
  behavior must never depend on an unavailable private file.

Keep framework source commits inside `qwen-code/`. Keep Q-Seed mind and
composition commits in this repository. Update the submodule pointer only
after the framework commit has completed its own review and approval process.

## Design method

- Treat compartmentalization as a continuous placement test. Identify an
  artifact's role and existing owner before creating a new compartment.
- Maximize useful separation of context, state, operations, authority, and
  rates of change without creating arbitrary fragmentation.
- Do not mechanically port historical Seed Agent code. Study behavior and
  failures, consolidate Q-Seed's own context, write acceptance tests, and
  implement anew.
- Put general deterministic runtime primitives in the framework. Keep
  Q-Seed-specific cognitive meaning inspectable in `.qwen/`. Keep concrete
  job state in the owning job.
- A mixed feature must name who owns its mechanism, reusable policy, instance
  state, interfaces, and change authority.

## Before changing behavior

1. Read `QWEN.md`, `.qwen/QWEN.md`, and `.qwen/context/INDEX.md`.
2. Read the relevant canonical context cluster completely.
3. Confirm whether the behavior is current, target, or research.
4. Identify the owning repository and compartment.
5. Add or update executable acceptance tests before broad implementation.

Consequential changes to cognitive anatomy, instruction authority,
framework/plugin ownership, compatibility formats, user-facing setup or
question flows, and working-memory meaning require maintainer alignment before
implementation.

## Framework changes

Framework changes require a dedicated Q-Seed job or equivalent reviewed change
record, an isolated branch or worktree in `qwen-code/`, proportionate tests and
recovery evidence, a complete pull request, and explicit user approval before
merge. A model assertion, prompt unlock, or outer-repository commit is not
approval to land framework code.

## Repository hygiene

- Inspect status and diffs in the owning repository before and after each
  coherent unit.
- Keep commits scoped and do not accumulate unrelated work.
- Keep ignore rules narrow; never hide source, cognitive state, or unresolved
  ownership with broad patterns.
- Keep project fixtures and worktrees inside their owning repository, not in
  global temporary directories.
- Preserve a clean pinned baseline so inherited Qwen behavior remains
  distinguishable from Q-Seed changes.

## Root directory budget

The public repository currently has exactly three owned top-level directory
compartments:

- `.qwen/` for the shipped cognitive/plugin brain;
- `qwen-code/` for the independently versioned framework submodule; and
- `.github/` for GitHub-specific collaboration and CI metadata.

Do not create generic root `scripts/`, `tools/`, `.dev/`, `.local/`, `state/`,
`runtime/`, or `tests/` buckets. User- or machine-local state is ignored and
stored by its owning mechanism. Plugin tests stay with their plugin; framework
tests stay in `qwen-code/`; job verification stays with its job. A future root
`tests/` may be created only for a real cross-layer integration suite that has
no narrower owner. A future `docs/` must likewise be earned by durable public
engineering material that belongs neither in the README nor in canonical
Q-Seed context.

Adding any top-level directory is an architectural topology change. It
requires an explicit role, evidence that no existing compartment owns that
role, a defined authority boundary, and maintainer alignment before creation.

## Current boundary

Current contents are architectural context and a pinned framework. Do not begin broad feature translation
until the interception map, memory contract, behavior migration matrix, and
first vertical-slice acceptance criteria are complete.
