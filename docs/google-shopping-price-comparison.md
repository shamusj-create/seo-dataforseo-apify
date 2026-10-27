# Compare Google Shopping offers for a product query

Use [Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder) when you need a first comparison of the priced offers returned for a product query. It reports the seller mix and price range, with supporting offer records for manual review.

Live data requires a paid Apify plan. One product-query report costs **$0.08 in Actor report events**, in addition to applicable Apify plan charges; DataForSEO access is included. The report event is reserved before the provider request, so missing results or an upstream error can occur after billing.

## Make the query specific

Start with the [product-query input](../examples/shopping-price-gap-input.json), then replace the generic example with the product you want to investigate. Include a model or variant when you know it, and keep the market consistent between comparisons.

```json
{
  "productQueries": ["wireless headphones"],
  "locationCode": 2840,
  "languageCode": "en",
  "depth": 10,
  "concurrency": 1
}
```

Here `2840` selects the United States and `en` selects English. A broad query such as this can return different models, so the resulting spread needs product-level review before it is useful as a price benchmark.

After reviewing the input, run only this Actor:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor shopping-price-gap-finder
```

Run the command from the repository root after installing its dependencies. The runner sets no per-run spending cap; use Apify Console if you need an explicit maximum. An empty `API_ERROR` report is not a successful price comparison.

## Read the returned offers

| Field | What to inspect |
|---|---|
| `metrics.offerCount` | Number of returned offers with a numeric price. |
| `metrics.minPrice`, `maxPrice`, `averagePrice`, `spread` | Calculations over those priced offers, rather than the whole market. |
| `metrics.sellerCount` | Distinct seller labels in the priced sample. |
| `highlights` | Up to ten priced offers, sorted from low to high, with available titles, sellers and links. |
| `items` | The supporting provider results for checking product identity and missing fields. |

Check each offer's model, quantity and condition, then inspect currency, shipping and taxes on the source page. This Actor does not establish that every result is the same SKU, convert currencies or calculate your margin. Its score combines the observed spread and seller count; it is a research signal rather than a repricing instruction.

Export the dataset to a comparison sheet with the original input and `checkedAt` timestamp, so you can identify the market and query later. The [historical output](../examples/live/shopping-price-gap-finder.json) shows a stored example's format, not today's available prices. If your question is about ad creatives or Google Play keyword results instead, use the [research-task selector](ppc-shopping-aso-research-workflow.md).
