# Mobile Submission Skill

An Agent Skills compatible workflow for preparing, reviewing, and submitting iOS and Android apps to App Store Connect and Google Play.

The skill covers:

- mobile store readiness review
- App Store Connect and Google Play app-record bootstrap
- rejection-risk gates
- submission packet generation
- guided human console tasks for dashboard-only fields
- Apple and Google CLI/API execution
- dry-run, submit, and resume flows
- optional ASO, store conversion, and paid acquisition growth pass

## Install

### Codex / Agent Skills compatible agents

Install with GitHub's skill command:

```bash
gh skill install hhushhas/mobile-submission-skill mobile-submission
```

Install from this repository once it is indexed by your skill manager:

```bash
npx skills add hhushhas/mobile-submission-skill
```

Pin the first public release:

```bash
gh skill install hhushhas/mobile-submission-skill mobile-submission --pin v1.0.0
```

You can also copy the `mobile-submission/` folder into your agent's skills directory and invoke:

```text
$mobile-submission
```

### ChatGPT / OpenAI Skills

OpenAI skills can be uploaded from the Skills UI. Zip the `mobile-submission/` folder, then upload it from ChatGPT's Skills page or your workspace skill editor.

### Claude Skills

Claude supports custom skill ZIP uploads. Zip the `mobile-submission/` folder and upload it from Claude's Skills customization page. Team/Enterprise sharing depends on your organization settings.

## Expected Project Artifacts

The skill creates or updates these files inside the target app repository:

```text
scratchpad/mobile-submission-packet.yaml
scratchpad/mobile-submission-ledger.md
scratchpad/mobile-console-human-tasks.md
scratchpad/mobile-submission-learnings.md
scratchpad/mobile-submission-memory.md
```

The packet is machine-readable release state. The ledger is the chronological run audit. Human tasks are dashboard-only instructions. Learnings and memory are reusable non-secret notes.

## Safety

This skill is designed to avoid accidental submission:

- `dry-run` is the default.
- `dry-run` must not mutate App Store Connect or Google Play.
- Store execution is delegated and gated.
- Final submission requires Gate B to return `send`.
- Secrets must be referenced, not pasted.
- Dashboard-only work defaults to guided human console tasks, not browser automation.

Never commit project scratchpads, credential files, private memory, App Store Connect keys, Google service account JSON, keystores, provisioning profiles, certificates, or reviewer passwords.

## Growth Pass

The skill includes an optional Growth Pass for ASO, store conversion, paid acquisition, and product-quality readiness. Growth findings are not submission blockers unless they reveal misleading claims, policy-risky copy, broken app quality, or mismatch between listing/ad claims and real app behavior.

## Repository Layout

```text
mobile-submission/
  SKILL.md
  assets/mobile-submission-packet-template.yaml
  agents/openai.yaml
  references/
```

## License

MIT
