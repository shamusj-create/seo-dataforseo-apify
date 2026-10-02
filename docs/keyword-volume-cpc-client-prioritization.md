# Prioritize a client's keyword list with search volume and CPC

An SEO agency often has more candidate topics than it can brief this month. This workflow turns a supplied keyword list into a sortable research queue before assigning writing work. It is useful when a client has already chosen a market and wants evidence for which topics to investigate first.

Use [the published Google keyword volume and CPC example](https://apify.com/changeable_peddler/keyword-roi-scorer/examples/keyword-roi-scoring) to see a ready-to-edit input, or open the [Actor's Store page](https://apify.com/changeable_peddler/keyword-roi-scorer). It evaluates your list; it does not discover keywords, inspect organic ranking difficulty, or calculate financial ROI.

## First run in Apify Console

1. Open the [Actor's Store page](https://apify.com/changeable_peddler/keyword-roi-scorer) and its Console input form, then enter 5–100 keywords from one client or campaign. Remove terms that do not fit the client's offer. If Apify labels the button **Try for free**, it opens Console; it does **not** mean this Actor provides a free live-data trial.
2. Choose a named country/language market, such as **United States — English**. Select **Custom / advanced codes** to use location/language fields for another supported market. Keep the resolved market consistent when comparing runs.
3. Review the [Pricing tab](https://apify.com/changeable_peddler/keyword-roi-scorer/pricing), then set a run spending limit that allows one **$0.25 keyword-batch-scored event**. Each run is one batch of up to 100 keywords. Live results require a paid Apify plan; DataForSEO access is included.
4. Run the Actor and open the **Keyword planning sheet** dataset view. Sort by `score`, then inspect the separate search volume, CPC, and advertiser competition columns for every candidate you might brief.
5. Use the **Keyword planning CSV** output link, export CSV from that view, or keep JSON if you need the supporting provider data. New results include the resolved market. Add your own columns for business relevance, organic SERP difficulty, conversion rate, and estimated value before approving a brief.

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
  "marketPreset": "us_en"
}
```

A shorter three-keyword version is saved as [keyword-roi-input.json](../examples/keyword-roi-input.json). That file retains the existing API-compatible location/language codes: `2840` means United States and `en` means English. Existing code-based inputs work when `marketPreset` is omitted or `"custom"`; a named preset overrides advanced codes. The input above uses the named United States — English preset.

## Inspect a real historical planning sheet without running

These three rows come from a [controlled demonstration on 4 July 2026](../examples/live/keyword-roi-scorer.json), not a customer result or today's market data.

| Keyword | Search volume | CPC | Advertiser competition | Competition index | Research score |
|---|---:|---:|---|---:|---:|
| seo api | 480 | 25.29 | LOW | 10 | 85 |
| best web scraping api | 140 | 12.81 | LOW | 10 | 75 |
| google ai overview tracker | 0 | 0 | Unavailable | 50* | 1 |

[Download the historical CSV](../examples/keyword-volume-cpc-historical-2026-07-04.csv) for a spreadsheet preview. This does not make a live provider request. The archive does not record the requested country/language, so neither is added to the historical CSV. The [illustrative JSON output](sample-outputs-and-case-studies.md#keyword-roi-scorer) separately demonstrates the full report shape with invented metrics.

\* The third row's competition was unavailable. The index of `50` is the Actor's fallback used for its score, not an observed competition value.

## Interpret the shortlist

The 0–100 score combines search volume, CPC, recent monthly search volume, and **Google Ads advertiser competition**. Advertiser competition is not organic SEO difficulty. CPC is not expected revenue, and the score is not an ROI forecast. A high-scoring but irrelevant keyword should not outrank a lower-scoring term that closely matches the client's offer.

Blank and duplicate keywords are removed. Invalid or over-limit inputs stop before report billing. For valid live work, the Actor charges its report event before asking DataForSEO for results. A provider error, unavailable result, or empty response can occur after the event is charged. Read the run status and `RUN_SUMMARY` before retrying. A free-plan run makes no live request and leaves the dataset empty.

Once a keyword passes your manual relevance and SERP review, [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) is a separate, separately billed next step.
