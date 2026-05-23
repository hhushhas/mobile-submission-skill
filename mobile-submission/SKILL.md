---
name: mobile-submission
description: "Orchestrate iOS and Android store releases from readiness review through App Store Connect and Google Play submission. Use for mobile app submission preflight, app-record bootstrap, rejection-risk review, submission packet creation, human console guidance, Apple/Google CLI/API execution, dry-runs, submit, and resume from scratchpad/mobile-submission-packet.yaml."
license: MIT
---

# Mobile Submission

Use this skill to take a mobile app from project discovery to App Store Connect and Google Play submission.

The parent agent is the orchestrator. It owns decisions, state, packet, ledger, human guidance, and final reporting. It should delegate broad discovery, blocker fixes, store execution, and review gates instead of trying to hold every detail locally.

Canonical project artifacts:

- `scratchpad/mobile-submission-packet.yaml`
- `scratchpad/mobile-submission-ledger.md`
- `scratchpad/mobile-console-human-tasks.md`
- `scratchpad/mobile-submission-learnings.md`
- `scratchpad/mobile-submission-memory.md`

Optional reusable private memory:

- a user-private memory file such as `~/.agents/private/mobile-submission-memory.md`, if the agent/runtime supports it

Use `assets/mobile-submission-packet-template.yaml` for the packet shape. Prefer a project-provided `scratchpad/mobile-submission-packet-template.yaml` when it exists.

Artifact roles:

- Packet: the current machine-readable release contract: app facts, store targets, credentials refs, build/artifact paths, review notes, URLs, risks, and action.
- Ledger: the chronological audit trail for this run: timestamps, discovery reports, decisions, commands, store states, errors, retries, human completions, and gate outcomes.
- Human tasks: dashboard-only steps the human needs to perform.
- Learnings: short durable notes from this run that should help future submissions for the same project.
- Memory: reusable preferences and private setup facts to read before asking repeated questions.

## References

Load only the references needed for the current phase:

- Readiness and policy mapping:
  - `references/readiness/feature-to-policy-matrix.md`
  - `references/readiness/apple-review-preflight.md`
  - `references/readiness/google-play-preflight.md`
  - `references/readiness/rejection-risk-taxonomy.md`
- Growth, ASO, and paid acquisition:
  - `references/growth/apple-aso.md`
  - `references/growth/google-play-aso.md`
  - `references/growth/product-quality.md`
  - `references/growth/paid-acquisition.md`
- Human console guidance:
  - `references/console/apple.md`
  - `references/console/google.md`
- Store execution:
  - `references/execution/asc-cli.md`
  - `references/execution/gplay-cli.md`
  - `references/execution/apple-api-setup.md`
  - `references/execution/google-api-setup.md`
  - `references/execution/spec-search.md`
- Missing policy/support/deletion URLs:
  - `references/execution/static-policy-site.md`
- Final reporting:
  - `references/execution/success.md`

## Mode Selection

- If no packet exists, or the user asks whether the app is ready, run the full discovery/readiness flow.
- If a packet exists and the user asks to dry-run, upload, submit, release, or resume, load the packet and continue from the relevant phase.
- If the user asks to get ready and submit, run readiness first; stop on `status: blocked`.
- If the user asks for ASO, downloads, ranking, app growth, promotion, ads, paid acquisition, or launch strategy, run Growth Pass as an optional standalone or post-readiness phase.
- Default `controls.action` is `dry-run`; say so.
- If the user explicitly says `submit`, do not ask for final confirmation.
- Stop if the packet says `status: blocked`, unless the user asks to fix blockers or rerun readiness.

Action semantics:

- `dry-run`: do not mutate App Store Connect or Google Play. Do local discovery, artifact inspection, CLI validation with dry-run/validate flags, packet/ledger/human-task generation, and report exactly what would be submitted.
- `submit`: after Gate B returns `send`, store writes are authorized: uploads, metadata edits, track commits, TestFlight/App Review submission, and equivalent API/CLI actions.
- `resume`: load packet/ledger, infer the last completed phase, and continue using the packet's `controls.action`; if absent, default to `dry-run`.
- `upload` or `release` in the user request must be normalized into packet action plus explicit target: upload-only, staged/draft, TestFlight, App Review, track commit, or production rollout.

