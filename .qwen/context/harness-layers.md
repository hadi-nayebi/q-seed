# Q-Seed Harness Layers

**Established:** 2026-07-22
**Status:** user-consolidated architecture; implementation contracts remain
feature-specific

This cluster owns the canonical vocabulary for Q-Seed's compartments and their
flexibility gradient.

## Compartmentalization `[consolidated]`

**What it is.** Compartmentalization is the core design principle of separating
information, context, operations, state, authority, and rates of change into
organs with explicit responsibilities and interfaces.

**Role in cognition.** It lets Q-Seed load and act on the right meaning at the
right time without turning its whole history into one undifferentiated prompt
or its whole harness into one undifferentiated codebase. It also makes change
safer: a fluid job can evolve without casually rewriting stable runtime
machinery, while a framework improvement can be reviewed at the depth of its
blast radius.

**Boundary and invariants.** A compartment is defined by cognitive role, not
only by a directory or repository boundary. Compartments may appear as Git
repositories, plugins, context clusters, memory files, jobs, phases, processes,
authority gates, or other forms. They must have a reason to exist, a declared
owner for each fact and operation, and an inspectable interface to adjacent
compartments.

Compartmentalization does not require every feature to live in exactly one
layer. A feature may be composed across layers, but the responsibility split
must remain explicit and must not create competing sources of truth.

“Maximal” means maximize every separation that materially improves locality,
clarity, safety, replaceability, evolvability, or authority—not maximize the
number of directories or processes. “Optimal” means each compartment earns
its boundary and interface while unnecessary fragmentation is removed. Q-Seed
therefore applies a continuous placement test to design, implementation, work,
memory, and evolution: identify the role, find its existing owner, create a
new compartment only for a genuinely unowned responsibility, and prevent
duplicated authority or context leakage across the boundary.

**Realization:** target identity principle; the repository boundary already
embodies its framework/mind split.

_Avoid:_ “everything is a plugin,” “everything belongs in the fork,” maximum
folder count as a proxy for good design, directory separation without
authority separation, or “blurred boundary” as permission to duplicate policy
and state.

## Harness flexibility gradient `[consolidated]`

**What it is.** The harness flexibility gradient orders three operational
layers from deepest and most stable to closest to experience and most fluid:

1. the Qwen Code framework layer;
2. the cognitive/plugin layer; and
3. the job experience layer.

The model layer animates all three and is separately replaceable; it is not a
fourth storage layer in this gradient.

**Role in cognition.** The gradient answers two different questions for every
capability: where must its guarantees be implemented, and where should its
meaning remain easy to inspect and adapt? Changes gain friction as they move
deeper because their blast radius and coupling increase. The preferred landing
place is the most flexible layer that can honestly provide the required
guarantee.

The gradient is not a prohibition on deeper customization. A user may operate
the stable Q-Seed distribution unchanged, customize jobs only, customize the
cognitive/plugin repository, or maintain a personal descendant of the Qwen
Code fork. All are valid Q-Seed use cases, with different maintenance and
authority costs.

**Realization:** consolidated target architecture.

_Avoid:_ “three isolated products,” treating flexibility as importance, or
assuming every user must maintain a framework fork.

## Model layer `[consolidated]`

**What it is.** The model supplies inference, language, and learned intuitions
while operating the harness. The framework provides access to it; the model
does not itself contain the complete identity, memory, tools, authority, or
history of Q-Seed.

**Role in cognition.** It animates the on-disk organism and interprets the
context, cognitive patterns, job experience, and tool results presented by the
harness. Model replaceability keeps Q-Seed's identity from being trapped in one
provider or model family.

**Boundary and invariants.** A compatible model may change independently of
the framework, cognitive/plugin, and job layers only after its compatibility
is demonstrated. The eventual research direction is a fine-tuned model with
strong intuitions about Q-Seed's shared language: compartmentalization,
context, phase cognition, proportionate friction, user authority, and safe
self-customization. Such a model would drive the harness more naturally; it
would not become the sole source of those contracts or gain authority to
bypass them.

**Realization:** replaceability is a target; a harness-specialized fine-tune is
research, not a present capability.

_Avoid:_ “the model is the agent,” “Q-Seed requires one Qwen model,” or
fine-tuning as a replacement for inspectable context and enforcement.

## Qwen Code framework layer `[consolidated]`

**What it is.** The user-controlled Qwen Code fork is Q-Seed's backbone or
operating-system layer. It supplies model/provider access, the session loop,
tools, hook and event surfaces, permissions, context transport, configuration,
concurrency, and other general runtime machinery.

**Role in cognition.** It gives the cognitive organism a stable body through
which it can perceive, reason with context, act, intercept operations, ask,
block, recover, and expose reliable extension points.

**Boundary and invariants.** This is the deepest and most stable operational
layer. It should own general mechanisms that require deterministic lifecycle
control or cannot be honestly guaranteed above the runtime. It should not bury
Q-Seed-specific meanings, user methods, job content, or cognitive policy in
framework code merely because TypeScript can express them.

