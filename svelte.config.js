import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: {
			plugins: [
				autoprefixer
			]
		}
	}),
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	}
};

export default config;
