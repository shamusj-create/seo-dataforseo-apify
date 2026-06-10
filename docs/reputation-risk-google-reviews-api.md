# Google Reviews complaint miner and reputation risk API

[Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner) mines Google Reviews for recurring complaint themes, low-star risk signals, and sales or reputation opportunities.

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

## What you get back

- Low-star complaint themes.
- Review risk and reputation signals.
- Recurring objections that can inform support, sales, or local SEO.
- Dataset rows ready for export.

Try it on Apify: [Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner).
