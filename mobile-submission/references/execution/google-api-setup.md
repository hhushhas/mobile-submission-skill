# Google API Setup

Use for Android setup, blockers, and Google Play Publishing API calls.

## User setup

- Create/verify Play Developer account.
- Create app in Play Console.
- Complete required app setup forms.
- Enroll Play App Signing.
- Enable Google Play Android Developer API.
- Create Google Cloud service account.
- Grant service account Play Console app access.
- Store service account ref only; prefer 1Password `op://` refs or `env:GOOGLE_APPLICATION_CREDENTIALS`. Never paste JSON contents.
- Mint tokens with Android Publisher scope: `https://www.googleapis.com/auth/androidpublisher`.
- Use guided human console tasks for console-only setup gaps unless the user explicitly asks for browser/computer-use.
- When blocked, give exact page/section/action order where known.

Sources:

- https://developers.google.com/android-publisher/getting_started
- https://support.google.com/googleplay/android-developer/answer/9859152
- https://support.google.com/googleplay/android-developer/answer/9842756

## Automate

- Create edit.
- Upload AAB/APK.
- Upload listings/images/assets.
- Upload release notes.
- Upload Data Safety labels when packet provides verified data.
- Update track/status/rollout.
- Validate edit.
- Commit edit.

Sources:

- https://developers.google.com/android-publisher/edits
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits.bundles/upload
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits.tracks
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits/validate
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits/commit
- https://developers.google.com/android-publisher/api-ref/rest/v3/applications.dataSafety

## Stop

- App does not exist in Play Console.
- Service account lacks Play permissions.
- Play App Signing/setup incomplete.
