import {svelte} from '@sveltejs/vite-plugin-svelte';
import {defineConfig} from 'vitest/config';

export default defineConfig({
	plugins: [svelte({hot: !process.env.VITEST})],
	test: {
		environment: 'jsdom',
		globals: true
	}
});
