# Google Play Console Human Console Reference

Last verified: 2026-05-23

Use this reference when generating human tasks for Play Console fields that are not safely handled through CLI/API automation.

Do not treat Play Console page URLs as stable API contracts. Include a direct URL only when a current run has verified it or can derive it from an existing console page. Always include fallback navigation.

## Contents

- Direct Links
- App Record Bootstrap
- App Content Hub
- Privacy Policy
- Ads
- App Access
- Target Audience and Content
- Content Rating
- Data Safety
- Account Deletion
- Financial Features
- Health Apps
- News and Magazine Apps
- Government Apps
- Sensitive Permissions and API Declarations
- Store Listing and Media
- Other Useful Fallback Paths
- Sources

## Direct Links

- Official Google docs reviewed here did not document a stable Play Console deep-link schema for specific form pages.
- Treat direct Play Console URLs as best-effort convenience links.
- If a direct link does not land on the expected page, use the fallback path in the relevant section.

Common placeholders:

- `{developer_id}`: Play Console developer identifier when known.
- `{package_name}`: Android application ID / Play package name.
- `{app_name}`: Play listing name.
- `{language}`: BCP-47 locale tag.
- `{editId}`: Android Publisher API edit token.
- `{video_url}`: YouTube or cloud-hosted review video URL.
- `{privacy_url}`: active, app-specific privacy policy URL.

## App Record Bootstrap

Use when the Play Console app record does not exist.

Fallback path:

1. Open Play Console.
2. Go to `Home`.
3. Click `Create app`.

Fields and controls:

- `Default language`: text/select field.
- `App name`: text field.
- `App or game`: radio buttons.
- `Free or paid`: radio buttons.
- `Contact email`: text field.
- Developer Program Policies declaration: checkbox.
- US export laws declaration: checkbox.
- Play App Signing Terms of Service declaration: checkbox.

Notes:

- After creation, `Dashboard` becomes the setup hub for mandatory tasks and release work.
- App creation and some legal consent flows remain manual in Play Console.

## App Content Hub

Use as the fallback entry point for most policy declarations.

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.

## Privacy Policy

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Privacy Policy`.

Fields and controls:

- Privacy policy URL: URL text field.

Notes:

- The URL must be active, app-specific, and not a PDF.
- The privacy policy must also be linked in-app and on the store listing when required.

## Ads

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Ads`.

Fields and controls:

- Contains ads: yes/no radio.

Notes:

- This covers third-party SDK ads, display ads, native ads, and banner ads.
- A positive answer triggers the `Contains ads` store label.

## App Access

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `App access`.

Fields and controls:

- Access details/instructions: free-text instruction blocks.

Notes:

- Use when login, paid access, region gates, organization membership, or other restricted flows block reviewer access.
- Google supports multiple instruction sets. The researched docs mention up to 5 instruction sets.
- Do not paste secrets into the packet or chat. Reference a secure secret location unless the human explicitly asks to view credentials in an appropriate medium.

## Target Audience and Content

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Target audience and content`.

Fields and controls:

- Target age groups: multi-select.
- Follow-up question blocks: questionnaire flow.

Notes:

- Google documents dependencies on ads, app access, and privacy policy completion first.
- Includes children/families handling and neutral age screen checks when relevant.

## Content Rating

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Content rating`.

Fields and controls:

- IARC content rating: questionnaire.

Notes:

- Unrated apps are not allowed.

## Data Safety

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Data safety`.

Fields and controls:

- Data collection/sharing: yes/no control.
- Data types: select-all / multi-select flow.
- Per-data-type details: question flow.
- Data deletion: yes/no and URL text field when applicable.

If the app does not collect or share user data:

- Select the no-data option in the yes/no control.
- Do not turn this into a text answer.
- Do not select individual data categories.

Notes:

- All published apps must answer Data safety.
- Data safety includes account/data deletion mechanism questions.

## Account Deletion

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Data safety`.
5. Open the `Data deletion` section.

Fields and controls:

- Account creation/deletion questions: yes/no controls.
- Web deletion request URL: URL text field.

Notes:

- If users can create accounts, Google requires in-app account deletion and a web link for deletion requests.

