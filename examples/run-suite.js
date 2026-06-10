import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ApifyClient } from 'apify-client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const token = process.env.APIFY_TOKEN;
if (!token) {
    throw new Error('Set APIFY_TOKEN before running this example.');
}

const client = new ApifyClient({ token });

const examples = [
    {
        actorId: 'changeable_peddler/keyword-roi-scorer',
        inputFile: 'keyword-roi-input.json',
    },
    {
        actorId: 'changeable_peddler/serp-content-brief-generator',
        inputFile: 'serp-content-brief-input.json',
    },
    {
        actorId: 'changeable_peddler/ai-serp-visibility-monitor',
        inputFile: 'ai-serp-visibility-input.json',
    },
    {
        actorId: 'changeable_peddler/ppc-ad-creative-monitor',
        inputFile: 'ppc-ad-creative-input.json',
    },
    {
        actorId: 'changeable_peddler/shopping-price-gap-finder',
        inputFile: 'shopping-price-gap-input.json',
    },
    {
        actorId: 'changeable_peddler/app-store-aso-opportunity-finder',
        inputFile: 'app-store-aso-input.json',
    },
    {
        actorId: 'changeable_peddler/local-review-complaint-miner',
        inputFile: 'local-review-complaint-input.json',
    },
];

for (const example of examples) {
    const inputPath = path.join(__dirname, example.inputFile);
    const input = JSON.parse(await readFile(inputPath, 'utf8'));
    console.log(`Running ${example.actorId} with ${example.inputFile}`);
    const run = await client.actor(example.actorId).call(input);
    const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 3 });
    console.log(JSON.stringify({
        actorId: example.actorId,
        status: run.status,
        datasetId: run.defaultDatasetId,
        sample: items.map((item) => ({
            status: item.status,
            score: item.score,
            summary: item.summary,
            recommendations: item.recommendations,
        })),
    }, null, 2));
}
