# SEO and AI Visibility Suite for Apify

Copy-paste Apify examples for keyword ROI scoring, Google AI Overview visibility, SERP content briefs, competitor PPC creative monitoring, Google Shopping price comparison, Google Play ASO opportunity research, and Google Reviews complaint mining.

Start with a live Actor:

- [Try AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor)
- [Try Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer)
- [Try SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator)
- [Try PPC Ad Creative Monitor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor)
- [Try Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder)
- [Try App Store ASO Opportunity Finder](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder)
- [Try Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner)

This repository is for teams that want repeatable search intelligence without building DataForSEO plumbing, result normalization, scoring logic, or dataset exports from scratch.

## Use Cases

- Score keyword ideas with search volume, CPC, competition, and a build-or-skip recommendation.
- Track Google AI Overview visibility for target and competitor domains.
- Generate content briefs from live SERPs, People Also Ask, related searches, and ranking gaps.
- Monitor competitor PPC messaging with Google Ads Transparency data.
- Compare Google Shopping price spreads and seller concentration.
- Find Google Play ASO keyword opportunities from app rankings and review signals.
- Mine low-star Google Reviews for recurring complaint themes and reputation risk.

## Tutorials

- [How to automate SEO opportunity and AI visibility checks with Apify](docs/seo-ai-visibility-workflow-with-apify.md)
- [Keyword ROI scorer and search volume CPC API](docs/keyword-roi-search-volume-cpc-api.md)
- [Google AI Overview visibility monitor](docs/ai-overview-visibility-monitor.md)
- [SERP content brief and People Also Ask API](docs/serp-content-brief-api.md)
- [PPC, Shopping, and ASO research workflow](docs/ppc-shopping-aso-research-workflow.md)
- [Google Reviews complaint miner and reputation risk API](docs/reputation-risk-google-reviews-api.md)

## Example Inputs

- [Keyword ROI input](examples/keyword-roi-input.json)
- [AI SERP visibility input](examples/ai-serp-visibility-input.json)
- [SERP content brief input](examples/serp-content-brief-input.json)
- [PPC creative monitor input](examples/ppc-ad-creative-input.json)
- [Google Shopping price gap input](examples/shopping-price-gap-input.json)
- [Google Play ASO input](examples/app-store-aso-input.json)
- [Google Reviews complaint input](examples/local-review-complaint-input.json)

## JavaScript Example

Install dependencies:

```bash
npm install
```

Run the suite:

```bash
APIFY_TOKEN=your_token_here npm run run-suite
```

The script in [examples/run-suite.js](examples/run-suite.js) runs one bounded example per Actor and prints the first dataset row from each run.

## Output Fields To Review First

- `status`: whether the target was processed cleanly.
- `score`: normalized opportunity, risk, or visibility score where supported.
- `summary`: short human-readable interpretation.
- `recommendations`: suggested next actions.
- `metrics`: structured values such as CPC, rank counts, price spread, reviews, or competitor coverage.
- `highlights`: evidence behind the score, gap, risk, or opportunity.

## Common Workflows

- SEO workflow: keyword ROI scorer -> SERP content brief -> AI SERP visibility monitor.
- Competitive workflow: PPC creative monitor -> Shopping price gap finder -> App Store ASO opportunity finder.
- Local reputation workflow: Local Review Complaint Miner -> issue theme spreadsheet -> sales, support, or reputation queue.
- Reporting workflow: Actor dataset -> CSV export -> Looker Studio, Sheets, CRM, or internal dashboard.

## Notes

These examples use public demo inputs and do not include DataForSEO credentials. The Actors manage their own integration settings on Apify.
