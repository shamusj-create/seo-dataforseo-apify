# SERP content brief and People Also Ask API

[SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) turns the returned Google ranking pages and question features into a draft content outline. Use it before a writing handoff or when deciding how to refresh a page that targets a specific query.

Live data requires a paid Apify plan. A keyword brief costs **$0.05 in Actor report events**, plus applicable Apify plan charges, with DataForSEO access included. The event is reserved before the provider request, so an upstream error or empty result can occur after billing.

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

Edit the input file before running only this Actor from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor serp-content-brief-generator
```

Use Apify Console if you need an explicit maximum, because this runner supplies no per-run spending cap. The example's `2840` location is the United States, so change it if your brief serves another market.

## Turn the result into a writing handoff

Begin with `highlights`: it lists available ranks, titles, domains and URLs from up to ten organic or featured-snippet results. Read those sources to check search intent rather than treating every returned page as a suitable competitor.

Then review `metrics.outline` and the supporting `items`. The outline is a first draft built from ranking-page titles and available People Also Ask questions, rather than a finished article. Questions, related searches and AI Overview evidence are included only when returned by the provider.

Add the audience, your own evidence and the action you want a reader to take before giving the brief to a writer. `targetFound` checks whether the supplied domain was detected in the bounded result set; it does not identify every ranking page or prove that the proposed article will rank. The score summarises returned signals rather than content quality or likely traffic.

Inspect the [illustrative output](sample-outputs-and-case-studies.md#serp-content-brief-generator) before purchasing a fresh report. The [bulk keyword guide](keyword-volume-cpc-client-prioritization.md) covers demand and CPC for an existing list as a separate paid task, not a prerequisite for this Actor.