Packet status:

- `ready`: no known P0/P1 blockers after Gate A/Gate B evidence.
- `ready_warn`: no P0 blockers, but P1 risks or unknowns remain; submit only if Gate B returns `send` and the user explicitly requested submit or accepted the risk.
- `blocked`: P0/cannot-submit issue; stop unless fixing blockers or rerunning readiness.

Artifact mode:

- `packet`: use local artifact paths declared in the packet.
- `uploaded`: use an existing uploaded store build; verify build ID/version/hash/store state first.
- `build`: build/export the release artifact from source before upload.

## Memory

Read memory before asking operational setup questions:

1. `scratchpad/mobile-submission-memory.md`
2. User-private memory such as `~/.agents/private/mobile-submission-memory.md`, if available

Use memory for reusable, non-secret facts:

- preferred Apple/Google accounts or teams
- credential reference locations such as `op://`, `env:`, `secret:`, `ref:`, or secure local paths
- default support/privacy domains
- recurring App Store Connect or Play Console setup blockers
- CLI/API commands that reliably work across projects
- preferred tracks, release modes, contact emails, or review-note conventions

Do not store secret values, private keys, keystore passwords, service account JSON, `.p8`, `.p12`, reviewer passwords, or full logs in memory.

Priority order: user request > packet > project memory > global private memory > ask.

Append memory only for durable reusable facts. Keep run-specific details in the ledger and project-specific lessons in learnings.

## Delegation Model

Use lightweight/low-cost read-only subagents for:

- broad repo discovery and path mapping
- iOS and Android config/fact extraction
- backend or reviewer-access fact finding
- store asset and metadata discovery
- store app-record existence checks
- focused reference research for manual console maps

Use stronger implementation/execution subagents for:

- approved blocker fixes
- Apple execution
- Google Play execution
- narrow retry/recovery work

Use the strongest available review model/subagent for:

- Gate A readiness review
- Gate B pre-submit review

The parent writes the ledger after subagents return. Avoid several subagents writing the same ledger directly.

If subagent tooling is unavailable, do the same phase locally, keep reports compact, and preserve the parent-owned packet/ledger rules.

## Workflow

### 1. Discovery Swarm

Launch lightweight read-only subagents in parallel to inspect the project. Ask for compact evidence-backed reports, not essays.

Discover:

- app name, bundle ID, package name, platforms, framework, build system, release lane
- iOS project paths, Android project paths, native manifests, entitlements, permission strings, app icons
- auth methods, account creation, account deletion, 2FA, reviewer access, demo account needs
- payments, subscriptions, commerce, ads, tracking, analytics SDKs
- user-generated content, chat/social features, moderation, reporting, blocking
- AI-generated content, third-party AI processing, AI reporting/disclosure
- backend dependencies, staging/production availability, deletion/export/support endpoints
- permissions: push, camera, mic, photos, contacts, location, Bluetooth, background modes, exact alarm, full-screen intent
- sensitive domains: kids, health, finance, crypto, gambling, dating, government, news, regulated content
- privacy policy, terms, support URL/email, data export/deletion paths
- store assets, screenshots, feature graphic, previews, listing copy, release notes

Record findings in `scratchpad/mobile-submission-ledger.md`.

### 2. Store Bootstrap Check

After discovery, verify whether required store app records exist.

- Apple: check App Store Connect app record, bundle ID, team/account access, agreements, and target platform.
- Google: check Play Console app record, package name access, app signing/setup state, and API/service account access.

If a record exists and is accessible, do not ask the human to create it.

If a record is missing or inaccessible, create guided human bootstrap tasks using:

- `references/console/apple.md`
- `references/console/google.md`

Preserve control types exactly. Do not turn checkboxes, radio buttons, dropdowns, uploads, or questionnaires into prose answers.

### 3. Gate A: Readiness Review

