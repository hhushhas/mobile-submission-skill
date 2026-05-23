# asc CLI

Use `asc` first for Apple/App Store Connect/TestFlight work. Keep it updated before serious submission work.

## Update/check

```bash
brew update && brew upgrade asc
asc --version || asc version
asc auth doctor
```

If leaf `--help` fails, use docs: https://docs.asccli.sh/

## Auth

- Prefer API-key/JWT auth via profile.
- Useful env/config: `ASC_KEY_ID`, `ASC_ISSUER_ID`, `ASC_PRIVATE_KEY_PATH`, `ASC_PRIVATE_KEY`, `ASC_PRIVATE_KEY_B64`, `ASC_PROFILE`, `ASC_APP_ID`.
- Use `asc auth token` for direct API fallback.

## Common commands

```bash
asc apps list --bundle-id <bundle> --output json --pretty
asc status --app <app-id-or-bundle> --include app,builds,testflight,appstore,submission,review
asc builds upload --app <app-id> --ipa <path>
asc builds wait --app <app-id> --latest
asc validate --app <app-id> --version <version>
asc validate testflight --app <app-id>
asc publish testflight --app <app-id>
asc publish appstore --app <app-id> --ipa <path> --version <version> --submit --confirm
asc submit status --version-id <version-id>
```

## Use for

- App lookup/status.
- IPA upload and build wait.
- TestFlight build availability.
- Pricing/availability where supported.
- App Review details/submission where supported.
- Status polling.

## Preferred flows

- TestFlight: `asc publish testflight`.
- App Store: `asc validate`, then `asc publish appstore --submit --confirm`.
- Prep without submit: `asc release stage`.
- Do not use deprecated `asc submit preflight`; use `asc validate`.

## Gaps

- App creation and App Privacy may require `asc web ...` or App Store Connect UI.
- Use guided human console tasks for web-only gaps unless the user explicitly asks for browser/computer-use.
- Use `asc schema` + `asc auth token` for direct API fallback.
