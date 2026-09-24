# SEO and AI Visibility Suite for Apify

Start with the research task you need to finish. These two Actors have the clearest buyer paths:

1. **Prioritize a client's existing keyword list.** [Run a Google keyword volume and CPC example](https://apify.com/changeable_peddler/keyword-roi-scorer/examples/keyword-roi-scoring) to see the input and results preview. The Actor returns Google Ads search volume, CPC, advertiser competition, and a research-priority score for up to 100 supplied keywords. [Follow the keyword-to-CSV guide](docs/keyword-volume-cpc-client-prioritization.md) and [inspect an illustrative row](docs/sample-outputs-and-case-studies.md#keyword-roi-scorer). The price is **$0.25 per batch**.
2. **Inventory a competitor's Google ad creatives.** [Run a Google Ads Transparency example](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/examples/ppc-creative-monitor) to see a ready-to-edit advertiser input. The Actor returns available creative records, formats, shown dates, and links for an advertiser domain. [Follow the competitor-review guide](docs/google-ads-transparency-competitor-review.md) and [inspect a controlled output excerpt](docs/sample-outputs-and-case-studies.md#ppc-ad-creative-monitor). The price is **$0.04 per advertiser snapshot**. Check linked creatives yourself for ad messaging; the Actor does not reliably extract ad copy or compare runs.

**Live data requires a paid Apify plan.** Free-plan runs return an empty dataset without making DataForSEO requests or charging report events. The Actor prices above are in addition to any applicable Apify plan charges. DataForSEO access is included; you do not need your own DataForSEO account.

The rest of the suite provides copy-paste Apify examples for AI Overview visibility, LLM brand mentions, backlink gap audits, SERP content briefs, Google Shopping prices, Google Play ASO, and Google Reviews complaints.

All nine Actors on Apify:

- [Google Keyword Search Volume & CPC API](https://apify.com/changeable_peddler/keyword-roi-scorer)
- [Google Ads Transparency Scraper & Monitor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor)
- [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor)
- [LLM Brand Mentions Monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor)
- [Backlink Gap Audit Report](https://apify.com/changeable_peddler/backlink-gap-audit-report)
- [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator)
- [Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder)
- [App Store ASO Opportunity Finder](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder)
- [Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner)

This repository is for teams that want repeatable search intelligence without building DataForSEO plumbing, result normalization, scoring logic, or dataset exports from scratch.

See the proof first: [nine controlled live-run artifacts](examples/live/manifest.json) and [sample outputs and case studies](docs/sample-outputs-and-case-studies.md). Controlled demonstrations show successful execution and output shape; they are not customer usage.

Run one bounded example on a paid Apify plan:

```bash
npm install
APIFY_TOKEN=your_token_here npm run run-suite -- --actor keyword-roi-scorer
```

## Use Cases

- Score keyword ideas with search volume, CPC, competition, and a build-or-skip recommendation.
- Track Google AI Overview visibility for target and competitor domains.
- Monitor LLM brand mentions, AI-search citations, and competitor visibility by topic.
- Find competitor-only referring domains for backlink gap audits and outreach planning.
- Generate content briefs from live SERPs, People Also Ask, related searches, and ranking gaps.
- Inventory competitor Google Ads Transparency creatives and review their linked previews for messaging.
- Compare Google Shopping price spreads and seller concentration.
- Find Google Play ASO keyword opportunities from app rankings and review signals.
- Mine low-star Google Reviews for recurring complaint themes and reputation risk.

## Tutorials

- [Prioritize a client's keyword list with Google search volume and CPC](docs/keyword-volume-cpc-client-prioritization.md)
- [Review competitor Google Ads Transparency creatives by domain](docs/google-ads-transparency-competitor-review.md)
- [How to automate SEO opportunity and AI visibility checks with Apify](docs/seo-ai-visibility-workflow-with-apify.md)
- [Sample outputs and case studies](docs/sample-outputs-and-case-studies.md)
- [Keyword ROI scorer and search volume CPC API](docs/keyword-roi-search-volume-cpc-api.md)
- [Google AI Overview visibility monitor](docs/ai-overview-visibility-monitor.md)
- [LLM brand mentions monitor and GEO citation workflow](docs/llm-brand-mentions-monitor.md)
- [Backlink gap audit and referring domains API](docs/backlink-gap-audit-api.md)
- [SERP content brief and People Also Ask API](docs/serp-content-brief-api.md)
- [PPC, Shopping, and ASO research workflow](docs/ppc-shopping-aso-research-workflow.md)
- [Google Reviews complaint miner and reputation risk API](docs/reputation-risk-google-reviews-api.md)

## Example Inputs

- [Keyword ROI input](examples/keyword-roi-input.json)
- [AI SERP visibility input](examples/ai-serp-visibility-input.json)
- [LLM brand mentions input](examples/llm-brand-mentions-input.json)
- [Backlink gap audit input](examples/backlink-gap-input.json)
- [SERP content brief input](examples/serp-content-brief-input.json)
- [PPC creative monitor input](examples/ppc-ad-creative-input.json)
- [Google Shopping price gap input](examples/shopping-price-gap-input.json)
- [Google Play ASO input](examples/app-store-aso-input.json)
- [Google Reviews complaint input](examples/local-review-complaint-input.json)

## Controlled Live Outputs

- [AI SERP visibility](examples/live/ai-serp-visibility-monitor.json)
- [Keyword ROI](examples/live/keyword-roi-scorer.json)
- [LLM brand mentions](examples/live/llm-brand-mentions-monitor.json)
- [Backlink gap audit](examples/live/backlink-gap-audit-report.json)
- [SERP content brief](examples/live/serp-content-brief-generator.json)
- [PPC ad creative](examples/live/ppc-ad-creative-monitor.json)
- [Google Shopping price gap](examples/live/shopping-price-gap-finder.json)
- [Google Play ASO](examples/live/app-store-aso-opportunity-finder.json)
- [Google Reviews complaints](examples/live/local-review-complaint-miner.json)

## JavaScript Example

Install dependencies:

```bash
npm install
```

Run one Actor:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor keyword-roi-scorer
```

List the available Actors, or run the PPC example:

```bash
npm run run-suite -- --list
APIFY_TOKEN=your_token_here npm run run-suite -- --actor ppc-ad-creative-monitor
```

The script in [examples/run-suite.js](examples/run-suite.js) prints the first dataset rows. If you omit `--actor`, it runs all nine examples and can incur charges for each Actor. The script does not set a run spending limit; review pricing before using it.

## Output Fields To Review First

- `status`: whether the target was processed cleanly.
- `score`: normalized opportunity, risk, or visibility score where supported.
- `summary`: short human-readable interpretation.
- `recommendations`: suggested next actions.
- `metrics`: structured values such as CPC, rank counts, price spread, reviews, or competitor coverage.
- `highlights`: evidence behind the score, gap, risk, or opportunity.

## Common Workflows

- SEO workflow: keyword ROI scorer -> SERP content brief -> AI SERP visibility monitor -> LLM brand mentions monitor.
- Authority workflow: backlink gap audit report -> outreach shortlist -> content refresh queue.
- Competitive workflow: PPC creative monitor -> Shopping price gap finder -> App Store ASO opportunity finder.
- Local reputation workflow: Local Review Complaint Miner -> issue theme spreadsheet -> sales, support, or reputation queue.
- Reporting workflow: Actor dataset -> CSV export -> Looker Studio, Sheets, CRM, or internal dashboard.

## Notes

These examples use public demo inputs and do not include DataForSEO credentials. The Actors manage their own integration settings on Apify.
