# Spec Search

Use before writing direct API calls. Try `asc`/`gplay` first.

## Apple

- Docs: https://developer.apple.com/documentation/AppStoreConnectAPI
- Spec: https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip

Workflow:

1. Confirm `asc` cannot do the task or its state is ambiguous.
2. Fetch/extract OpenAPI spec if local cache is absent or stale.
3. Search paths and schemas for the task.
4. Generate the smallest call/script needed.
5. Keep request IDs/errors in the ledger.

Good search terms:

- `reviewSubmissions`
- `appStoreReviewDetails`
- `appStoreVersions`
- `builds`
- `appInfoLocalizations`
- `appScreenshots`
- `appPreviews`

## Google

- Docs: https://developers.google.com/android-publisher/api-ref/rest
- Discovery: https://androidpublisher.googleapis.com/$discovery/rest?version=v3

Workflow:

1. Confirm `gplay` cannot do the task or its state is ambiguous.
2. Fetch Discovery document if local cache is absent or stale.
3. Search resource/method names.
4. Generate the smallest call/script needed.
5. Prefer `edits.validate` for dry-run, not as a mandatory submit step.

Good search terms:

- `edits.insert`
- `edits.bundles.upload`
- `edits.tracks.update`
- `edits.listings`
- `edits.images`
- `applications.dataSafety`
- `edits.validate`
- `edits.commit`
