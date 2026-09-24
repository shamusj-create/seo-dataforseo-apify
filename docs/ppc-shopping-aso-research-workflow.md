# PPC, Shopping, and ASO research workflow

This workflow helps product, growth, and ecommerce teams look at paid messaging, shopping prices, and app-store keyword opportunities without building separate integrations.

## Actors

- [PPC Ad Creative Monitor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor)
- [Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder)
- [App Store ASO Opportunity Finder](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder)

## PPC creative monitoring

Use [examples/ppc-ad-creative-input.json](../examples/ppc-ad-creative-input.json) to inspect competitor messaging in Google Ads Transparency data.

Start with the [focused competitor-review guide](google-ads-transparency-competitor-review.md). The Actor returns creative records, available dates and formats, and links to inspect. In the controlled run, `activeAngles` contained an advertiser name rather than ad copy; review the linked creatives yourself for claims, CTAs, and landing-page themes. Live data requires a paid Apify plan and costs $0.04 per advertiser snapshot in Actor report events.

## Google Shopping price comparison

Use [examples/shopping-price-gap-input.json](../examples/shopping-price-gap-input.json) to compare offers for a product query.

Look for low-price anchors, seller concentration, unusually wide spreads, and product categories where a better offer could stand out.

## Google Play ASO opportunity

Use [examples/app-store-aso-input.json](../examples/app-store-aso-input.json) to score app keyword opportunities from ranking apps, ratings, review counts, price, and developer concentration.

Look for keywords where the current ranking set is weak, fragmented, or review-light.

## What you get back

- Structured rows per advertiser, product query, or app keyword.
- Summary and recommendation fields for quick triage.
- Evidence fields for follow-up research.

These Actors are best used as research accelerators rather than final business decisions.
