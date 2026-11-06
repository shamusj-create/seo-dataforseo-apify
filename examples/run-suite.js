import { readFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

// Limits are for the checked-in example inputs. Review the current Pricing tab.
const examples = [
    ["keyword-roi-scorer","keyword-roi-input.json",0.26],
    ["serp-content-brief-generator","serp-content-brief-input.json",0.06],
    ["ai-serp-visibility-monitor","ai-serp-visibility-input.json",0.04],
    ["llm-brand-mentions-monitor","llm-brand-mentions-input.json",0.71],
    ["backlink-gap-audit-report","backlink-gap-input.json",0.26],
    ["ppc-ad-creative-monitor","ppc-ad-creative-input.json",0.05],
    ["shopping-price-gap-finder","shopping-price-gap-input.json",0.09],
    ["app-store-aso-opportunity-finder","app-store-aso-input.json",0.045],
    ["local-review-complaint-miner","local-review-complaint-input.json",0.07],
];

export async function runExample(argv, {
    env = process.env,
    print = console.log,
    notice = console.error,
    createClient = async (token) => {
        const { ApifyClient } = await import('apify-client');
        return new ApifyClient({ token, maxRetries: 0 });
    },
} = {}) {
    const options = parseArgs(argv);
    if (!options.actor) {
        print(examples.map(([name]) => name).join('\n'));
        if (!options.list) notice('Choose one Actor with --actor. Use --preview to inspect it without starting a run.');
        return 0;
    }

    const example = examples.find(([name]) => name === options.actor);
    if (!example) throw new Error('Unknown Actor. Use --list to see available examples.');
    const [name, inputFile, exampleCap, needsSecContact = false] = example;
    const actorId = 'changeable_peddler/' + name;
    const maxTotalChargeUsd = options.maxUsd ?? exampleCap;
    if (options.preview) {
        print(JSON.stringify({
            actorId,
            inputFile: 'examples/' + inputFile,
            maxTotalChargeUsd,
            ...(needsSecContact ? { requires: 'SEC_CONTACT_EMAIL' } : {}),
            startsActor: false,
        }, null, 2));
        return 0;
    }

    const input = JSON.parse(await readFile(new URL(inputFile, import.meta.url), 'utf8'));
    if (needsSecContact) {
        const contact = env.SEC_CONTACT_EMAIL?.trim();
        const domain = contact?.split('@')[1]?.toLowerCase();
        if (!contact || /[^\x21-\x7e]/.test(contact) || !/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(contact)
            || /(?:^|\.)example\.(com|net|org)$/.test(domain) || /\.(invalid|test|example|localhost)$/.test(domain)) {
            throw new Error('Set SEC_CONTACT_EMAIL to a real address you are authorised to use for SEC fair-access requests.');
        }
        input.secContactEmail = contact;
    }
    const token = env.APIFY_TOKEN?.trim();
    if (!token) throw new Error('Set APIFY_TOKEN privately before starting the selected example.');

    const client = await createClient(token);
    let start;
    try {
        start = await client.actor(actorId).start(input, { maxTotalChargeUsd, restartOnError: false });
    } catch {
        throw new Error('Could not confirm the start. Check your Apify Runs before retrying.');
    }
    if (!start?.id) throw new Error('No run ID was returned. Check your Apify Runs before retrying.');
    notice('Started ' + actorId + ' as run ' + start.id + '.');
    try {
        const run = await client.run(start.id).waitForFinish({ waitSecs: 300 });
        if (run?.status !== 'SUCCEEDED') {
            notice('Run status: ' + (run?.status ?? 'unknown') + '. Inspect that run in Apify before retrying.');
            return 1;
        }
        const { items } = await client.dataset(run.defaultDatasetId).listItems({ limit: 3, clean: true });
        print(JSON.stringify({
            actorId,
            runId: start.id,
            status: run.status,
            datasetId: run.defaultDatasetId,
            sample: items.map((item) => ({
                status: item.status,
                score: item.score,
                summary: item.summary,
                recommendations: item.recommendations,
            })),
        }, null, 2));
        return 0;
    } catch {
        throw new Error('Could not read the completed run or dataset. Open run ' + start.id + ' in Apify before retrying.');
    }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    try {
        process.exitCode = await runExample(process.argv.slice(2));
    } catch (error) {
        console.error(error.message);
        process.exitCode = 1;
    }
}

function parseArgs(argv) {
    const options = { actor: null, list: false, preview: false, maxUsd: null };
    for (let i = 0; i < argv.length; i++) {
        const [flag, ...attached] = argv[i].split('=');
        if ((flag === '--list' || flag === '--preview') && !attached.length) {
            const key = flag.slice(2);
            if (options[key]) throw new Error('Use each option at most once.');
            options[key] = true;
            continue;
        }
        if (flag !== '--actor' && flag !== '--max-usd') throw new Error('Unknown option. Use --list or choose --actor with optional --preview and --max-usd.');
        const key = flag === '--actor' ? 'actor' : 'maxUsd';
        const value = attached.length ? attached.join('=') : argv[++i];
        if (options[key] !== null || !value || value.startsWith('--')) throw new Error('Supply exactly one value for each option.');
        if (key === 'maxUsd' && (!/^\d+(?:\.\d{1,6})?$/.test(value) || !Number.isFinite(Number(value)) || Number(value) <= 0)) {
            throw new Error('--max-usd must be a positive decimal USD amount.');
        }
        options[key] = key === 'maxUsd' ? Number(value) : value;
    }
    if (options.list && (options.actor || options.preview || options.maxUsd !== null)) throw new Error('Use --list by itself.');
    if (!options.actor && (options.preview || options.maxUsd !== null)) throw new Error('Choose one Actor with --actor.');
    return options;
}
