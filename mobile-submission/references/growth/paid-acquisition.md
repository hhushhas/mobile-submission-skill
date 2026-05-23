# Paid And External Mobile App Growth

Use when the user asks about promoting apps, paid acquisition, ads, launch growth, downloads, attribution, influencers, referrals, or passive income expectations.

Paid acquisition is not passive by default. It is a testing and optimization loop. Spend only scales profitably when product quality, store conversion, attribution, and monetization are healthy.

## Channel Map

- Apple Ads: highest-intent iOS channel and useful keyword research.
- Google App campaigns: default Android scaler across Search, Play, YouTube, Discover, and Display.
- Meta app campaigns: creative discovery and broad social scale; needs SDK/MMP events.
- TikTok app promotion: strong creative discovery; avoid excessive changes during learning.
- Creators/community/press: useful for trust, niche audiences, and launch spikes.
- Referrals: strongest when the product has natural sharing or collaboration.
- Landing pages: use for education when needed; for direct install intent, send to the best store page/custom product page/deep link.

## Measurement Setup

Before spend:

- App Store Connect and Play Console analytics.
- App events: install, onboarding complete, activation, purchase/trial, subscription, retention events.
- Deep links and deferred deep links.
- UTM/source naming convention.
- MMP if spend is serious or cross-channel attribution matters.
- iOS privacy-aware attribution: AdAttributionKit/SKAdNetwork expectations.
- Android Privacy Sandbox expectations.
- Consent/privacy disclosures aligned with SDKs and tracking.

## Starter Campaign Structure

Apple Ads:

- Brand
- Category/generic
- Competitor, only when brand-safe
- Discovery/Search Match

Google App campaigns:

- Start with install campaign or action campaign depending on event volume.
- Provide varied standalone text, images, and 10-30 second videos.
- Avoid starving the campaign; under-budgeted campaigns may not learn.

Meta/TikTok:

- Use broad targeting first.
- Test multiple creative angles.
- Avoid changing bid/budget daily during learning.
- Match ad promise to store listing and app onboarding.

Creators/community:

- Give every creator, newsletter, forum post, and launch mention a unique deep link or QR code.
- Track downstream activation/retention, not installs alone.

## Budget Principles

- Do not assume paid ads produce passive income. They usually need weekly creative, bid, audience, and funnel iteration.
- Start small enough to learn without waste, but not so small that algorithms cannot learn.
- Judge channels by activated users, retained users, and revenue per install, not CPI alone.
- A good early cadence is weekly changes, not daily fiddling.
- If product-page conversion, activation, retention, crash-free rate, or monetization are weak, paid spend buys more leakage.

## Output

```text
Paid Growth Plan
- Acquisition readiness: [ready/warn/blocked] - [why]
- Measurement gaps: [events/links/MMP/privacy]
- Recommended channels:
  1. [channel] - [why / starting budget logic / creative angle]
  2. [channel] - [why / starting budget logic / creative angle]
  3. [channel] - [why / starting budget logic / creative angle]
- First 30 days:
  - Week 1: [setup/test]
  - Week 2: [iterate]
  - Week 3: [scale/kill]
  - Week 4: [consolidate]
- Do not spend yet if:
  - [specific blocker]
```

## Sources

- https://ads.apple.com/app-store/best-practices/campaign-structure
- https://ads.apple.com/app-store/best-practices/keywords
- https://ads.apple.com/app-store/help/keywords/0059-understand-keyword-match-types
- https://ads.apple.com/app-store/help/ad-placements/0082-search-results
- https://support.google.com/google-ads/answer/6167162
- https://support.google.com/google-ads/answer/6247380
- https://support.google.com/google-ads/answer/7100895
- https://www.facebook.com/business/ads/meta-advantage-plus/app-campaigns
- https://ads.tiktok.com/help/article/how-to-use-app-promotion
- https://ads.tiktok.com/help/article/best-practices-for-app-event-optimization
- https://ads.tiktok.com/help/article/auction-ads-best-practices
- https://developer.apple.com/app-store/ad-attribution/
- https://developer.apple.com/documentation/storekit/skadnetwork
- https://developer.apple.com/documentation/apptrackingtransparency
- https://support.google.com/privacysandbox/answer/16117790
- https://help.branch.io/developer-hub/docs/native-sdks-overview
- https://help.branch.io/marketer-hub/docs/in-app-sharing-and-referral-links
