import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
        // For example, instead of '_app', use 'app_', 'internal', etc.
        appDir: 'internal',
        adapter: adapter({
            fallback: '404.html',
        }),
        paths: {
            base: '/awesome-rum-manager-apm',
        },
        alias: {
            '@awesome': 'src'
        }
    }
}
export default config;
