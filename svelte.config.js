/** @type {import('@sveltejs/kit').Config} */
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'
import adapter from '@sveltejs/adapter-static';

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
		adapter: adapter()
	}
};

export default config;
