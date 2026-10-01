# Get Google keyword search volume and CPC into a planning CSV with n8n

Turn a client's existing keyword list into a sortable planning sheet. This workflow sends one batch to [Google Keyword Search Volume & CPC API](https://apify.com/changeable_peddler/keyword-roi-scorer), then exports search volume, CPC, advertiser competition, and a research-priority score as a CSV. It uses n8n's built-in nodes, so you do not need to install a community package.

[Download the workflow JSON](../examples/n8n-keyword-volume-cpc.json) or [inspect the ready-to-edit Apify example](https://apify.com/changeable_peddler/keyword-roi-scorer/examples/keyword-roi-scoring).

Inspect the result first: [download a historical planning CSV](../examples/keyword-volume-cpc-historical-2026-07-04.csv). These three rows were extracted from the [controlled July 4 output](../examples/live/keyword-roi-scorer.json). They are product-format proof, not current search metrics or a customer result. The historical artifact does not record market columns, so this excerpt omits them; new workflow output includes the location and language you select.

**Live data requires a paid Apify plan.** The Actor's report price is **$0.25 per batch of up to 100 supplied keywords**, in addition to applicable Apify plan charges. DataForSEO access is included; you do not need a DataForSEO account or credentials. This workflow sets a **$0.26 run spending cap**, leaving $0.01 above the report price for any small start event. It is inactive, manually triggered, and has automatic retries disabled.

The original workflow JSON imported successfully into **n8n 2.41.5**. Its code and CSV export steps also passed an n8n execution using a historical output fixture, with the HTTP node entirely replaced by stored data. Live API authentication and provider requests were not executed. Review your credential and input before a paid execution.

## Import and configure

1. Download [n8n-keyword-volume-cpc.json](../examples/n8n-keyword-volume-cpc.json), then use n8n's **Import from File** command. See [n8n's export/import guide](https://docs.n8n.io/workflows/export-import/).
2. Open **Prepare keyword batch**. Replace its sample keywords with 1–100 terms from one client or campaign. Set `locationCode` and `languageCode` for the intended market. `2840` is United States and `en` is English. Duplicate and blank terms are removed; the workflow stops if the remaining batch is empty or exceeds 100 terms.
3. Open **Run keyword Actor**. Select or create a **Header Auth** credential. Set its header name to `Authorization` and its value to `Bearer YOUR_APIFY_TOKEN`. Obtain your token from Apify Console's **Settings > API & Integrations**. Store it in the credential, not in the workflow JSON or request URL.
4. Confirm the HTTP node still has `maxTotalChargeUsd=0.26`, a run timeout of 120 seconds, and **Retry On Fail** disabled. Its response must be JSON with **Include Response Headers and Status** enabled. Leave the workflow inactive while you review it.
5. When ready for one paid run, execute the workflow manually. In **Export planning CSV**, download the file from its `data` binary output. Import that CSV into your planning sheet.

One manual execution starts one paid Actor run. An HTTP timeout does not prove that a run never started. Check Apify Console's existing run and dataset before repeating an execution.

## What the CSV contains

The workflow sorts rows by descending research-priority score and records the chosen market on each row.

| CSV column | Meaning |
| --- | --- |
| `keyword` | Supplied keyword returned by the provider |
| `locationCode` | Location selected for this batch |
| `languageCode` | Language selected for this batch |
| `searchVolume` | Google Ads search-volume value |
| `cpc` | Google Ads CPC value |
| `advertiserCompetition` | Google Ads advertiser-competition label, when available |
| `advertiserCompetitionIndex` | Google Ads advertiser-competition index |
| `researchPriorityScore` | Actor's 0–100 research-priority signal |
| `recommendation` | Suggested next research step |
| `checkedAt` | Time the Actor checked the batch |

The Actor evaluates supplied keywords; it does not generate keyword ideas. Advertiser competition is not organic ranking difficulty. CPC is not expected revenue, and the score is not financial ROI. Add your own business relevance, organic SERP assessment, and commercial assumptions before selecting topics to brief. Zero metric values remain zero in the export; they are not silently discarded.

CSV text that could be interpreted as a spreadsheet formula receives a leading apostrophe. This protection applies only to the exported text: formula-leading input strings are preserved for the provider request.

## Empty results and provider errors

The workflow stops if the HTTP response has no keyword rows, contains an `API_ERROR` or other non-analyzed row, or has an unexpected shape. It also stops on unsuccessful HTTP responses. This prevents a failed request from appearing as a successful planning export.

The Actor reserves its report event before requesting provider data. Provider errors or empty results can occur after a charge. A free-plan run makes no live DataForSEO request and returns an empty dataset. Inspect the existing run's log and `RUN_SUMMARY` before retrying; every repeated execution can start another paid run.

## Optional Google Sheets destination

After reviewing the CSV output, connect a Google Sheets **Append Row** node to **Validate and flatten results**. Create sheet headers matching the table above and map those flat fields to them. Select your own Google Sheets credential, document, and sheet in n8n. The supplied workflow contains no Google account credentials, sheet IDs, automatic schedule, or Google Sheets write step.

Repeated executions append repeated measurements. Use `keyword`, `locationCode`, `languageCode`, and `checkedAt` to distinguish snapshots, or design an explicit update rule for a single-current-value sheet.

## API and node references

The HTTP node calls `POST https://api.apify.com/v2/actors/changeable_peddler~keyword-roi-scorer/run-sync-get-dataset-items` with JSON input. Apify's [synchronous dataset endpoint](https://docs.apify.com/api/v2/actor-run-sync-get-dataset-items-post) documents the tilde-separated Actor ID, run spending cap, timeout, and dataset response. The API's [authentication guide](https://docs.apify.com/api/v2/getting-started) documents the bearer header.

See n8n's [HTTP Request node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/) and [Convert to File node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile/) for request and CSV settings. If you prefer native Apify nodes, Apify also documents its [n8n integration](https://docs.apify.com/integrations/n8n).
