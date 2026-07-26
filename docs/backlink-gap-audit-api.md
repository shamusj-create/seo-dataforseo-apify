# Backlink gap audit and referring domains API

Use [Backlink Gap Audit Report](https://apify.com/changeable_peddler/backlink-gap-audit-report) when a buyer needs a bounded backlink gap report without building a link crawler or normalizing competitor-only referring domains by hand.

The Actor compares a target domain against competitor domains and returns outreach-ready referring-domain gaps with rank, backlink, referring-page, and linked-target evidence where available.

## Example input

Start with [examples/backlink-gap-input.json](../examples/backlink-gap-input.json):

```json
{
  "targetDomain": "apify.com",
  "competitorDomains": [
    "scrapingbee.com",
    "zyte.com",
    "brightdata.com"
  ],
  "limit": 25
}
```

## What to inspect

- `score`: normalized opportunity score from returned gap domains and available authority signals.
- `summary`: quick statement of gap-domain count and average rank.
- `metrics.gapDomainCount`: number of competitor-only referring domains returned.
- `metrics.totalBacklinks`: backlink volume across returned gap domains where available.
- `highlights`: the top competitor-only referring domains to review first.
- `items`: the full bounded list for spreadsheet triage.

## Workflow

1. Use [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer) and [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) to decide which topics deserve authority work.
2. Run Backlink Gap Audit Report against the target domain and 2-5 competitors.
3. Tag each returned domain as editorial, directory, partner, listicle, integration, or low-quality.
4. Build outreach and content-refresh tasks from the highest-fit domains.

Controlled output shape: [backlink-gap-audit-report.json](../examples/live/backlink-gap-audit-report.json).