Use the strongest available review model/subagent to assess discovered facts against Apple and Google submission requirements.

The review must return:

- `P0 Blockers`: likely rejection or cannot-submit issues
- `P1 High Risk`: likely reviewer concern or resubmission risk
- `P2 Polish`: conversion, clarity, and reviewer-experience improvements
- `Unknowns`: facts not verified and where to check next
- Recommended fix strategy

Treat official Apple and Google documentation as final authority. Browse current official docs when policy details matter, especially for payments, kids/family features, health, finance, crypto, gambling, background location, subscriptions, ads, tracking, or AI/UGC moderation.

Ask the human before fixing meaningful blockers:

- summarize blockers
- recommend an approach
- ask whether to proceed with that approach or follow different guidance

### 4. Delegated Fixes

After human approval, use stronger implementation subagents for bounded fixes.

Prefer one implementation subagent for small or related fixes. Split fixes across multiple subagents only when the work is clearly separable, large enough to benefit from parallelism, and has low risk of conflicting edits. If several P0/P1 fixes are small, bundle them into one bounded implementation task.

Examples:

- iOS native config, permissions, icons, entitlements, Info.plist, signing hints
- Android manifest, permissions, target SDK, versioning, build config
- app behavior for reviewer access, auth, account deletion, UGC/AI reporting, disclosure
- backend deletion/support/privacy endpoints
- store assets, release copy, screenshots, listing hygiene

The parent reviews changes, runs relevant checks, and updates packet/ledger.

For bugs or rejection-risk fixes, add regression tests when they fit the codebase.

### 5. Packet and Human Console Tasks

Create or update `scratchpad/mobile-submission-packet.yaml`.

Rules:

- YAML only; do not require a Markdown packet.
- Omit unknown/default fields in real packets.
- Use `null` only when preserving an explicit slot is useful.
- Include secret references, never secret values.
- Record artifact hashes when release artifacts exist: `ios.ipa_sha256`, `android.aab_sha256`.
- For Android, require a new `version_code` when the release AAB changes.
- For Apple, capture signing/build-path facts: local vs cloud/EAS, certificate, provisioning profile, keychain, build ID.
- For Apple screenshots, note when TestFlight is needed before final screenshot capture.

Create `scratchpad/mobile-console-human-tasks.md` for console-only work.

Use:

- `references/console/apple.md`
- `references/console/google.md`

Human task rules:

- Include direct URLs only as best-effort convenience links.
- Always include fallback navigation.
- Preserve the dashboard control shape: checkbox, radio, dropdown, text field, textarea, file upload, questionnaire, matrix/table.
- Give the exact value to select, paste, upload, or leave unchanged.
- If a required console field is missing from the reference, mark it unknown and update/research the reference instead of hallucinating.

### 6. Store Execution

Use stronger execution subagents for store execution. The parent should not take over store execution just because only one store is selected.

- If both stores are selected, delegate Apple and Google in parallel.
- If only Apple is selected, delegate the Apple workstream.
- If only Google is selected, delegate the Google Play workstream.

- Apple workstream: App Store Connect, TestFlight, App Review, IPA/build association, review info, recovery.
- Google workstream: Google Play API, AAB upload, edit validation/commit, track status/rollout, listing/API-supported fields, recovery.

Use `asc` and `gplay` first when available. Keep them updated before serious submission work. Use direct API calls only when existing CLI coverage is missing and official specs have been checked.

Use browser/computer-use only for console-only gaps when the user explicitly wants that path. The default is guided human console work.

Normalize Android packet track labels before CLI/API calls:

- `open` -> Android Publisher API `beta`; use the spelling required by local `gplay` help.
- `internal` -> `internal` for `gplay`; verify whether direct API calls require `qa`.
- `closed:<name>` -> exact custom closed-testing track name after inspecting Play Console/API state.
- Never pass packet aliases directly to API/CLI without resolving them.

Execution subagents should return:

- status: done, blocked, or needs_parent
- store
- actions taken
- build IDs/version codes/track state
- errors and retry attempts
- durable learnings
- next step

