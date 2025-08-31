import adapter from '@sveltejs/adapter-static';
// import adapter from 'svelte-adapter-nekoweb';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import { createHighlighter } from 'shiki';
import { join } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import { NEKOWEB_API_KEY, NEKOWEB_COOKIE } from '$env/static/private';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [relativeImages],
			layout: join(__dirname, './src/lib/mdsvex_layout/layout.svelte')
		})
	],
	extensions: ['.svelte', '.svx', '.md'],

	kit: {
		adapter: adapter({
			// apiKey: NEKOWEB_API_KEY,
			// cookie: NEKOWEB_COOKIE,
			folder: 'build',
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
