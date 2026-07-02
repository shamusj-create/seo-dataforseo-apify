# How to automate SEO opportunity and AI visibility checks with Apify

This workflow connects three buyer questions:

1. Which keywords are worth targeting?
2. What should we write or improve?
3. Are we visible in organic results and Google AI Overviews?

## Actors

- [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer) scores search volume, CPC, competition, and priority.
- [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) turns live SERP evidence into a content brief.
- [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) tracks owned and competitor visibility across rankings and AI Overview citations.

## Step 1: Score keywords

Use [examples/keyword-roi-input.json](../examples/keyword-roi-input.json) with the Keyword ROI Scorer.

Good inputs are buyer-intent phrases, competitor comparisons, and problem-aware searches. Start with 3-5 keywords, then expand only after the output shows a clear opportunity.

## Step 2: Generate a content brief

Use [examples/serp-content-brief-input.json](../examples/serp-content-brief-input.json) with the SERP Content Brief Generator.

The output helps you see the top-ranking pages, People Also Ask coverage, related searches, SERP features, and whether your target domain already appears.

## Step 3: Track AI Overview visibility

Use [examples/ai-serp-visibility-input.json](../examples/ai-serp-visibility-input.json) with the AI SERP Visibility Monitor.

Compare your target domain against direct competitors. The useful fields are ranking presence, AI Overview mentions, citation evidence, and competitor domains that appear where you do not.

## What you get back

- Dataset rows for each keyword.
- Scores, summaries, and recommendations.
- Competitor and SERP evidence you can export to a spreadsheet or dashboard.

For compact example rows, see [sample outputs and case studies](sample-outputs-and-case-studies.md).

## When to use this

Use this before writing a new landing page, refreshing a stale content asset, validating a GEO/AI-search concern, or prioritizing a backlog of SEO ideas.
