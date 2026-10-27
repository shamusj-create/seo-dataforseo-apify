# Google AI Overview visibility monitor

[AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) checks target and competitor domains in a bounded Google top-10 result and the AI Overview evidence returned with it. Use it to establish a query-level visibility baseline or investigate a suspected change.

Live data requires a paid Apify plan and costs **$0.015 per keyword/location/device report** in Actor report events, plus applicable Apify plan charges. DataForSEO access is included. Billing is reserved before the provider request, so an upstream error or empty result can occur after a charge.

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

The supplied input contains two keywords, so it requests two reports rather than one. Edit that file before running this single-Actor command from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor ai-serp-visibility-monitor
```

The runner sets no per-run spending cap; use Apify Console to set an explicit maximum if required. Keep location, language, device and tracked domains fixed when you want to compare observations over time.

## Check the evidence before interpreting a change

| Field | What it tells you |
|---|---|
| `targetPresence`, `competitorPresence` | Matching domains, available ranks and URLs in the returned organic results. |
| `aiOverview.present` | Whether an AI Overview item was returned for this request. |
| `aiOverview.targetMentioned`, `targetCited`, `citedDomains` | Detected domain mentions and source-domain evidence, when available. |
| `topOrganicResults`, `serpFeatures` | Supporting result records and returned feature types. |
| `visibilityScore`, `opportunityScore` | Separate heuristic summaries, rather than a measurement of traffic or revenue. |

An absent AI Overview is different from an Overview that omits your target. Neither establishes how all users see that query: this is one provider observation, not an exhaustive record of personalised Google results. Open cited pages and check the returned snippets before attributing a change to a content edit.

See an [illustrative output excerpt](sample-outputs-and-case-studies.md#ai-serp-visibility-monitor). This guide does not create a schedule, store a comparison baseline or send alerts; repeated paid runs need your own storage and comparison workflow. For topic-level mention records across supported platforms, use the [LLM mentions guide](llm-brand-mentions-monitor.md) instead.
