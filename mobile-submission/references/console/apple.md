# Apple App Store Connect Human Console Reference

Last verified: 2026-05-23

Use this reference when generating human tasks for App Store Connect fields that are not safely handled through CLI/API automation.

Do not treat App Store Connect page URLs as stable API contracts. Include a direct URL only when a current run has verified it or can derive it from an existing console page. Always include fallback navigation.

## Contents

- Direct Links
- App Record Bootstrap
- App Information
- App Privacy
- Age Rating
- Pricing and Availability
- Version Metadata
- App Review Information
- Export Compliance
- Sources

## Direct Links

- Official Apple docs reviewed here did not document a stable App Store Connect deep-link schema for specific form pages.
- Treat direct App Store Connect URLs as best-effort convenience links.
- If a direct link does not land on the expected page, use the fallback path in the relevant section.

Common placeholders:

- `{apple_team_id}`: Apple developer team/account context.
- `{bundle_id}`: app bundle identifier.
- `{app_id}`: Apple ID for the App Store Connect app record.
- `{sku}`: internal SKU.
- `{primary_locale}`: primary language or locale.

## App Record Bootstrap

Use when the App Store Connect app record does not exist.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Click `+`.
4. Choose `New App`.

Fields and controls:

- `Platforms`: selector.
- `Name`: text field.
- `Primary Language`: dropdown/select.
- `Bundle ID`: dropdown/select.
- `SKU`: text field.
- `User Access`: radio/select option in the dialog.

Notes:

- The Account Holder must have accepted the latest Business agreement before app creation can proceed.
- For multi-platform purchases, platforms share one app record, with platform-specific metadata added separately.

## App Information

Use for shared metadata and declaration-style fields.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Go to `General` > `App Information`.

Fields and controls:

- `Privacy Policy URL`: text field.
- `Content Rights`: declaration control.
- `Age Rating`: setup/questionnaire flow.
- `Made for Kids`: optional declaration.
- `License Agreement`: default/custom selection and text flow.
- `Primary Language`: dropdown/select.
- `Category` and `Subcategory`: dropdown/select controls.

Conditional compliance fields may appear depending on country, category, or app facts:

- Korea rating classification number.
- China mainland permits or ICP filing.
- Vietnam game licensing.
- Digital Services Act trader status.
- Regulated medical device status.

Do not invent conditional answers. Generate a human task only when discovery found the condition or the packet explicitly includes the value.

## App Privacy

Use when App Privacy details must be filled or verified manually.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Open `App Privacy`.

Fields and controls:

- `Get Started`: button when privacy answers have not been initialized.
- Data collection question: yes/no radio.
- Data types: multi-select checklist.
- Per-data-type detail screens: question flow.
- `Privacy Policy` > `Edit`: edit action.
- `Privacy Policy URL`: text field.
- `User Privacy Choices URL`: optional text field.
- `Publish`: button/action after answers are complete.

If the app does not collect data:

- Select the no-data option in the yes/no radio.
- Do not turn this into a text answer.
- Do not select individual data categories.

Notes:

- For `tvOS`, Apple may use privacy policy text instead of a URL.

## Age Rating

Use when age rating is missing, unrated, or needs confirmation before submission.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Go to `General` > `App Information`.
5. Open `Set Up Age Ratings`.

Fields and controls:

- Content descriptor questionnaire.
- In-app controls and capabilities questions.
- Frequency radio controls per content type: `None`, `Infrequent`, or `Frequent`.
- `Age Suitability URL`: optional text field.
- App audience choice: `Not Applicable`, `Made for Kids`, or `Override to Higher Age Rating`.
- Korea override, when applicable: yes/no radio plus rating menu.

Notes:

- Apple says an unrated app cannot be published on the App Store.

## Pricing and Availability

Use when availability, pricing, or pre-order settings are not covered by automation.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Open `Pricing and Availability`.

Fields and controls:

- Availability flow: `All Countries or Regions`, `Specific Countries or Regions`, or `Publish as Pre-Order`.
- Country/region list: checklist/select list.
- `Manage Availability`: action.
- `Remove App From Sale`: action.
- `Price`: price selector.
- `Start Date`: date field.
- `End Date`: date field.
- Pre-order `Release Date`: date field.

Notes:

- Paid apps require a Paid Apps Agreement.

## Version Metadata

Use for version-specific review and listing fields.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Select the target platform version.

Fields and controls:

- `Support URL`: text field.
- `Marketing URL`: optional text field.
- `Version Number`: text field.
- `Copyright`: text field.
- `Version Release Settings`: radio/select options: `Manual`, `Automatic`, or `Automatic, no earlier than`.
- `What's New in This Version`: textarea for updates after version 1.

Notes:

- `Support URL` must lead to real contact/support information.

## App Review Information

Use for reviewer contact and demo access.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Select the target platform version.
5. Open `App Review Information`.

Fields and controls:

- Contact `Name`: text field.
- Contact `Email`: text field.
- Contact `Phone`: text field.
- `Notes`: textarea.
- If login is required, `Username`: text field.
- If login is required, `Password`: text field.

Notes:

- Apple says App Review information is not customer-visible.
- Do not paste secrets into the packet or chat. Refer to the secure secret location unless the human explicitly asks to view credentials in an appropriate medium.

## Export Compliance

Use when export compliance or encryption documentation is required.

Fallback path:

1. Open App Store Connect.
2. Go to `Apps`.
3. Select the app.
4. Go to `App Information`.
5. Open `App Encryption Documentation`.

Fields and controls:

- `+`: add documentation/action button.
- Export compliance questions: dialog/question flow.
- `Choose File`: file upload.
- `Save`: button/action.

Notes:

- If no documentation is required, Apple's documented fallback is to set the relevant encryption usage key in `Info.plist` so the app does not repeatedly need encryption answers during submission.

## Sources

- https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-homepage
- https://developer.apple.com/help/app-store-connect/get-started/app-store-connect-workflow
- https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app
- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information
- https://developer.apple.com/help/app-store-connect/manage-app-information/manage-app-privacy
- https://developer.apple.com/help/app-store-connect/reference/app-information/app-privacy
- https://developer.apple.com/help/app-store-connect/manage-app-information/set-an-app-age-rating
- https://developer.apple.com/help/app-store-connect/reference/app-information/platform-version-information
- https://developer.apple.com/help/app-store-connect/reference/pricing-and-availability/app-pricing-and-availability
- https://developer.apple.com/help/app-store-connect/manage-app-information/overview-of-export-compliance
- https://developer.apple.com/help/app-store-connect/manage-app-information/determine-and-upload-app-encryption-documentation