Framework customization is valid, including a user's own descendant fork, but
it carries the strongest engineering and approval friction. Q-Seed framework
changes require the authority process defined in
[`identity.md`](identity.md#framework-evolution-authority).

**Realization:** the local fork exists and is pinned to the accepted clean
baseline; Q-Seed-specific framework changes have not begun.

_Avoid:_ “upstream Qwen Code is Q-Seed,” “the fork is just a dependency,” or
routine direct self-editing of the framework.

## Cognitive/plugin layer `[consolidated]`

**What it is.** The cognitive/plugin layer is Q-Seed's reusable, inspectable
Markov brain. It defines canonical context, cognitive patterns, phase systems,
always-on and conditional organs, working-memory behavior, job semantics,
guards, voices, policies, knowledge, and user-shaped operating methods that do
not require permanent realization inside the framework.

**Role in cognition.** It turns a general model-and-tools runtime into this
particular evolving agent. It is more flexible than the framework: behavior can
be learned, discussed, tested, replaced, or refined without forcing every
change into the operating-system codebase.

**Boundary and invariants.** The cognitive/plugin layer owns the reusable
meaning and machinery of jobs, but not the lived contents of an individual job
instance. It may contain soft guidance, hard plugin controls, and structural
patterns. If a guarantee needs a missing deterministic runtime primitive, the
general primitive belongs in the framework while Q-Seed policy remains visible
here.

The stable Q-Seed distribution includes this layer as its own inspectable
repository or repository compartment. Users may use it unchanged, customize
it under its own safeguards, or evolve it alongside a personal framework fork.

**Realization:** `.qwen/` currently contains the bootstrap and first canonical
context; the complete plugin brain is still to be implemented anew.

_Avoid:_ “optional decoration,” “prompt collection,” conflating reusable job
machinery with job instances, or assuming plugin-level flexibility means
unrestricted self-authorization.

## Job experience layer `[consolidated]`

**What it is.** The job experience layer contains concrete jobs and their
evolving local state: objectives, user rulings, plans, working context,
artifacts, verification, outcomes, and the experience accumulated while a user
and Q-Seed perform real work together.

**Role in cognition.** It is the most flexible and fluid harness layer. It is
where the general Q-Seed organism becomes specific to this user, this task,
this run, and eventually this repeatable way of working. Job experience
provides evidence from which reusable cognitive patterns may later be proposed.

**Boundary and invariants.** The cognitive/plugin layer defines what a job is,
its lifecycle, its authority gates, and how job memory is routed. A job
instance owns its particular content and experience. Job-local discoveries do
not automatically rewrite plugins or the framework: promotion into a reusable
organ or deeper mechanism requires evidence, consolidation, testing, and the
appropriate user approval.

Jobs may customize existing cognitive behavior for their scope, and future job
forms may carry richer local organs, but a job must not silently become a
second global policy store.

**Realization:** consolidated target role; the Q-Seed job format and lifecycle
have not yet been redefined from prototype evidence.

_Avoid:_ “jobs are just task folders,” treating one successful run as a global
rule, or placing user-specific job state in the framework.

## Mixed realization `[consolidated]`

**What it is.** Mixed realization is the intentional implementation of one
capability across multiple layers, with each layer owning a distinct part of
the capability.

**Role in cognition.** It allows strong guarantees without hiding meaning. For
example, the framework may expose a pre-mutation interception event, the
cognitive/plugin layer may define the policy and recovery guidance that uses
it, and the active job may provide the scoped objective and approval state.

**Boundary and invariants.** Every mixed feature must name:

- the general mechanism owned by the framework;
- the reusable cognitive meaning and policy owned by the plugin layer;
- any instance-specific state owned by the job;
- the interface and data crossing each boundary; and
- the authority required to change each part.

One layer must not silently compensate for an absent guarantee in another.
Duplicated state requires an explicit synchronization owner or must be removed.

**Realization:** adopted feature-placement method; individual mixed features
remain undecided until their context contracts are consolidated.

_Avoid:_ accidental cross-layer coupling, duplicated enforcement with no
owner, or using “mixed” to postpone a placement decision.

## Stable distribution and personal lineage `[consolidated]`

**What it is.** A stable Q-Seed release joins a tested Qwen Code fork revision
with a compatible Q-Seed cognitive/plugin release. Jobs then grow locally from
that base. Users may remain on the maintained stable fork or create and evolve
their own descendant fork as their Q-Seed requires deeper customization.

**Role in cognition.** This gives newcomers a coherent organism without
requiring framework maintenance, while preserving full local ownership and an
evolution path for users whose needs exceed the stable runtime.

**Boundary and invariants.** The framework and cognitive/plugin histories stay
distinct and reproducibly linked. A personal fork must retain a declared
upstream lineage, compatibility boundary, and recovery path. Choosing the
stable fork is not a lesser form of ownership; choosing a personal fork is not
permission to weaken user approval or safety guarantees invisibly.

**Realization:** target release model. Fork bootstrap, update channels,
compatibility manifests, and recovery mechanics remain to be designed.

_Avoid:_ requiring every user to become a Qwen maintainer, treating the stable
fork as immutable, or presenting unproven cross-version compatibility as
automatic.

## Feature-placement test `[consolidated]`

Before implementation, ask in this order:

1. What behavior, cognitive role, and user-visible promise have been
   consolidated in context?
2. What is specific to one job, reusable across Q-Seed jobs, or general to the
   framework?
3. What must be deterministic, pre-side-effect, concurrent, recoverable, or
   enforced even when the model is mistaken?
4. What meaning must remain inspectable and adaptable outside framework code?
5. Can the most flexible layer provide the guarantee honestly?
6. If layers must compose, who owns each fact, state transition, and approval?

The result is a fork, cognitive/plugin, job, or mixed placement with explicit
interfaces—not a preference for one technology.

**Realization:** current design method; the Qwen interception map will supply
the runtime evidence needed to apply it.
