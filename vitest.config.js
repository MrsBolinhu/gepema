import {svelte} from '@sveltejs/vite-plugin-svelte';
import {defineConfig} from 'vitest/config';
import path from 'path';

export default defineConfig({
	plugins: [svelte({hot: !process.env.VITEST})],
	test: {
		environment: 'jsdom',
		globals: true
	},
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib')
		},
		conditions: ['browser', 'default']
	}
});
