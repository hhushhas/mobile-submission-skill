# Apple API Setup

Use for Apple setup, blockers, TestFlight, App Review, and App Store Connect calls.

## User setup

- Create/verify Apple Developer membership.
- Complete agreements/tax/banking if required.
- Create App Store Connect app record. The Apps API says not to create new apps through the API.
- Publish App Privacy answers before App Review submission.
- Request API access in App Store Connect: Users and Access > Integrations > App Store Connect API.
- Generate team API key as Account Holder/Admin, or individual key as submitting user.
- Store refs only; prefer 1Password `op://` refs for key ID, issuer ID, and `.p8`/JSON location. Never paste key contents.
- Use guided human console tasks for console-only setup gaps unless the user explicitly asks for browser/computer-use.
- When blocked, give exact page/section/action order where known.

Sources:

- https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-api
- https://developer.apple.com/documentation/appstoreconnectapi/apps
- https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app

## Automate

- JWT auth with App Store Connect API key.
- Query apps, versions, builds.
- Update supported metadata/localizations.
- Upload screenshots/previews/review attachments via asset upload APIs.
- Set App Review details.
- Attach processed build.
- Create/update review submission.
- For TestFlight, provide beta test info, add the build to tester groups, and make it available.

## Binary upload

- Prefer `asc builds upload` or `asc publish appstore` when available; both may use App Store Connect upload operations or presigned URLs.
- If `asc` is unavailable or blocked, fall back to Xcode, Transporter, or the Transporter Mac app.
- Do not hand-roll build upload API calls unless `asc` cannot cover the case and current Apple docs/specs have been checked.
- API keys can be used with Transporter when falling back to Transporter.
- Before upload, verify exported IPA bundle ID, version, and build match the packet.
- Record `ios.ipa_sha256` in the packet/ledger.
- After Expo/prebuild/native regeneration, re-check entitlements and build number.
- Ask signing choices before build: local vs cloud/EAS, certificate, provisioning profile, and keychain.

Source:

- https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds
- https://developer.apple.com/documentation/appstoreconnectapi/post-v1-builduploads

## TestFlight default

- Default Apple flow after upload: make the build available in TestFlight, then submit to App Review when requested.
- Internal testing: add the build to an internal tester group.
- External testing: add the build to an external group; first external distribution may require Beta App Review.
- If packet says `ios.target: app_review`, still make TestFlight available first unless user/packet says skip it.
- For Apple screenshots, TestFlight may be needed before final capture; record that as expected flow, not a blocker.

Sources:

- https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/provide-test-information
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/add-internal-testers
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/add-testers-to-builds

## Stop

- Missing app record.
- Missing API key/access.
- App Privacy answers not published.
