# Use keyword research and ad inventory from an MCP client

If your existing AI workflow needs Google keyword volume/CPC or a Google Ads Transparency inventory, you can expose either Actor through Apify's hosted MCP server. This uses the published Actors and their existing prices; it does not require a separate server or DataForSEO credentials.

For other research tasks and the capped `call-actor` workflow, see the [AI chat setup and task catalog](use-apify-actors-in-ai-chat.md).

## Choose the tool

Use the Streamable HTTP server URL below to check current pricing and inputs, then start one approved run with a limit.

```text
https://mcp.apify.com/?tools=search-actors,fetch-actor-details,call-actor,get-actor-run,get-dataset-items
```

Choose `changeable_peddler/keyword-roi-scorer` for supplied keyword lists or `changeable_peddler/ppc-ad-creative-monitor` for one advertiser's Google Ads Transparency snapshot. Ask the assistant to use `fetch-actor-details` for that exact name.

Sign in to Apify through the hosted server's OAuth flow when prompted, or use an Apify API token in your client's credential settings. Never paste a token into a public prompt or repository. Client configuration formats differ; use [Apify's official configuration guide](https://docs.apify.com/integrations/mcp) for your client. Confirm that the tool appears before asking the agent to run it.

**Live results require a paid Apify plan.** The keyword Actor charges a flat $0.25 report event per batch of up to 1,000 supplied keywords, not per keyword; a small check costs the same as a full batch. PPC charges $0.04 per advertiser snapshot, with up to 40 available creatives. DataForSEO access is included; applicable Apify plan charges are separate. Free-plan Actor runs make no provider request and return an empty dataset.

## Keyword planning prompt

Start with a bounded instruction such as:

> I am comparing an existing client keyword list for the US English market. First show the Actor input and applicable charge, then ask me before running one batch. Use keyword-roi-scorer with locationCode 2840, languageCode en, and these keywords: technical seo audit tool; rank tracking software; seo api. After the run, return keyword, search volume, CPC, advertiser competition, and research priority score. Keep missing data visible. Treat the score as a research sorting heuristic; check relevance and organic SERP difficulty separately.

After approval, send the user's positive USD maximum in `callOptions.maxTotalChargeUsd` on `call-actor`. Set the approved limit in Apify Console if the client cannot pass the option. The report event is charged before the provider request, so a provider error or unavailable data may follow a charge.

The Actor evaluates supplied keywords; it does not generate keyword ideas, calculate organic difficulty, or forecast financial ROI. See the [keyword planning guide](keyword-volume-cpc-client-prioritization.md) and [historical controlled output](../examples/live/keyword-roi-scorer.json).

The following `call-actor` arguments illustrate an approved $0.26 limit for the keyword example. The Actor charges the same $0.25 report fee for one term or a batch, so choose the actual list before requesting approval.

```json
{
  "actor": "changeable_peddler/keyword-roi-scorer",
  "input": {
    "keywords": ["technical seo audit tool", "rank tracking software", "seo api"],
    "locationCode": 2840,
    "languageCode": "en"
  },
  "callOptions": { "maxTotalChargeUsd": 0.26 }
}
```

Use the returned run ID and dataset ID to read the result. Check the existing run before approving another start.

## Competitor creative-review prompt

> Prepare one Google Ads Transparency inventory for forthepeople.com in the US. First show the applicable charge and ask me before starting one advertiser snapshot. Return the available creative records, format counts, shown dates, and source or preview links. Keep unavailable fields visible. I will review the linked creatives myself for messaging.

This Actor returns a snapshot, not verified ad-copy extraction, run-to-run comparison, change alerts, or performance data. The [competitor-review guide](google-ads-transparency-competitor-review.md) includes a historical controlled example. Availability can vary by advertiser and market.

## Discovery and verification

Apify's hosted MCP server supports Actor search and structured result schemas. Its official documentation describes tool selection and eligibility; full-permission and rental Actors are excluded. Both exact names were checked using Apify's live metadata lookup. For tool selection, OAuth and the charge-limit option, see [Apify MCP](https://docs.apify.com/mcp).

Sources: [Apify MCP server](https://docs.apify.com/integrations/mcp), [keyword Actor](https://apify.com/changeable_peddler/keyword-roi-scorer), [PPC Actor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor).
