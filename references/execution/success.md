# Success

Use before final report.

Good run signals:

- Read memory first.
- Correct Apple/Android delegation.
- Spec subagents used before custom API calls.
- Store agents kept going through recoverable errors.
- Ledger updated with start/end/duration.
- Learnings captured.
- Dry-run or submit completed quickly.
- Waiting-for-review recorded as successful local completion.

Timing:

- Record submit start/end/duration in `scratchpad/mobile-submission-ledger.md`.
- If readiness ledger exists, also report readiness start to submit end duration.
- Do not count store review wait time as submission time.

Store status:

- Apple success means submitted to review, e.g. `WAITING_FOR_REVIEW`, not approved/live.
- Google success means submitted/committed to the target track or changes are in review, not necessarily live.
- Final report should say: local submission complete; waiting for store review.
- After waiting-for-review is reached, stop polling unless the user asks.
