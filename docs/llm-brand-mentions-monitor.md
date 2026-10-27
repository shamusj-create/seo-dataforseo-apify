# LLM brand mentions monitor and GEO citation workflow

Use [LLM Brand Mentions Monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor) to inspect the provider's indexed answer and citation records for a commercial topic. It checks your brand and domain against competitors and returns one dataset row per topic/platform query.

Live data requires a paid Apify plan and costs **$0.35 per topic/platform query** in Actor report events, plus applicable Apify plan charges. DataForSEO access is included. The event is reserved before the provider request, so an upstream error or empty result can occur after a charge.

## Example input

Start with [examples/llm-brand-mentions-input.json](../examples/llm-brand-mentions-input.json):

```json
{
  "brandName": "Apify",
  "targetDomain": "apify.com",
  "topics": [
    "web scraping api",
    "google ai overview tracker"
  ],
  "competitorDomains": [
    "zyte.com",
    "brightdata.com"
  ],
  "platforms": [
    "google"
  ],
  "locationCode": 2840,
  "languageCode": "en",
  "limit": 10
}
```

The supplied file contains two topics on one platform, requesting two reports for $0.70 in report events. Reduce it to one relevant topic for a smaller first check; adding another platform multiplies the number of queries.

Edit the file before running only this Actor from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor llm-brand-mentions-monitor
```

The runner sets no per-run spending cap; use Apify Console for an explicit maximum. Supported platform values are `google` and `chat_gpt`. The current `chat_gpt` request uses the United States and English, regardless of a different input location or language.

## What to inspect

- `score`: normalized target visibility score for the topic.
- `summary`: compact statement of target and competitor visibility.
- `metrics.targetMentions`: how often the target was mentioned or cited.
- `metrics.competitorMentions`: how often competitors were mentioned or cited.
- `metrics.citationDomains`: source domains worth reviewing for PR, partnerships, or content updates.
- `highlights`: the top AI-search mention rows with citation and competitor evidence.

## Preserve the source context

Review the returned questions and answer snippets before treating a mention as relevant to your product. Save the source links and available `firstResponseAt` and `lastResponseAt` values with the report; `checkedAt` records your retrieval, not necessarily when the underlying answer was generated.

This is a query of the provider's mention index, not a fresh prompt sent to every current AI model or an exhaustive record of what users see. A zero count means no target match was detected in the returned rows. It does not establish that the brand never appears elsewhere, and substring matching can require manual correction.

The [sanitized output illustration](../examples/live/llm-brand-mentions-monitor.json) contains a demo run ID rather than independently verifiable live-run proof. It is not current market evidence or a customer result. If you need a bounded live Google organic result and AI Overview check instead, follow the [AI SERP guide](ai-overview-visibility-monitor.md).
