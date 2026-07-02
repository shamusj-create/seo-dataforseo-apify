# Google AI Overview visibility monitor

[AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) tracks how target and competitor domains appear in Google top-10 organic results and AI Overview evidence.

## Demo input

Use [examples/ai-serp-visibility-input.json](../examples/ai-serp-visibility-input.json):

```json
{
  "keywords": ["best web scraping api", "google ai overview tracker"],
  "targetDomains": ["apify.com"],
  "competitorDomains": ["browse.ai", "phantombuster.com", "dataforseo.com"],
  "locationCode": 2840,
  "languageCode": "en",
  "device": "desktop",
  "includeAiOverview": true,
  "concurrency": 1
}
```

## What you get back

- Target-domain ranking presence.
- Competitor visibility in top organic results.
- AI Overview mention or citation evidence when available.
- A normalized visibility summary for monitoring or reporting.

See a compact example row in [sample outputs and case studies](sample-outputs-and-case-studies.md#ai-serp-visibility-monitor).

## Helpful uses

- Check whether your brand appears in AI-assisted search results.
- Track competitor visibility for buyer-intent queries.
- Build a weekly visibility monitor without custom scraping code.

Try it on Apify: [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor).
