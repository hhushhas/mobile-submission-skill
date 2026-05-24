# Release Versioning

Use before building, uploading, or submitting a mobile release.

The goal is that users, reviewers, support, and the team can tell which version is installed. Do not keep shipping user-visible changes as `1.0.0`.

## Semantic Versioning

Use semantic versioning for the user-visible app version:

- Patch: `1.0.1` for small bug fixes, copy changes, minor polish, crash fixes, or low-risk internal improvements.
- Minor: `1.1.0` for new features, meaningful behavior changes, UI/workflow changes, or medium-sized releases.
- Major: `2.0.0` for major redesigns, breaking changes, large product shifts, incompatible data migrations, or big repositioning.

If unsure, propose a version bump and ask the user. Prefer a slightly more explicit version over reusing an old one.

## Platform Build Numbers

Always increment platform build identifiers for every uploaded binary:

- iOS: increment `CFBundleVersion` / Expo `ios.buildNumber`.
- Android: increment `versionCode`.

The user-visible version and build identifier are different:

- User-visible version: `1.1.0`.
- Build identifier: monotonically increasing store build number/code.

For Android, any changed AAB/APK needs a new `versionCode`. For Apple, uploaded builds need a unique build number for the app version.

## Workflow

1. Discover current version/build from app config and store packet.
2. Compare against the previous submitted or installed release when store state is available.
3. Classify release size: patch, minor, or major.
4. Update app config, native config, packet, and release notes together.
5. Verify the built artifact contains the expected version/build before upload.
6. Record the decision and evidence in `scratchpad/mobile-submission-ledger.md`.

## Common Files

- Expo: `app.json`, `app.config.js`, `app.config.ts`, `eas.json`.
- iOS native: `Info.plist`, Xcode build settings, `CFBundleShortVersionString`, `CFBundleVersion`.
- Android native: `build.gradle`, `versionName`, `versionCode`.
- Fastlane metadata: release notes and store metadata folders.

## Output

```text
Release Versioning
- Previous version/build: [evidence]
- Proposed version/build: [value]
- Bump type: patch | minor | major
- Reason: [why]
- Files updated: [paths]
- Artifact verification: [command/evidence]
```
