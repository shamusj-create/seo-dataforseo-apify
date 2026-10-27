# Inspect Google Play keyword rankings for ASO research

Use [Google Play ASO Opportunity Finder](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder) to inspect the apps returned for a supplied Google Play keyword. It gathers rank and rating information into a report that you can review before choosing which app-store terms deserve more research.

This Actor covers **Google Play, not Apple's App Store**. Live data requires a paid Apify plan and costs **$0.035 per app-keyword report** in Actor report events, plus applicable Apify plan charges. DataForSEO access is included. A report event is reserved before the provider request, so an upstream error or missing results can occur after a charge.

## Start with one keyword and market

The [Google Play example input](../examples/app-store-aso-input.json) checks a keyword in the United States with English results:

```json
{
  "appKeywords": ["vpn"],
  "locationCode": 2840,
  "languageCode": "en",
  "depth": 30,
  "concurrency": 1
}
```

Replace `vpn` with a term relevant to your app. Use the same location and language when comparing candidates, because a change in market changes the question the report answers.

After reviewing the input, run only this Actor:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor app-store-aso-opportunity-finder
```

Run from the repository root after installing its dependencies. The runner supplies no per-run spending cap; set an explicit maximum in Apify Console if required. Check the existing run and `RUN_SUMMARY` before repeating a failed request.

## Separate ranking evidence from the score

The `highlights` array describes up to the first ten returned apps, with available rank, app ID and store link. It also includes developer labels, rating, review count and whether the app is free. The full provider result remains in `items`.

| Metric | Meaning |
|---|---|
| `appsCount` | Apps returned within the requested depth. |
| `averageTopRating` | Average used by the calculation for the top returned apps. |
| `medianTopReviews` | Review-count value used by the calculation for that top set. |
| `developerCount` | Distinct nonempty developer labels in the top set. |

The opportunity score is a heuristic derived from those metrics. Missing ratings and review counts contribute zeros in its calculations, so inspect the supporting app rows before comparing scores. A zero review metric therefore need not mean that the apps have no reviews. The score does not measure keyword search volume, installs or revenue, and a lower-rated ranking set does not prove there is an easy acquisition opportunity.

Export a shortlist, then review relevance and product fit on the linked Google Play pages. Keep the market and `checkedAt` timestamp with your notes. The [historical output](../examples/live/app-store-aso-opportunity-finder.json) is a stored output example, not a current ranking or customer result. See the [research-task selector](ppc-shopping-aso-research-workflow.md) if you need Google Shopping offers or advertiser creatives instead.
