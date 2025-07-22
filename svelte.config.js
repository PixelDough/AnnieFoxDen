import adapter from '@sveltejs/adapter-static';
// import adapter from 'svelte-adapter-nekoweb';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex'
import { createHighlighter } from 'shiki';

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
	preprocess: [vitePreprocess(), mdsvex({extensions: [".svx", ".md"]})],
	extensions: [".svelte", ".svx", ".md"],

	kit: {
		adapter: adapter({
			// apiKey: NEKOWEB_API_KEY,
			// cookie: NEKOWEB_COOKIE,
			folder: 'serve folder (default is "build")',
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
	},
};

export default config;
