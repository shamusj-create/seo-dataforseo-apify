# Use these Apify Actors in AI chat

Connect Apify once, then ask for a task such as keyword volume and CPC, Google Ads creative links, a vendor trust-page review, or CQC inspection report links. The assistant can look up the relevant Actor, check its current price and inputs, and request approval for one bounded run. Apify runs it in the connected customer's account.

## Connect in Claude, ChatGPT or another MCP client

| Client | Connection |
|---|---|
| Claude | Open the [Apify connector](https://claude.com/marketplace/connectors/apify-773fbb) in Claude's directory and connect your account. A custom remote connection can also use the URL below. |
| ChatGPT | If your workspace allows custom MCP servers, add the URL below as a custom plugin, choose OAuth and select the installed plugin in a conversation. |
| Codex, Claude Code, Cursor or GitHub Copilot | Use the official Apify plugin or add a remote MCP connection. Install the optional task skill below to help the agent choose from this catalog. |

Use Apify OAuth with the server URL below to check details, start one Actor and read its result.

```text
https://mcp.apify.com/?tools=search-actors,fetch-actor-details,call-actor,get-actor-run,get-dataset-items
```

Use the preview connection below to search and inspect public Actor details without signing in.

```text
https://mcp.apify.com/?tools=search-actors,fetch-actor-details
```

Choose the preview URL to inspect pricing and input schemas without exposing a tool that starts runs. Read the current setup instructions for your client. [Apify MCP](https://docs.apify.com/mcp) · [Claude](https://docs.apify.com/integrations/claude-desktop) · [OpenAI Docs](https://developers.openai.com/api/docs/guides/custom-mcp-server) · [Apify plugins](https://docs.apify.com/agents/plugins)

## Give the assistant a task

Name the task and the budget decision. Here are three prompts.

> I have a US English list of 200 keywords. Use `changeable_peddler/keyword-roi-scorer` to prepare volume and CPC metrics. First show the market, number of keywords, current report price and proposed run limit. Wait for my approval before starting. Include missing values in the output.

> I am reviewing a vendor. Use `changeable_peddler/trust-center-compliance-extractor` to inspect the trust page I provide. First show what it can check, the attempt and report fees, and the proposed limit. Wait for approval. Give me the source links and snippets so I can verify the claims.

> I have an English care location ID. Use `changeable_peddler/cqc-report-finder` to find its inspection-report links and dates. Limit the first run to one location and one provider. Check current charges and wait for approval.

A good first run uses one website, advertiser, location, company or other relevant unit. The keyword tool is priced per batch, so confirm the market and list before running. Live data from the nine search and ads tools requires a paid Apify plan, with provider access included. Check the current Pricing tab and any separate platform usage before authorizing.

## Choose an Actor

The [machine-readable catalog](../skills/apify-research/references/actor-catalog.json) lists exact Actor names, public Markdown documentation, input fields and Pricing tabs for all 24.

### Search and ads

| When you need to… | Actor |
|---|---|
| Get Google search volume and CPC for my existing keyword list | [keyword-roi-scorer](https://apify.com/changeable_peddler/keyword-roi-scorer) |
| Show available competitor Google ads and creative links for this advertiser domain | [ppc-ad-creative-monitor](https://apify.com/changeable_peddler/ppc-ad-creative-monitor) |
| Prepare a content brief from Google ranking pages and People Also Ask | [serp-content-brief-generator](https://apify.com/changeable_peddler/serp-content-brief-generator) |
| Check which target and competitor domains appear in a Google result and its AI Overview | [ai-serp-visibility-monitor](https://apify.com/changeable_peddler/ai-serp-visibility-monitor) |
| Check whether a brand appears in AI search mentions and citations for a topic | [llm-brand-mentions-monitor](https://apify.com/changeable_peddler/llm-brand-mentions-monitor) |
| Find referring domains competitors have that are missing for my target domain | [backlink-gap-audit-report](https://apify.com/changeable_peddler/backlink-gap-audit-report) |
| Compare returned Google Shopping offers for a product query | [shopping-price-gap-finder](https://apify.com/changeable_peddler/shopping-price-gap-finder) |
| Show the Google Play apps ranking for a keyword in my market | [app-store-aso-opportunity-finder](https://apify.com/changeable_peddler/app-store-aso-opportunity-finder) |
| Find common complaints in Google reviews for a particular branch | [local-review-complaint-miner](https://apify.com/changeable_peddler/local-review-complaint-miner) |

### Website evidence

| When you need to… | Actor |
|---|---|
| Find public SOC 2, ISO 27001, DPA and subprocessor references for a vendor | [trust-center-compliance-extractor](https://apify.com/changeable_peddler/trust-center-compliance-extractor) |
| Find the passages about retention, deletion and transfers in this privacy policy | [privacy-policy-risk-scanner](https://apify.com/changeable_peddler/privacy-policy-risk-scanner) |
| Find where these website terms mention auto-renewal, refunds or arbitration | [terms-risk-clause-extractor](https://apify.com/changeable_peddler/terms-risk-clause-extractor) |
| Find the company name, VAT number or registry ID on this EU company's website | [eu-legal-entity-extractor](https://apify.com/changeable_peddler/eu-legal-entity-extractor) |
| Find cookie banner tools and analytics or advertising tracker references on a site | [cookie-consent-tracker-scanner](https://apify.com/changeable_peddler/cookie-consent-tracker-scanner) |
| Check robots.txt directives for AI crawlers and whether a site publishes llms.txt | [ai-crawler-policy-scanner](https://apify.com/changeable_peddler/ai-crawler-policy-scanner) |
| Find this service's public API docs and OpenAPI-like links | [api-docs-openapi-discovery](https://apify.com/changeable_peddler/api-docs-openapi-discovery) |
| Find a site's security.txt contact, expiry and vulnerability disclosure policy | [security-txt-vdp-checker](https://apify.com/changeable_peddler/security-txt-vdp-checker) |
| Collect public SaaS prices and trial or enterprise-plan text for a comparison | [saas-pricing-page-extractor](https://apify.com/changeable_peddler/saas-pricing-page-extractor) |
| Find role links and hiring signals on a company's careers page | [career-page-hiring-signal-extractor](https://apify.com/changeable_peddler/career-page-hiring-signal-extractor) |
| Find public newsroom links, media kits and published press contacts | [press-newsroom-contact-extractor](https://apify.com/changeable_peddler/press-newsroom-contact-extractor) |

### Company and public records

| When you need to… | Actor |
|---|---|
| Triage risks for a pinned npm or Python dependency | [oss-supply-chain-risk-report](https://apify.com/changeable_peddler/oss-supply-chain-risk-report) |
| Find recent SEC filings worth reviewing for a ticker or CIK | [sec-red-flag-monitor](https://apify.com/changeable_peddler/sec-red-flag-monitor) |
| Find possible Form D filings and public development signals for a startup | [startup-funding-signal-report](https://apify.com/changeable_peddler/startup-funding-signal-report) |
| Find CQC inspection report links and dates for this English care location | [cqc-report-finder](https://apify.com/changeable_peddler/cqc-report-finder) |

## Install the optional skill

The [Apify Research skill](../skills/apify-research/SKILL.md) adds a task chooser and the steps for a capped run to clients that support Agent Skills. Use a compatible skills installer to select it from this repository.

```bash
npx skills add shamusj-create/seo-dataforseo-apify --skill apify-research
```

Connect Apify separately and inspect the skill before installing it. Availability depends on the client. [Agent Skills format](https://agentskills.io/specification) · [Skills installer](https://www.skills.sh/docs)

## Run with an approved limit

1. Use `fetch-actor-details` for the exact `changeable_peddler/...` name to check the input schema and current pricing. Ask for any missing target, market or authorized contact details.
2. Show the planned input scope, estimated billable units and a positive maximum in USD. Obtain explicit approval. Use `call-actor` with `callOptions.maxTotalChargeUsd` so Apify receives that limit. If the client cannot pass the limit, open the Actor in Apify Console and set it there.
3. Use `get-actor-run` for the returned run ID if the first response is pending. Use `get-dataset-items` on that run's dataset. Keep source links, timestamps, partial results and source errors visible. Inspect the existing run before considering a second charge.

These are independently published Actors on Apify. Consult the [MCP tool reference](https://docs.apify.com/mcp#available-tools) for connection options and run controls.
