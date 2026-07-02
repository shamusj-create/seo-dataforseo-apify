# SERP content brief and People Also Ask API

[SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) creates search-informed content briefs from live Google SERP evidence.

## Demo input

Use [examples/serp-content-brief-input.json](../examples/serp-content-brief-input.json):

```json
{
  "keywords": ["best web scraping api"],
  "targetDomain": "apify.com",
  "locationCode": 2840,
  "languageCode": "en",
  "device": "desktop",
  "includeAiOverview": true,
  "concurrency": 1
}
```

## What you get back

- Top-ranking page evidence.
- People Also Ask and related-search signals.
- SERP feature coverage.
- Topic and outline suggestions grounded in live search results.
- A dataset row that can be exported into a content workflow.

See a compact example row in [sample outputs and case studies](sample-outputs-and-case-studies.md#serp-content-brief-generator).

## Helpful uses

- Create a first draft content brief from live SERP evidence.
- Refresh an existing article against current competitors.
- Check whether a target domain is already visible before writing.

Try it on Apify: [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator).
