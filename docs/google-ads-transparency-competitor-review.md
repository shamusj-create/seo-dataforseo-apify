# Review competitor Google Ads Transparency creatives by domain

A PPC agency preparing a campaign review can use a repeatable inventory of public competitor ads: how many creatives were returned, their formats, the provider's first and last shown dates, and links to inspect each creative. This helps an analyst decide which ads warrant a closer manual review.

Use [the published competitor-review example](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/examples/ppc-creative-monitor) to see a ready-to-edit advertiser input, or open the [Actor's Store page](https://apify.com/changeable_peddler/ppc-ad-creative-monitor). It returns a snapshot; it does not compare snapshots or alert on changes automatically. It does not report spend, clicks, conversion rate, or ROAS.

## First run in Apify Console

1. Open the [Actor's Store page](https://apify.com/changeable_peddler/ppc-ad-creative-monitor), choose **Try for free**, and enter one advertiser domain in the Console input form. The archived example below used `forthepeople.com`; current results can differ. Start with one domain so the first run is easy to inspect.
2. Select a location, platform, and format. `2840` means United States. `google_search` with `all` formats requests Search creatives across available formats. Keep `depth` at 40 or less.
3. Review the [Pricing tab](https://apify.com/changeable_peddler/ppc-ad-creative-monitor/pricing) and set a run spending limit that allows one **$0.04 advertiser-snapshot event**. Each domain is billed separately. Live data requires a paid Apify plan; DataForSEO access is included.
4. Run the Actor. Check `metrics.creativeCount`, the format counts, and `highlights`. Open `items[].url` to inspect the creative in Google Ads Transparency when available. Some `previewUrl` fields are null; some provider preview links are script URLs, so use the creative's `url` or `preview_image.url` when appropriate.
5. Export JSON for complete creative records, or CSV for the domain-level summary. Record the messages, CTAs, and landing-page hypotheses yourself after reviewing the linked creatives. If you repeat the run next week, keep both datasets and compare them in your own sheet or reporting workflow.

Example input:

```json
{
  "targetDomains": ["forthepeople.com"],
  "locationCode": 2840,
  "platform": "google_search",
  "adFormat": "all",
  "depth": 40,
  "concurrency": 1
}
```

A [controlled run from 7 July 2026](../examples/live/ppc-ad-creative-monitor.json) returned 40 creatives for `forthepeople.com`: 39 text and one image. It returned one `activeAngles` entry, **“Morgan & Morgan, P.A.”**, which is the advertiser name, not extracted ad copy. The [short output excerpt](sample-outputs-and-case-studies.md#ppc-ad-creative-monitor) shows the actual shape. This historical demonstration is product proof, not a customer case or current ad inventory.

## Coverage and cost limits

The input accepts up to 50 domains and a depth of up to 40 creatives per domain. One domain costs one $0.04 report event, including when DataForSEO returns no matching creatives or an API error. An API error row means the provider could not return that target; it is not proof the advertiser has no ads. Report billing is reserved before the provider request.

The Actor's `activeAngles` field deduplicates provider titles, descriptions, or preview URLs. In observed runs, the title was the advertiser name, so this field did not supply usable copy themes. Creative previews require analyst review. First and last shown dates are provider observations, not guaranteed campaign start and end dates.