The parent appends useful non-secret learnings to `scratchpad/mobile-submission-learnings.md`.

### 7. Human Console Pass

Guide the human through `scratchpad/mobile-console-human-tasks.md`.

Keep instructions actionable and dashboard-shaped:

- page or section
- fallback path
- field name
- control type
- exact selection/value/upload
- when to skip
- how to confirm completion

Do not ask the human for readiness/policy facts already discovered unless the fact is missing, contradictory, or cannot be verified.

### 8. Gate B: Pre-Submit Review

Before sending for review, use the strongest available review model/subagent to audit:

- packet
- ledger
- human console task completion
- App Store Connect/Google Play state
- uploaded build metadata
- listing copy and media
- app privacy, data safety, account deletion, permissions, review notes
- demo/reviewer access
- remaining P0/P1 risks

The gate returns `send` or `do_not_send` with reasons and required fixes.

### 9. Optional Growth Pass

Run Growth Pass when the user asks for ASO, downloads, ranking, store conversion, promotion, ads, paid acquisition, launch strategy, or passive-income potential.

Growth Pass is not a submission blocker. Treat growth issues as optional recommendations unless they reveal misleading listing claims, policy-risky copy, broken app quality, or a mismatch between screenshots/ads/listing and real app behavior.

Load only the relevant growth references:

- Apple listing/search/conversion: `references/growth/apple-aso.md`
- Google Play listing/search/conversion: `references/growth/google-play-aso.md`
- Product quality and pre-ads readiness: `references/growth/product-quality.md`
- Paid/external acquisition: `references/growth/paid-acquisition.md`

Growth Pass should inspect available app/store/product context, then report:

- Product Quality
- Store Listing
- ASO / Discovery
- Paid Acquisition
- Measurement
- Top 10 Actions

Do not promise top ranking, passive income, or profitable paid acquisition. Frame growth as an experiment loop: improve product and listing, measure conversion/retention, run small tests, then scale winners.

### 10. Send for Review

If Gate B returns `send`, submit through CLI/API where possible.

- Apple: submit to TestFlight external review or App Review according to `ios.target`.
- Google: commit or update the selected track according to `android.track`, `android.status`, and `android.rollout`.

If a final dashboard-only action remains, guide the human with exact console instructions from the references.

## Official Sources

Prefer official sources over blog posts or memory:

- Apple App Review Guidelines: https://developer.apple.com/app-store/review/guidelines/
- Apple account deletion guidance: https://developer.apple.com/support/offering-account-deletion-in-your-app/
- App Store Connect help: https://developer.apple.com/help/app-store-connect/
- Google Play User Data policy: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play account deletion requirements: https://support.google.com/googleplay/android-developer/answer/13327111
- Google Play user-generated content policy: https://support.google.com/googleplay/android-developer/answer/9876937
- Google Play AI-generated content policy: https://support.google.com/googleplay/android-developer/answer/13985936
- Android target API requirements: https://developer.android.com/google/play/requirements/target-sdk
- Android Publisher API: https://developers.google.com/android-publisher

## Guardrails

- Do not claim store readiness without evidence.
- Do not invent Apple or Google declarations.
- Do not paste secrets, private keys, keystore passwords, service account JSON, `.p8`, `.p12`, reviewer passwords, or full logs in chat.
- Keep secrets as refs: `op://`, `env:`, `secret:`, `ref:`, or secure local paths.
- Verify claims against files, commands, artifacts, console/API state, or official docs.
- Mark unverified items as unknowns.
- Keep project-specific decisions in the project repo/spec. Keep this skill project-agnostic.

## Final Output

Lead with the result, not a generic checklist.

Include:

- mode: readiness, dry-run, submit, resume, or full-pipeline
- packet path/status/stores/version/build
- Gate A result and remaining risks
- fixes made or delegated
- Apple result
- Android result
- human console tasks path and completion state
- Gate B result
- ledger path
- learnings added
- duration
- next step

If blocked, say exactly what is missing and where to resolve it.
