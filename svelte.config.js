import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		alias: {
			$components: 'src/components'
		},
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/gepema' : ''
		}
	},
	preprocess: vitePreprocess()
};

export default config;
