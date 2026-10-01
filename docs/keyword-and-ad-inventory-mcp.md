# Use keyword research and ad inventory from an MCP client

If your existing AI workflow needs Google keyword volume/CPC or a Google Ads Transparency inventory, you can expose either Actor through Apify's hosted MCP server. This uses the published Actors and their existing prices; it does not require a separate server or DataForSEO credentials.

## Choose the tool

Use one of these server URLs in an MCP client that supports remote Streamable HTTP:

- Keyword volume/CPC: `https://mcp.apify.com?tools=changeable_peddler/keyword-roi-scorer`
- Advertiser creative inventory: `https://mcp.apify.com?tools=changeable_peddler/ppc-ad-creative-monitor`
- Both: `https://mcp.apify.com?tools=changeable_peddler/keyword-roi-scorer,changeable_peddler/ppc-ad-creative-monitor`

A generic client configuration is:

```json
{
  "mcpServers": {
    "keyword-research": {
      "url": "https://mcp.apify.com?tools=changeable_peddler/keyword-roi-scorer"
    }
  }
}
```

Sign in to Apify through the hosted server's OAuth flow when prompted, or use an Apify API token in your client's credential settings. Never paste a token into a public prompt or repository. Client configuration formats differ; use [Apify's official configuration guide](https://docs.apify.com/integrations/mcp) for your client. Confirm that the tool appears before asking the agent to run it.

**Live results require a paid Apify plan.** The keyword Actor charges a $0.25 report event per batch of up to 100 supplied keywords. PPC charges $0.04 per advertiser snapshot, with up to 40 available creatives. DataForSEO access is included; applicable Apify plan charges are separate. Free-plan Actor runs make no provider request and return an empty dataset.

## Keyword planning prompt

Start with a bounded instruction such as:

> I am comparing an existing client keyword list for the US English market. First show the Actor input and applicable charge, then ask me before running one batch. Use keyword-roi-scorer with locationCode 2840, languageCode en, and these keywords: technical seo audit tool; rank tracking software; seo api. After the run, return keyword, search volume, CPC, advertiser competition, and research priority score. Keep missing data visible. Treat the score as a research sorting heuristic; check relevance and organic SERP difficulty separately.

The confirmation in this example is a way to control your own agent's spending. Client prompts are not a substitute for an Apify run spending limit. The report event is charged before the provider request, so a provider error or unavailable data may follow a charge.

The Actor evaluates supplied keywords; it does not generate keyword ideas, calculate organic difficulty, or forecast financial ROI. See the [keyword planning guide](keyword-volume-cpc-client-prioritization.md) and [historical controlled output](../examples/live/keyword-roi-scorer.json).

## Competitor creative-review prompt

> Prepare one Google Ads Transparency inventory for forthepeople.com in the US. First show the applicable charge and ask me before starting one advertiser snapshot. Return the available creative records, format counts, shown dates, and source or preview links. Keep unavailable fields visible. I will review the linked creatives myself for messaging.

This Actor returns a snapshot, not verified ad-copy extraction, run-to-run comparison, change alerts, or performance data. The [competitor-review guide](google-ads-transparency-competitor-review.md) includes a historical controlled example. Availability can vary by advertiser and market.

## Discovery and verification

Apify's hosted MCP server supports Actor search and structured result schemas. Its official documentation describes tool selection and eligibility; full-permission and rental Actors are excluded. This guide's configuration and field mapping were checked against the official documentation and current Actor definitions. It has not been executed as a paid MCP run, and it is not a promise that every client can run the Actors without setup.

Sources: [Apify MCP server](https://docs.apify.com/integrations/mcp), [keyword Actor](https://apify.com/changeable_peddler/keyword-roi-scorer), [PPC Actor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor).
