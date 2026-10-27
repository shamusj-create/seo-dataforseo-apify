# Backlink gap audit and referring domains API

Use [Backlink Gap Audit Report](https://apify.com/changeable_peddler/backlink-gap-audit-report) to make a bounded research shortlist from a target domain and its competitors. The provider's domain-intersection data supplies gap records with available rank, backlink counts and linked-target evidence.

Live data requires a paid Apify plan. A bounded report costs **$0.25 in Actor report events**, plus applicable Apify plan charges; DataForSEO access is included. Billing is reserved before the request, so an upstream error or empty result can occur after a charge.

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

The example compares one target with three competitors and requests up to 25 records. Edit that input file before running only this Actor from the repository root:

```bash
APIFY_TOKEN=your_token_here npm run run-suite -- --actor backlink-gap-audit-report
```

The runner sets no per-run spending cap; use Apify Console if you need an explicit maximum. You do not need to buy keyword or content-brief reports to use the gap audit.

## What to inspect

- `score`: normalized opportunity score from returned gap domains and available authority signals.
- `summary`: quick statement of gap-domain count and average rank.
- `metrics.gapDomainCount`: number of competitor-only referring domains returned.
- `metrics.totalBacklinks`: backlink volume across returned gap domains where available.
- `highlights`: the top competitor-only referring domains to review first.
- `items`: the full bounded list for spreadsheet triage.

## Check fit before adding a domain to a work queue

Review `linkedTargets` and the supporting `rawResult` to understand why a record was returned. This is a bounded provider index, not a fresh crawl of every link or proof that a publisher will accept a placement. Counts and scores do not establish topical relevance or link quality.

Export the report, then tag candidates by relevance and type before deciding whether any action is warranted. The Actor does not contact publishers or create an outreach campaign.

The [sanitized output illustration](../examples/live/backlink-gap-audit-report.json) uses placeholder domains and a non-verifiable demo run ID. It demonstrates a stored example shape, not an independently verifiable live run, customer outcome or current link opportunity. Return to the [SEO task selector](seo-ai-visibility-workflow-with-apify.md) if you need a different kind of evidence.
