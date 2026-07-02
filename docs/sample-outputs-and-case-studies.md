# Sample outputs and case studies

These shortened examples show the dataset shape a buyer gets back from the SEO and AI Visibility Suite. Real runs include the same top-level fields, plus larger `highlights`, `metrics`, `items`, and `checkedAt` payloads.

The values below are illustrative demo values for showing output structure. Use live Actor runs for current SERP, keyword, and visibility evidence.

## Case study: content opportunity workflow

A growth or content team can run the suite in sequence:

- Score a shortlist with Keyword ROI Scorer.
- Turn the strongest query into a SERP Content Brief.
- Track target-domain and competitor visibility with AI SERP Visibility Monitor.
- Add PPC, Shopping, ASO, or review-mining Actors when the research question expands beyond organic search.

The shared fields make the output easy to combine: `input`, `status`, `score`, `summary`, `recommendations`, `highlights`, and `metrics`.

## Keyword ROI Scorer

Use this when the buyer needs a build-or-skip row for keyword planning.

```json
{
  "input": "best web scraping api",
  "reportType": "keyword-roi-scorer",
  "status": "ANALYZED",
  "score": 81,
  "summary": "best web scraping api: strong commercial intent with measurable search demand and paid-search value.",
  "recommendations": [
    "Prioritize this query for a landing page or comparison asset.",
    "Send the keyword to SERP Content Brief Generator before assigning writing work."
  ],
  "highlights": [
    {
      "type": "KEYWORD_METRICS",
      "searchVolume": 1900,
      "cpc": 18.4,
      "competition": 0.61
    }
  ],
  "metrics": {
    "searchVolume": 1900,
    "cpc": 18.4,
    "competition": 0.61,
    "paidValueSignal": "high",
    "priority": "build"
  }
}
```

Try it on Apify: [Keyword ROI Scorer](https://apify.com/changeable_peddler/keyword-roi-scorer).

## SERP Content Brief Generator

Use this when the buyer wants a content brief grounded in live SERP, People Also Ask, related-search, and AI Overview evidence.

```json
{
  "input": "best web scraping api",
  "reportType": "serp-content-brief-generator",
  "status": "ANALYZED",
  "score": 87,
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

Buyer takeaway: the Actor turns live SERP evidence into a content production handoff, not just a list of ranking URLs.

Try it on Apify: [SERP Content Brief Generator](https://apify.com/changeable_peddler/serp-content-brief-generator).

## AI SERP Visibility Monitor

Use this when the buyer wants to track owned and competitor visibility in organic results and Google AI Overview evidence.

```json
{
  "input": "google ai overview tracker",
  "reportType": "ai-serp-visibility-monitor",
  "status": "ANALYZED",
  "score": 62,
  "summary": "Target domain found in organic results; two competitors appear in the top organic set; AI Overview evidence detected.",
  "recommendations": [
    "Track this query weekly and compare citation movement against competitors.",
    "Refresh pages that rank organically but are absent from AI Overview evidence."
  ],
  "highlights": [
    {
      "type": "TARGET_ORGANIC_MATCH",
      "domain": "apify.com",
      "rank": 5
    },
    {
      "type": "COMPETITOR_ORGANIC_MATCH",
      "domain": "dataforseo.com",
      "rank": 3
    }
  ],
  "metrics": {
    "targetOrganicMatches": 1,
    "competitorOrganicMatches": 2,
    "aiOverviewPresent": true,
    "targetAiOverviewMentioned": false
  }
}
```

Try it on Apify: [AI SERP Visibility Monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor).

## Export pattern

After a run finishes, export the default dataset as JSON, CSV, or Excel from Apify. For most reporting workflows, start with:

- `input`
- `status`
- `score`
- `summary`
- `recommendations`
- `metrics`
- `highlights`

Then add `items` only when a writer, analyst, or client needs the supporting evidence.