## Financial Features

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Financial features`.

Fields and controls:

- Financial feature selection: multi-select checklist.
- Extra documentation, when required: row/table or upload/document fields.

Notes:

- All apps answer, including apps with no financial features.
- Personal loan features may require license or documentation.

## Health Apps

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Health Apps`.

Fields and controls:

- Health feature selection: multi-select checklist.
- Follow-up details: expandable second-page sections.

Notes:

- All apps answer, including apps with no health features.
- Medical device apps have extra disclosure requirements.

## News and Magazine Apps

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `News and Magazine apps`.

Fields and controls:

- Declaration questionnaire.

Notes:

- Use only when discovery indicates the app may be in scope.
- The reviewed docs verify the declaration exists but do not spell out every widget/control type.

## Government Apps

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Government apps`.

Fields and controls:

- Declaration form.

Notes:

- Use only when discovery indicates the app may be in scope.

## Sensitive Permissions and API Declarations

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Policy` > `App content`.
4. Open `Sensitive app permissions` or the relevant permissions declaration form.

Common verified controls:

- Core use cases: checkbox list.
- Review instructions: text field or textarea.
- Demo/review video: URL text field.
- Restricted-access credentials: text fields or instruction fields.
- Final confirmations: checkboxes.

Verified declaration/review areas:

- `ACCESS_BACKGROUND_LOCATION`: declaration form, video link, prominent disclosure text, and privacy policy URL.
- `USE_EXACT_ALARM`: declaration form; intended for alarm, timer, or calendar-style core use.
- `USE_FULL_SCREEN_INTENT`: declaration form; auto-grant only for alarm/call core use on Android 14+.
- `QUERY_ALL_PACKAGES`: declaration form.
- `MANAGE_EXTERNAL_STORAGE`: all-files access review.
- `REQUEST_INSTALL_PACKAGES`: declaration form.
- SMS/Call Log permissions: declaration form.
- `AccessibilityService`: declaration form, demo video, in-app disclosure, and `isAccessibilityTool=true` only when that is truly the app's main goal.
- `Health Connect`: declaration form and clear justification.
- `VpnService`: listing disclosure is required, not only a permission form.

## Store Listing and Media

Fallback path:

1. Open Play Console.
2. Select the app.
3. Go to `Grow users` > `Store presence` > `Main store listing`.

Fields and controls:

- Title: text field.
- Short description: text field.
- Full description: textarea.
- Screenshots: file upload.
- App icon: file upload.
- Feature graphic: file upload.
- Preview video: URL or media field.

Notes:

- Asset Library can reuse graphics across main store listing, custom listings, experiments, and events.
- Android Publisher API `edits.listings` covers localized title, full description, short description, and video URL.
- Android Publisher API `edits.images.upload` covers image uploads for listing assets.
- API changes are edit-scoped and become live only after commit.
- API automation does not replace app bootstrap or legal-consent flows.

## Other Useful Fallback Paths

- Setup hub: `Dashboard`
- Deep links: `Grow users` > `Deep links`
- App bundle inspection: `Test and release` > `App bundle explorer`
- Review/publish changes: `Publishing overview`
- Policy state: `Policy and programs` > `Policy status`

## Sources

- https://support.google.com/googleplay/android-developer/answer/9859152
- https://support.google.com/googleplay/android-developer/answer/9859454
- https://support.google.com/googleplay/android-developer/answer/9859455
- https://support.google.com/googleplay/android-developer/answer/9867159
- https://support.google.com/googleplay/android-developer/answer/9898843
- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/13327111
- https://support.google.com/googleplay/android-developer/answer/13849271
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/10523915
- https://support.google.com/googleplay/android-developer/answer/9514050
- https://support.google.com/googleplay/android-developer/answer/9214102
- https://support.google.com/googleplay/android-developer/answer/16558241
- https://support.google.com/googleplay/android-developer/answer/9799150
- https://support.google.com/googleplay/android-developer/answer/9866151
- https://developers.google.com/android-publisher/edits
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits.listings
- https://developers.google.com/android-publisher/api-ref/rest/v3/edits.images/upload
