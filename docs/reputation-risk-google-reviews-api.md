# Google Reviews complaint miner and reputation risk API

[Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner) groups complaint-like Google Reviews from a bounded sample. Use it to prepare a manual service-improvement review, with the original review records available for checking context.

Live data requires a paid Apify plan and costs **$0.06 per business report** in Actor report events, plus applicable Apify plan charges. DataForSEO access is included. Billing is reserved before the provider request, so an upstream error or empty result can occur after a charge.

## Demo input

Use [examples/local-review-complaint-input.json](../examples/local-review-complaint-input.json):

```json
{
  "businesses": ["Hedonism Wines London"],
  "locationCode": 2826,
  "languageCode": "en",
  "depth": 10,
  "sortBy": "lowest_rating",
  "concurrency": 1
}
```

Replace the example business with a specific name and place, then verify that the returned records concern the intended business. The example uses the United Kingdom location code `2826` and requests ten reviews sorted by lowest rating.

After editing the file, run only this Actor from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor local-review-complaint-miner
```

The runner sets no per-run spending cap; use Apify Console when you need an explicit maximum. The current review-depth limit is ten, so this is not a full review archive.

## Interpret the sample, not the whole business

Inspect `metrics.sampledReviews` alongside `complaintCount` before reading the score. `metrics.reviewsCount` can describe the business's wider review count, but the complaint calculation uses only the returned sample. Lowest-rating sorting deliberately selects negative experiences; it does not estimate how common complaints are among all customers.

The classifier flags reviews rated three stars or below, or containing one of a fixed set of complaint terms. `metrics.themes` counts those terms and `highlights` includes shortened excerpts; read `items` for context. Simple word matching can misclassify a review and is not a finding of misconduct or a comprehensive sentiment assessment.

Keep the business query, sorting and `checkedAt` timestamp with your notes, then have a person check any proposed response or operational action. The [historical output](../examples/live/local-review-complaint-miner.json) shows the saved report format, not a current assessment of that business. For the other available research tasks, return to the [Actor selector](../README.md#choose-a-task).
