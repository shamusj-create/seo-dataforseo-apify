# Keyword ROI scorer and search volume CPC API

[Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer) is an Apify Actor for turning keyword ideas into a prioritized opportunity dataset.

For a complete client workflow, use the [keyword-prioritization guide](keyword-volume-cpc-client-prioritization.md). The score ranks research candidates; it does not calculate financial ROI or organic ranking difficulty. Live data requires a paid Apify plan and costs $0.25 per batch of up to 100 supplied keywords in Actor report events.

## Demo input

Use [examples/keyword-roi-input.json](../examples/keyword-roi-input.json):

```json
{
  "keywords": ["best web scraping api", "google ai overview tracker", "seo api"],
  "locationCode": 2840,
  "languageCode": "en"
}
```

## What you get back

- Search volume and CPC signals.
- Competition and opportunity scoring.
- A short build-or-skip recommendation.
- Dataset rows ready for export to CSV, Sheets, or a dashboard.

See a compact example row in [sample outputs and case studies](sample-outputs-and-case-studies.md#keyword-roi-scorer).

## Helpful uses

- Pick landing-page targets.
- Prioritize SEO backlog items.
- Compare Google Ads CPC with keyword demand before a separate organic SERP review.
- Find keyword ideas worth turning into content briefs.

Try it on Apify: [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer).
