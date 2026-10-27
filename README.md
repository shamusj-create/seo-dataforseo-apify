# SEO, Ads and App Research Examples for Apify

Choose an Actor for the research task in front of you. This repository contains inputs and guides for nine independent tools, from bulk keyword metrics to competitor ad inventories and Google Play keyword results.

**Live data requires a paid Apify plan.** DataForSEO access is included, so you do not need your own provider credentials. The report fees below are separate from any applicable Apify plan charges. Free-plan runs make no live provider requests, charge no report events and leave the dataset empty.

## Choose a task

| Your task | Actor and guide | Actor report fee, USD | Example input |
|---|---|---|---|
| Check demand and CPC for an existing keyword list | [Bulk Google Keyword Search Volume & CPC API](https://apify.com/changeable_peddler/keyword-roi-scorer) · [planning-sheet guide](docs/keyword-volume-cpc-client-prioritization.md) | Flat $0.25 per batch of up to 1,000 supplied keywords | [Keyword list](examples/keyword-roi-input.json) |
| Prepare a brief from ranking pages and People Also Ask | [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) · [content-brief guide](docs/serp-content-brief-api.md) | $0.05 per keyword brief | [One query](examples/serp-content-brief-input.json) |
| Check target and competitor domains in a Google result | [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) · [AI Overview guide](docs/ai-overview-visibility-monitor.md) | $0.015 per keyword/location/device report | [Visibility check](examples/ai-serp-visibility-input.json) |
| Review brand mentions and citation sources by topic | [LLM Brand Mentions Monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor) · [mentions guide](docs/llm-brand-mentions-monitor.md) | $0.35 per topic/platform query | [Brand and topics](examples/llm-brand-mentions-input.json) |
| Find referring domains returned for competitors but missing for your target | [Backlink Gap Audit Report](https://apify.com/changeable_peddler/backlink-gap-audit-report) · [gap-audit guide](docs/backlink-gap-audit-api.md) | $0.25 per bounded gap report | [Target and competitors](examples/backlink-gap-input.json) |
| Export a competitor's available Google ad creatives | [Google Ads Transparency Scraper - Ad Creative Export](https://apify.com/changeable_peddler/ppc-ad-creative-monitor) · [creative-review guide](docs/google-ads-transparency-competitor-review.md) | $0.04 per advertiser snapshot, up to 40 creatives | [Advertiser domain](examples/ppc-ad-creative-input.json) |
| Compare priced offers returned for a product query | [Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder) · [Google Shopping guide](docs/google-shopping-price-comparison.md) | $0.08 per product-query report | [Product query](examples/shopping-price-gap-input.json) |
| Inspect the apps ranking for a Google Play keyword | [Google Play ASO Keyword Research & App Rankings API](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder) · [Google Play guide](docs/google-play-aso-keyword-research.md) | $0.035 per app-keyword report | [App keyword](examples/app-store-aso-input.json) |
| Review complaint themes in a sample of Google Reviews | [Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner) · [review-triage guide](docs/reputation-risk-google-reviews-api.md) | $0.06 per business report | [Business lookup](examples/local-review-complaint-input.json) |

Check the selected Actor's Pricing tab before running it. Report billing is reserved before provider work, so an upstream error or empty response can occur after a charge. Inspect the existing run and `RUN_SUMMARY` before retrying, because repeating an unchanged failure can incur another charge.

## Inspect the output before a paid run

The [output examples](docs/sample-outputs-and-case-studies.md) separate illustrative rows from dated historical outputs, without claiming customer outcomes or financial return. Some archive entries are sanitized illustrations, so a timestamp does not make them current market data or independently verifiable live-run proof.

For a spreadsheet preview, download the [historical keyword CSV](examples/keyword-volume-cpc-historical-2026-07-04.csv) or [historical creative CSV](examples/ppc-creative-inventory-historical-2026-07-07.csv). The keyword preview is a three-row excerpt, not a demonstrated 1,000-keyword production run. The PPC example contains an advertiser label rather than dependable ad copy; review the linked creatives yourself for messaging.

## Run one example

Review the input file for the Actor you selected, including its market and number of queries. A five-keyword batch still costs the flat $0.25 report fee, while the other Actors use the units in the table above.

```bash
npm install
npm run run-suite -- --list
APIFY_TOKEN=your_token_here npm run run-suite -- --actor keyword-roi-scorer
```

The list command does not start an Actor. The selected run command calls only the named Actor and prints a sample of its dataset. Store the token privately and do not commit it to this repository.

**Always include `--actor`.** Omitting it runs all nine examples and can charge for each. The [example runner](examples/run-suite.js) does not set a per-run spending cap; use the Actor in Apify Console when you want to set an explicit maximum before execution. Each Actor is purchased separately, and these guides do not create schedules or send messages.

Prefer the Console? Open a ready-to-edit [keyword example](https://apify.com/changeable_peddler/keyword-roi-scorer/examples/keyword-roi-scoring) or [advertiser example](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/examples/ppc-creative-monitor) and review its input and Pricing tab before execution.

## Connect the result to your workflow

- For bulk keyword lists, [import the n8n keyword-to-CSV workflow](docs/keyword-volume-cpc-n8n.md). It has Google Sheets field mapping, one manual trigger, a $0.26 run cap and no automatic retries.
- To use keyword research or ad inventory from an AI client, follow the [MCP setup guide](docs/keyword-and-ad-inventory-mcp.md).
- For content work, [choose a keyword, brief or visibility check](docs/seo-ai-visibility-workflow-with-apify.md) according to the decision you need to make.
- For paid media, ecommerce or app research, [choose between ad inventory, Shopping prices and Google Play results](docs/ppc-shopping-aso-research-workflow.md). These answer different questions and need not run together.

Most reports share `status`, `summary` and a `checkedAt` timestamp. Inspect `metrics` and the supporting `highlights` or `items` before acting on a score. These scores organise further research without establishing profit, organic ranking difficulty, app demand or ad effectiveness.
