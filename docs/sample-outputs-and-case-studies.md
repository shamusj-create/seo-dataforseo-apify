# Sample outputs and worked examples

These excerpts help you inspect report fields before paying for fresh data. The Keyword ROI example uses invented metrics passed through the current report calculation. The PPC excerpt comes from a dated, controlled run, while the other JSON examples on this page are illustrative rather than current market evidence.

No example is a customer case study or evidence of financial return. Consult the selected Actor's guide for its full fields and timestamps, because the AI SERP schema differs from most of the suite.

## Archive provenance

The [archive manifest](../examples/live/manifest.json) lists all nine saved examples. Seven entries carry dated run identifiers and the LLM mentions and backlink entries use `sanitized-controlled-demo` identifiers. Those two are sanitized output illustrations, not independently verifiable live-run proof. Archive metadata alone does not verify execution against today's code or establish current provider coverage.

## Worked example: preparing a content decision

A content team could start with an existing keyword list, inspect demand and CPC, then request a brief for the query it chooses. That is an example research path, not an observed customer outcome or a requirement to purchase the whole suite.

If the query is already chosen, go straight to the [brief guide](serp-content-brief-api.md). For a visibility concern, use the [SEO and AI task selector](seo-ai-visibility-workflow-with-apify.md) to distinguish a live Google result from indexed mention records. Shopping, ads and Google Play research answer separate questions and have their own [task selector](ppc-shopping-aso-research-workflow.md).

Live data requires a paid Apify plan. Inspect the chosen Actor's Pricing tab and existing run before retrying, because report billing is reserved before provider work and errors can occur after a charge.

## Keyword ROI Scorer

Use this when the buyer needs a research-priority row for a supplied keyword. This example is **illustrative, not live market data**, using invented metrics with the Actor's actual scoring and report format.

```json
{
  "input": "technical seo audit tool",
  "status": "ANALYZED",
  "score": 75,
  "reportType": "keyword-roi-scorer",
  "summary": "technical seo audit tool: volume 1000, CPC 2.5, competition index 40.",
  "recommendations": ["Build now: strong value signal."],
  "highlights": [
    {
      "keyword": "technical seo audit tool",
      "searchVolume": 1000,
      "cpc": 2.5,
      "competition": "MEDIUM",
      "competitionIndex": 40
    }
  ],
  "metrics": {
    "searchVolume": 1000,
    "cpc": 2.5,
    "competition": "MEDIUM",
    "competitionIndex": 40,
    "monthlySearches": [
      { "year": 2026, "month": 6, "search_volume": 1000 },
      { "year": 2026, "month": 7, "search_volume": 1000 },
      { "year": 2026, "month": 8, "search_volume": 1000 }
    ]
  },
  "checkedAt": "2026-09-21T00:00:00.000Z"
}
```

The score is a heuristic. Google Ads competition is not organic SEO difficulty, and this Actor cannot calculate financial ROI from these fields alone. The complete row also contains the provider record in `items`.

