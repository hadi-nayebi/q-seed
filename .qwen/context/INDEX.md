# Q-Seed Context Index

**Established:** 2026-07-22
**Status:** canonical shared-language contract

## Purpose

`context/` is the shared language between the user, Q-Seed, and the builders
who evolve it. It defines what Q-Seed's important concepts mean, what role each
concept plays in cognition, where its authority begins and ends, and how it
relates to other concepts.

Context is written before implementation so historical code does not silently
choose Q-Seed's vocabulary or architecture. Once the user consolidates a term,
implementation and public explanations must conform to that meaning or record
an explicit new ruling.

This directory is not:

- a transcript of design conversations;
- an implementation inventory or source-code tour;
- a copy of the Claude prototype glossary;
- a store for temporary evidence, plans, or job state; or
- permission for Q-Seed to implement or approve its own changes.

Builder evidence and private development continuity live outside the shipped
mind. Deliberately public engineering evidence belongs in the repository's
public documentation or the owning implementation. Durable learned mechanics
will live under `.qwen/knowledge/` when that compartment is created. Individual
work and experience belong to the job layer. `context/` owns the stable
meanings those other compartments use.

## Term states

- **`[draft]`** — a candidate meaning that still requires discussion.
- **`[consolidated]`** — explicitly aligned with the user and canonical until
  a later ruling changes it.

Q-Seed or a builder may propose a draft. Only explicit user alignment promotes
it to consolidated. A consolidated future design is still a real contract, but
its realization must be labelled honestly as `current`, `target`, or
`research`.

## Minimum term anatomy

Each substantial term should state:

1. **What it is** — the shortest precise definition.
2. **Role in cognition** — why Q-Seed needs the concept.
3. **Boundary and invariants** — what it owns, what it must not absorb, and
   what remains true as mechanisms evolve.
4. **Relationships** — links to the other canonical terms it composes with.
5. **Realization** — `current`, `target`, or `research`, without presenting an
   aspiration as built.
6. **Avoid** — misleading aliases or framings that would collapse a meaningful
   distinction.

Use stable heading links rather than line-number citations. Detailed mechanics
belong here only when they are part of the concept's meaning; volatile source
locations and test evidence belong in builder or knowledge artifacts.

## Single-home rule

Every canonical fact has one home. Other context files link to that term rather
than restating it. A concept may participate in many systems without acquiring
multiple competing definitions.

When one feature is realized in several layers, each layer owns a different
part of its contract. That is composition, not duplicated authority. The
cross-layer interface must say which layer owns mechanism, reusable cognition,
and instance-specific experience.

## Context clusters

| File                                     | Canonical subject                                                                                                                     | State                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| [`harness-layers.md`](harness-layers.md) | compartmentalization; flexibility gradient; model, framework, cognitive/plugin, and job layers; mixed realization; distribution paths | consolidated                                  |
| [`identity.md`](identity.md)             | Q-Seed as one organism; repository identity; framework-evolution authority; identity invariants                                       | consolidated, with open enforcement contracts |

Create another cluster only when a feature study has enough evidence for a
coherent vocabulary discussion. Do not pre-create empty context files for
features that have not been studied.
