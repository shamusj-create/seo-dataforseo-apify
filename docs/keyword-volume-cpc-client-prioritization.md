# Prioritize a client's keyword list with search volume and CPC

An SEO agency often has more candidate topics than it can brief this month. This workflow turns a supplied keyword list into a sortable research queue before assigning writing work. It is useful when a client has already chosen a market and wants evidence for which topics to investigate first.

Use [the published Google keyword volume and CPC example](https://apify.com/changeable_peddler/keyword-roi-scorer/examples/keyword-roi-scoring) to see a ready-to-edit input, or open the [Actor's Store page](https://apify.com/changeable_peddler/keyword-roi-scorer). It evaluates your list; it does not discover keywords, inspect organic ranking difficulty, or calculate financial ROI.

## First run in Apify Console

1. Open the [Actor's Store page](https://apify.com/changeable_peddler/keyword-roi-scorer), choose **Try for free**, and enter 5–100 keywords from one client or campaign in the Console input form. Remove terms that do not fit the client's offer.
2. Choose a location and language. `2840` is the United States and `en` is English. Keep these consistent when comparing runs.
3. Review the [Pricing tab](https://apify.com/changeable_peddler/keyword-roi-scorer/pricing), then set a run spending limit that allows one **$0.25 keyword-batch-scored event**. Each run is one batch of up to 100 keywords. Live results require a paid Apify plan; DataForSEO access is included.
4. Run the Actor and open the dataset. Sort by `score`, then inspect `metrics.searchVolume`, `metrics.cpc`, and `metrics.competitionIndex` for every candidate you might brief.
5. Export CSV for a planning sheet or JSON if you need the full supporting provider data. Add your own columns for business relevance, organic SERP difficulty, conversion rate, and estimated value before approving a brief.

Try this small input:

```json
{
  "keywords": [
    "best web scraping api",
    "google ai overview tracker",
    "seo api",
    "rank tracking software",
    "technical seo audit tool"
  ],
  "locationCode": 2840,
  "languageCode": "en"
}
```

A shorter three-keyword version is saved as [keyword-roi-input.json](../examples/keyword-roi-input.json). See the [illustrative output row](sample-outputs-and-case-studies.md#keyword-roi-scorer) for the fields you will receive, or inspect a [historical controlled live run](../examples/live/keyword-roi-scorer.json) for an observed example. The historical values are not today's market data or a customer result.

## Interpret the shortlist

The 0–100 score combines search volume, CPC, recent monthly search volume, and **Google Ads advertiser competition**. Advertiser competition is not organic SEO difficulty. CPC is not expected revenue, and the score is not an ROI forecast. A high-scoring but irrelevant keyword should not outrank a lower-scoring term that closely matches the client's offer.

The Actor charges its report event before asking DataForSEO for results. A provider error, unavailable result, or empty response can occur after the event is charged. Read the run status and `RUN_SUMMARY` before retrying. A free-plan run makes no live request and leaves the dataset empty.

Once a keyword passes your manual relevance and SERP review, [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) is a separate, separately billed next step.
