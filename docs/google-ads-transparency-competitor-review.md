# Review competitor Google Ads Transparency creatives by domain

A PPC agency preparing a campaign review can use a repeatable inventory of public competitor ads: how many creatives were returned, their formats, the provider's first and last shown dates, and links to inspect each creative. This helps an analyst decide which ads warrant a closer manual review.

Use [the published competitor-review example](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/examples/ppc-creative-monitor) to see a ready-to-edit advertiser input, or open the [Actor's Store page](https://apify.com/changeable_peddler/ppc-ad-creative-monitor). It returns a snapshot; it does not compare snapshots or alert on changes automatically. It does not report spend, clicks, conversion rate, or ROAS.

## First run in Apify Console

1. Open the [Actor's Store page](https://apify.com/changeable_peddler/ppc-ad-creative-monitor) and its Console input form, then enter one advertiser domain. If Apify labels the button **Try for free**, it opens Console; it does **not** mean this Actor provides a free live-data trial. The archived example below used `forthepeople.com`; current results can differ.
2. Select a named country, platform, and format. Select **Custom / advanced codes** to enter a location code for another supported country; `2840` means United States. `google_search` with `all` formats requests Search creatives across available formats. Keep `depth` at 40 or less.
3. Review the [Pricing tab](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/pricing) and set a run spending limit that allows one **$0.04 advertiser-snapshot event**. Each domain is billed separately. Live data requires a paid Apify plan; DataForSEO access is included.
4. Run the Actor and check **Overview** for each domain's status, returned creative count, and errors or no-results. Then choose **Creative inventory** for one row per returned creative, with format, provider shown dates, Google source links, and available preview image links. Missing links stay empty; provider `preview_url` scripts are not treated as ready-to-open images.
5. Use the **Creative inventory CSV** output link or export CSV from that view for a client review sheet. Keep JSON for complete domain snapshot records. Record the messages, CTAs, and landing-page hypotheses yourself after reviewing linked creatives. Retain separate datasets if you want to compare later runs yourself; comparison is not automatic.

Example input:

```json
{
  "targetDomains": ["forthepeople.com"],
  "marketPreset": "us",
  "platform": "google_search",
  "adFormat": "all",
  "depth": 40,
  "concurrency": 1
}
```

The input above selects the United States preset. Existing API inputs with `locationCode: 2840` still work when `marketPreset` is omitted or `"custom"`. A named preset overrides the advanced location code; select **Custom / advanced codes** to use that code.

## Inspect a real historical creative inventory without running

A [controlled run from 7 July 2026](../examples/live/ppc-ad-creative-monitor.json) returned 40 creatives for `forthepeople.com`: 39 text and one image. It returned one `activeAngles` entry, **“Morgan & Morgan, P.A.”**, which is the advertiser name, not extracted ad copy. Here are three actual returned creatives; shown dates below are UTC dates.

| Creative | Format | First shown | Last shown | Google source | Preview image |
|---|---|---|---|---|---|
| CR00347249188213358593 | text | 2025-06-02 | 2026-07-07 | [Open creative](https://adstransparency.google.com/advertiser/AR14096354794599874561/creative/CR00347249188213358593?region=US) | [Open image](https://tpc.googlesyndication.com/archive/simgad/6226429092379163340) |
| CR18421961339317518337 | text | 2025-10-16 | 2026-07-07 | [Open creative](https://adstransparency.google.com/advertiser/AR14096354794599874561/creative/CR18421961339317518337?region=US) | [Open image](https://tpc.googlesyndication.com/archive/simgad/16905843141317979848) |
| CR08429286786311651329 | image | 2025-07-18 | 2026-07-07 | [Open creative](https://adstransparency.google.com/advertiser/AR14096354794599874561/creative/CR08429286786311651329?region=US) | [Open image](https://tpc.googlesyndication.com/archive/simgad/17350912613295677504) |

[Download the three-row historical CSV](../examples/ppc-creative-inventory-historical-2026-07-07.csv) to inspect the spreadsheet structure without a run. It preserves full provider timestamps and available image links; direct `previewUrl` was unavailable for all three records and is blank. Historical source and asset links may change or stop working. The [short JSON output excerpt](sample-outputs-and-case-studies.md#ppc-ad-creative-monitor) separately shows the domain-level summary.

This is historical product proof, not a customer case, current ad inventory, or evidence that an ad converts. New live inventory rows include the resolved location; the historical CSV does not infer a location field from its source links.

## Coverage and cost limits

The input accepts up to 50 domains and a depth of up to 40 creatives per domain. Domains are normalized before duplicates are removed, so `example.com` and `https://www.example.com` are processed once. Invalid or over-limit inputs stop before report billing. One valid domain costs one $0.04 report event, including when DataForSEO returns no matching creatives or an API error. An API error row means the provider could not return that target; it is not proof the advertiser has no ads. Report billing is reserved before the provider request.

The creative CSV contains returned creatives only. An empty inventory is not a complete run-status report: check **Overview** and `RUN_SUMMARY` for zero results, access limits, or errors.

The Actor's `activeAngles` field deduplicates provider titles, descriptions, or preview URLs. In observed runs, the title was the advertiser name, so this field did not supply usable copy themes. Creative previews require analyst review. First and last shown dates are provider observations, not guaranteed campaign start and end dates.