Follow the [client keyword-prioritization guide](keyword-volume-cpc-client-prioritization.md) or inspect a [historical controlled live output](../examples/live/keyword-roi-scorer.json). Try it on Apify: [Bulk Google Keyword Search Volume & CPC API](https://apify.com/changeable_peddler/keyword-roi-scorer). Live data requires a paid Apify plan, with a flat $0.25 Actor report fee per batch of up to 1,000 supplied keywords, not per keyword. The July 4 historical artifact contains a three-row excerpt, not proof of a 1,000-keyword production run.

## PPC Ad Creative Monitor

Use this for a domain-level inventory of available Google Ads Transparency creatives. The shortened row below comes from a **controlled run on 7 July 2026**, not a customer result or a claim about today's ads.

```json
{
  "input": "forthepeople.com",
  "status": "ANALYZED",
  "score": 64,
  "reportType": "ppc-ad-creative-monitor",
  "summary": "forthepeople.com: found 40 ad creative(s), 1 distinct messaging angle(s).",
  "recommendations": [
    "Review repeated angles for landing-page and offer positioning.",
    "Track this domain weekly to spot new ad launches."
  ],
  "highlights": [
    {
      "advertiserId": "AR14096354794599874561",
      "title": "Morgan & Morgan, P.A.",
      "format": "text",
      "firstShown": "2025-06-02 15:29:58 +00:00",
      "lastShown": "2026-07-07 10:31:09 +00:00",
      "previewUrl": null
    }
  ],
  "metrics": {
    "creativeCount": 40,
    "textAds": 39,
    "imageAds": 1,
    "videoAds": 0,
    "activeAngles": ["Morgan & Morgan, P.A."]
  },
  "checkedAt": "2026-07-07T11:03:25.277Z"
}
```

Here `activeAngles` contains an advertiser name, **not extracted ad copy**. Review the full row's `items` for Google Ads Transparency URLs and available preview assets, then inspect those creatives yourself for messaging. Some preview URLs are null, and the shown dates are provider observations. See the [full controlled output artifact](../examples/live/ppc-ad-creative-monitor.json) and [competitor-review guide](google-ads-transparency-competitor-review.md). Live data requires a paid Apify plan, with a $0.04 Actor report fee for each advertiser snapshot.

## SERP Content Brief Generator

Use this for a draft brief from returned Google results, People Also Ask and related-search evidence. The invented values below illustrate selected fields without depicting a real ranking observation.

```json
{
  "input": "best web scraping api",
  "reportType": "serp-content-brief-generator",
  "status": "ANALYZED",
  "summary": "Brief built from 10 organic results, 8 PAA items, AI Overview present.",
  "recommendations": [
    "Refresh the existing ranking page using the outline and PAA gaps."
  ],
  "highlights": [
    {
      "rank": 1,
      "title": "Best Web Scraping APIs for Developers",
      "domain": "example.com",
      "url": "https://example.com/best-web-scraping-apis"
    }
  ],
  "metrics": {
    "organicCount": 10,
    "peopleAlsoAskCount": 8,
    "relatedSearchCount": 10,
    "aiOverviewPresent": true,
    "targetFound": true,
    "outline": [
      "Define the search intent in the opening paragraph.",
      "Cover angle: compare API reliability, proxy handling, and export formats.",
      "Answer question: what is the best API for web scraping?"
    ]
  }
}
```

Review the source pages and add your audience, evidence and desired reader action before handing the outline to a writer. The report does not write or publish a finished article. Use the [content-brief guide](serp-content-brief-api.md) to review what [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator) returns before starting a paid report.

## AI SERP Visibility Monitor

Use this to inspect tracked domains in the returned organic result and AI Overview evidence. The excerpt uses current AI SERP field names with illustrative values, without depicting a live market observation.

```json
{
  "keyword": "google ai overview tracker",
  "status": "ANALYZED",
  "visibilityScore": 45,
  "opportunityScore": 70,
  "targetPresence": [
    {
      "domain": "apify.com",
      "found": true,
      "bestRank": 5
    }
  ],
  "competitorPresence": [
    {
      "domain": "dataforseo.com",
      "found": true,
      "bestRank": 3
    }
  ],
  "aiOverview": {
    "present": true,
    "targetMentioned": false,
    "targetCited": false,
    "competitorMentioned": true,
    "competitorCited": true,
    "citedDomains": ["dataforseo.com"]
  }
}
```

The AI SERP schema uses `keyword`, separate visibility and opportunity scores, domain-presence arrays and an `aiOverview` object. Do not map it as if it had the generic `input`, `score`, `highlights` and `metrics` fields. See the [visibility guide](ai-overview-visibility-monitor.md) or open [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor).

## LLM Brand Mentions Monitor

Use this to compare the target's mentions with competitor records and inspect available citation sources by topic. The counts and source domains below are illustrative, not evidence of current model answers or customer results.

```json
{
  "input": "web scraping api",
  "reportType": "llm-brand-mentions-monitor",
  "status": "ANALYZED",
  "summary": "web scraping api on google: target visible in 2/6 row(s); competitors visible in 4/6.",
  "recommendations": [
    "Preserve cited pages and keep factual claims, comparison language, and entity descriptions stable.",
    "Review competitor-cited pages and add clearer comparison, statistics, integrations, and proof points on target pages."
  ],
  "highlights": [
    {
      "question": "What are the best web scraping APIs for developers?",
      "platform": "google",
      "targetMentioned": true,
      "targetCited": true,
      "competitorsMentioned": ["zyte.com"],
      "sourceDomains": ["apify.com", "zyte.com", "dataforseo.com"]
    }
  ],
  "metrics": {
    "targetMentions": 2,
    "competitorMentions": 4,
    "citationDomains": ["apify.com", "zyte.com", "brightdata.com", "dataforseo.com"]
  }
}
```

See the [mentions guide](llm-brand-mentions-monitor.md) for source dates, supported platforms and the $0.35 query unit. Try it on Apify: [LLM Brand Mentions Monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor).

## Backlink Gap Audit Report

Use this for a bounded backlink research shortlist. These are invented counts and placeholder domains, not verified current link opportunities or outreach results.

```json
{
  "input": "apify.com",
  "reportType": "backlink-gap-audit-report",
  "status": "ANALYZED",
  "summary": "apify.com: found 25 competitor-only referring domain(s), average rank 47.8.",
  "recommendations": [
    "Prioritize outreach or digital PR review for the top gap domains: example-dev-news.com, automation-directory.example, data-tools-review.example.",
    "Export the dataset and tag each gap domain as editorial, directory, partner, listicle, or low-quality before outreach."
  ],
  "highlights": [
    {
      "domain": "example-dev-news.com",
      "rank": 61,
      "backlinks": 43,
      "referringPages": 18,
      "linkedTargets": [
        { "target": "scrapingbee.com", "backlinks": 24 },
        { "target": "zyte.com", "backlinks": 19 }
      ]
    }
  ],
  "metrics": {
    "gapDomainCount": 25,
    "averageRank": 47.8,
    "totalBacklinks": 214
  }
}
```

See the [gap-audit guide](backlink-gap-audit-api.md) for manual source review and the $0.25 report unit. Try it on Apify: [Backlink Gap Audit Report](https://apify.com/changeable_peddler/backlink-gap-audit-report).

## Shopping Price Gap Finder

The [historical Shopping output](../examples/live/shopping-price-gap-finder.json) contains saved offer records and price-summary fields. Its broad spreads are not verified margin opportunities: some source URLs are null, and product titles must be checked for model, condition and quantity. Follow the [Google Shopping comparison guide](google-shopping-price-comparison.md) to interpret the sample before running [Shopping Price Gap Finder](https://apify.com/changeable_peddler/shopping-price-gap-finder).

## App Store ASO Opportunity Finder

The [historical Google Play output](../examples/live/app-store-aso-opportunity-finder.json) contains ranking apps and a heuristic opportunity score. The sample includes null review counts, so `medianTopReviews` of zero does not verify that the apps have no reviews. The [Google Play guide](google-play-aso-keyword-research.md) explains the fields and limits. This [ASO Actor](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder) does not cover Apple's App Store.

## Local Review Complaint Miner

The [historical review output](../examples/live/local-review-complaint-miner.json) is a saved lowest-rating sample, not a current assessment of the business or a population-wide complaint rate. Read the [review-triage guide](reputation-risk-google-reviews-api.md) before using the score. [Local Review Complaint Miner](https://apify.com/changeable_peddler/local-review-complaint-miner) uses simple rating and word rules, so human review remains necessary.

## Export pattern

After a run finishes, inspect `status` before exporting the dataset as JSON, CSV or Excel from Apify. For most of these Actors, start with:

- `input`
- `status`
- `score`
- `summary`
- `recommendations`
- `metrics`
- `highlights`

Keep `items` or the appropriate source arrays when a decision needs supporting evidence. For AI SERP, map `keyword`, `visibilityScore`, `opportunityScore`, `targetPresence`, `competitorPresence`, `aiOverview` and `topOrganicResults` instead. All schemas require checking the timestamp and source context before a later comparison.
