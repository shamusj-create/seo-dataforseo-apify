# LLM brand mentions monitor and GEO citation workflow

Use [LLM Brand Mentions Monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor) when a buyer needs to know whether a brand, domain, or competitor appears in AI-search answers for commercial topics.

The Actor is useful for GEO reporting, AI visibility baselines, competitor comparison, and citation-source discovery. It returns one dataset row per topic and platform query.

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

## What to inspect

- `score`: normalized target visibility score for the topic.
- `summary`: compact statement of target and competitor visibility.
- `metrics.targetMentions`: how often the target was mentioned or cited.
- `metrics.competitorMentions`: how often competitors were mentioned or cited.
- `metrics.citationDomains`: source domains worth reviewing for PR, partnerships, or content updates.
- `highlights`: the top AI-search mention rows with citation and competitor evidence.

## Workflow

1. Pick commercial topics from [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer).
2. Run [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) for standard Google SERP and AI Overview evidence.
3. Run LLM Brand Mentions Monitor for topic-level brand, competitor, and citation evidence.
4. Export the dataset and review citation domains against pages that already rank or need a refresh.

Controlled output shape: [llm-brand-mentions-monitor.json](../examples/live/llm-brand-mentions-monitor.json).
