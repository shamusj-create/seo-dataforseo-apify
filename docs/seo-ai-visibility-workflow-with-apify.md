# Choose an SEO or AI visibility research task

Start with the decision you need to make. These five Actors provide different evidence, and none requires running the rest of the suite first.

| Your decision | Guide | Actor report fee, USD |
|---|---|---|
| Which supplied keywords deserve further research? | [Build a keyword-prioritisation sheet](keyword-volume-cpc-client-prioritization.md) | Flat $0.25 per batch of up to 1,000 keywords. |
| What should a writer investigate for this query? | [Prepare a SERP content brief](serp-content-brief-api.md) | $0.05 per keyword brief. |
| Does the returned Google result include our domain or cite it in an AI Overview? | [Check Google visibility](ai-overview-visibility-monitor.md) | $0.015 per keyword/location/device report. |
| What indexed AI-search mention and citation records match this topic? | [Review LLM brand mentions](llm-brand-mentions-monitor.md) | $0.35 per topic/platform query. |
| Which referring-domain records are returned for competitors and excluded for our target? | [Review a backlink gap report](backlink-gap-audit-api.md) | $0.25 per bounded report. |

Live data requires a paid Apify plan. DataForSEO access is included, with report events billed separately from applicable Apify plan charges. Events are reserved before provider requests, so upstream errors or empty responses can occur after billing.

## Choose a proportionate first check

The keyword Actor is priced for bulk lists. A five-keyword sample costs the same $0.25 report fee as a batch of up to 1,000; the [illustrative output](sample-outputs-and-case-studies.md#keyword-roi-scorer) lets you inspect the format without paying for a fresh report. Google Ads advertiser competition is not organic ranking difficulty, and its score cannot establish financial ROI.

If a query is already chosen, go straight to a content brief or visibility check. A brief gives a writer source material, while a visibility report records a provider observation; neither guarantees rankings or traffic. Topic-level LLM mention records come from a separate index and should not be treated as identical to a live Google result.

## Keep evidence with the decision

Save the original input alongside `checkedAt` and the source records used for your decision. Separate illustrative outputs from historical runs, and compare like-for-like inputs when investigating change. These example guides do not create schedules, compare stored runs or send alerts.

For bulk keyword automation, see the [manual n8n-to-CSV workflow](keyword-volume-cpc-n8n.md) or [MCP setup](keyword-and-ad-inventory-mcp.md). For ad inventory, product offers, Google Play rankings or review samples, return to the [nine-Actor task selector](../README.md#choose-a-task).
