# Contributing to Q-Seed

Q-Seed is currently in its Foundation stage. Contributions are welcome, but
architectural clarity and executable evidence take priority over feature
volume.

## Start with the repository boundaries

- Q-Seed cognition, public context, and composition live in this repository.
- General framework mechanisms live in the `qwen-code` fork and follow its
  separate pull-request history.
- Concrete job state belongs to the job that creates it.
- Private builder notes are not public product authority.

Read `README.md`, `QWEN.md`, `.qwen/QWEN.md`, and the relevant files under
`.qwen/context/` before proposing behavioral work.

## Proposing a change

For a correction that does not change behavior, open a focused pull request.
For a new capability or consequential behavior change, open an issue or design
discussion first and describe:

1. the user-visible promise;
2. the cognitive role and boundary;
3. current evidence and known failure modes;
4. candidate framework, cognitive/plugin, job, or mixed ownership;
5. authority and recovery implications; and
6. executable acceptance criteria.

Historical prototype behavior may support the proposal, but prototype code is
not a transplant source.

## Development workflow

1. Create a focused branch from the current default branch.
2. Consolidate approved terminology in the owning context file when needed.
3. Add the narrowest meaningful test or validation first.
4. Implement only the approved scope.
5. Run `node tests/composition/foundation.mjs` and all affected tests.
6. Review the owning repository's complete diff.
7. Commit a coherent unit and open a pull request describing boundaries,
   risks, verification, and recovery.

Do not include a `qwen-code` working-tree change in a Q-Seed cognitive-layer
commit. Framework changes receive their own branch and pull request in the
fork; this repository updates only the approved submodule revision afterward.

## Context changes

Canonical terms have one home under `.qwen/context/`. Use `[draft]` for a
proposed meaning and `[consolidated]` only after explicit maintainer alignment.
Distinguish current behavior from target architecture and research direction.
Do not duplicate the same authority contract across files.

## Pull requests

Pull requests should explain:

- what changed and why;
- which compartment owns the change;
- whether behavior or authority changed;
- tests and manual verification performed;
- compatibility or migration effects; and
- rollback or recovery when the change can affect the harness itself.

Keep pull requests small enough to review as one coherent change.
