# gplay CLI

Use `gplay` first for Google Play work. Keep it updated before serious submission work.

## Update/check

```bash
brew update && brew upgrade tamtom/tap/gplay
gplay version
gplay auth doctor --output json
```

Docs/source: https://github.com/tamtom/play-console-cli

## Auth

```bash
gplay auth login --service-account <path> --profile <name> --set-default
gplay auth status
gplay init --package <package> --service-account <path>
```

Use Android Publisher scope when minting tokens directly: `https://www.googleapis.com/auth/androidpublisher`.

## Common commands

```bash
gplay apps list --output json --pretty
gplay preflight --bundle <aab>
gplay validate --package <package>
gplay publish track --package <package> --track <track> --bundle <aab>
gplay edits create --package <package> --output json --pretty
gplay bundles upload --package <package> --edit <edit-id> --file <aab>
gplay release --package <package> --track <track> --bundle <aab> --wait
gplay tracks get --package <package> --edit <edit-id> --track <track> --output json --pretty
gplay tracks update --package <package> --edit <edit-id> --track <track> --releases <json>
gplay promote --package <package> --from <track> --to <track>
gplay rollout update --package <package> --track production --rollout 0.1
gplay edits validate --package <package> --edit <edit-id>
gplay edits commit --package <package> --edit <edit-id>
```

## Use for

- App lookup.
- Offline artifact preflight.
- Submission validation.
- High-level track publishing.
- Edit lifecycle.
- AAB/APK upload.
- Tracks/releases/rollouts/promotions.
- Listings/images/details.
- Testers where supported.
- Data Safety when prepared in supported JSON format.
- Bundle/listing/screenshot validation.

## Preferred flows

- Pre-upload: `gplay preflight`.
- Release gate: `gplay validate`.
- High-level publish: `gplay publish track`.
- Explicit low-level control: `gplay release` or edit lifecycle.

## Track notes

- Local help clearly exposes `production`, `beta`, `alpha`, and `internal`.
- Treat Google Play `open testing` carefully: map actual API/CLI track state before assuming track name.
- Always inspect tracks before updating: `tracks list/get` inside an edit.
- If console says `This track is paused`, `Testers are not receiving this release`, or `No active releases`, use track inspection plus guided human console tasks if needed.
- Play Console can show an open-testing track as paused/inactive even when Android Publisher API reports a `beta` release with `status: completed`. In that case, resume the track in Play Console, then send the Publishing overview change for review.
- Internal testing links fail when the internal track only has a draft release, even if tester email lists are selected.
- For first production release, Android Publisher API can commit `status: completed` only after production countries/regions are targeted.
- API `countryTargeting` may be rejected for completed releases, and first production release may not support staged `inProgress`; set production countries/regions in Play Console first, send that change for review, then retry API promotion.
- Play Console email recipients live under `Users and permissions` > `Email recipients`; use them for notification-only addresses that do not need Play Console access.
- Compare local `android.aab_sha256` and `android.version_code` with uploaded/store state before track mutation.
- Any changed Android release artifact needs a new `version_code`.

## Gaps

- Some App Content forms may require Play Console UI: content rating, target audience, ads, privacy policy, sensitive declarations.
- Use guided human console tasks for web-only gaps unless the user explicitly asks for browser/computer-use.
- Use direct Android Publisher API/spec search only when `gplay` lacks coverage or output is ambiguous.
