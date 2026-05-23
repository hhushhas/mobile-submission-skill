# Apple App Store ASO And Conversion

Use when the user asks for ASO, ranking, downloads, Apple listing quality, App Store conversion, Apple Ads readiness, or launch growth.

Keep this as a growth pass, not a submission blocker, unless metadata is misleading, policy-risky, or inconsistent with app behavior.

## Levers

- App name: 30 characters. Searchable. Use brand plus a credible high-intent descriptor when it fits naturally.
- Subtitle: 30 characters. Searchable. Clarify the value proposition; do not repeat the name.
- Keywords: 100 characters total, comma-separated, no spaces between terms. Use real search intent, localize per market, avoid filler.
- Category: choose the most relevant primary category, not the broadest one.
- Promotional text: 170 characters, appears above description, can be updated without a new app version.
- Description: conversion copy, not keyword stuffing.
- Screenshots: up to 10; first 1-3 may show in search when no app preview is present.
- App previews: up to 3 per device size/language, max 30 seconds, autoplay muted; first seconds and poster frame matter.
- Ratings/reviews: affect search rank and conversion. Prompt after a win moment, not on launch.
- Custom Product Pages: up to 70; use for audience, keyword, campaign, and deep-link intent.
- Product Page Optimization: test icon, screenshots, previews, and descriptions when traffic is enough.
- In-App Events: use for time-bound content, launches, seasonal campaigns, and re-engagement.
- Apple Ads: use for high-intent paid discovery and keyword research.

## Assessment Workflow

1. Read existing Apple metadata: `fastlane/metadata/ios/`, App Store Connect exports, store assets, screenshots, previews, app specs, README, and product docs.
2. Identify the target audience, strongest job-to-be-done, top 3 value claims, and top 3 keyword themes.
3. Compare claims against real app behavior. Misleading or unsupported claims are readiness risks.
4. Check whether screenshots/previews show real product value in the first frames.
5. Check localization readiness: app UI, metadata, screenshots, and support/privacy pages.
6. If keyword volume or competitor rank data is unavailable, mark it unverified. Do not invent volume.

## Apple Ads Starter Structure

- Brand: exact brand terms.
- Category: generic high-intent category terms.
- Competitor: competitor names only when legally/brand-safe.
- Discovery: Search Match and broad-match discovery.

Use negatives aggressively. Move winners from discovery into exact match. Pair strong keyword themes with matching Custom Product Pages.

## Output

```text
Apple ASO
- App name: [score]/10 - [specific issue or strength]
- Subtitle: [score]/10 - [specific issue or strength]
- Keywords: [score]/10 - [specific issue or strength]
- Category: [score]/10 - [specific issue or strength]
- Description/promotional text: [score]/10 - [specific issue or strength]
- Screenshots/previews: [score]/10 - [specific issue or strength]
- Ratings/reviews: [score]/10 - [specific issue or strength]
- Custom pages/tests/events: [specific opportunity]
- Top 3 improvements:
  1. [specific change]
  2. [specific change]
  3. [specific change]
```

## Sources

- https://developer.apple.com/app-store/product-page/
- https://developer.apple.com/help/app-store-connect/reference/app-information/app-information
- https://developer.apple.com/help/app-store-connect/manage-app-information/upload-app-previews-and-screenshots/
- https://developer.apple.com/help/app-store-connect-analytics/acquisition/product-page-optimization
- https://developer.apple.com/app-store/custom-product-pages/
- https://developer.apple.com/help/app-store-connect/create-custom-product-pages/configure-multiple-product-page-versions/
- https://developer.apple.com/app-store/in-app-events/
- https://ads.apple.com/app-store/help/ad-placements/0082-search-results
- https://ads.apple.com/app-store/help/campaigns/0006-understand-search-match
- https://ads.apple.com/app-store/help/keywords/0014-add-and-manage-keywords
- https://ads.apple.com/app-store/help/keywords/0059-understand-keyword-match-types
- https://ads.apple.com/app-store/help/keywords/0060-use-negative-keywords
