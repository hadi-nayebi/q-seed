# Security Policy

## Development status

Q-Seed is experimental Foundation-stage software. It is not yet suitable for
production or unattended operation. Interfaces, safeguards, and compatibility
contracts may change before the first stable release.

## Reporting a vulnerability

Do not disclose a suspected vulnerability in a public issue. Use GitHub's
private vulnerability reporting for this repository:

1. Open the repository's **Security** tab.
2. Choose **Advisories**.
3. Select **Report a vulnerability**.

Include the affected revision, reproduction steps, expected impact, and any
known workaround. Reports involving the Qwen Code framework should state
whether the issue is specific to the Q-Seed fork or also reproducible in
upstream Qwen Code.

There is no guaranteed response-time SLA during the Foundation stage, but
reports will be triaged privately before public remediation details are
published.

## Scope

Security-sensitive areas include instruction and context authority, tool
interception, approval capture, framework self-modification, plugin integrity,
working-memory provenance, subagent isolation, secret handling, and update
lineage.
