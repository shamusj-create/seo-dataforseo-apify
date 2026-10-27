# Bulk Google keyword search volume and CPC API

[Bulk Google Keyword Search Volume & CPC API](https://apify.com/changeable_peddler/keyword-roi-scorer) adds Google Ads demand and advertiser-competition metrics to a supplied keyword list. It does not generate the keyword ideas for you.

For a complete client workflow, use the [keyword-prioritization guide](keyword-volume-cpc-client-prioritization.md). The score ranks research candidates; it does not calculate financial ROI or organic ranking difficulty. Live data requires a paid Apify plan and costs a flat $0.25 per batch of up to 1,000 supplied keywords in Actor report events—not per keyword. A five-term check costs the same, so the fixed batch price is intended for bulk lists.

## Demo input

Use [examples/keyword-roi-input.json](../examples/keyword-roi-input.json):

```json
{
  "keywords": ["best web scraping api", "google ai overview tracker", "seo api"],
  "locationCode": 2840,
  "languageCode": "en"
}
```

Edit the supplied input before running only this Actor from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor keyword-roi-scorer
```

The runner sets no per-run spending cap, so use Apify Console if you need an explicit maximum. The report event is reserved before provider work, and an upstream error or empty response can occur after billing.

## What you get back

Review `metrics` for the returned search volume, CPC and Google Ads advertiser competition, then check the supporting provider row in `items`. A short recommendation and research-priority score help organise the list, but neither incorporates your conversion rate, gross margin or cost of producing content.

See an [illustrative output row](sample-outputs-and-case-studies.md#keyword-roi-scorer) before purchasing current data. Read the source fields and business context before acting on the build-or-skip wording in `recommendations`.

## Use the result in a planning sheet

Export the rows to CSV or map them into your existing sheet, then add relevance and business context before selecting a landing-page target. Comparing Google Ads CPC with demand can inform that first pass, while organic ranking difficulty still needs a separate SERP review. For a detailed handoff, follow the [client keyword-prioritisation workflow](keyword-volume-cpc-client-prioritization.md).

Try it on Apify: [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer).
