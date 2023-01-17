import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-static';
const dev = process.argv.includes('dev');

export default {
    // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
    // for more information about preprocessors
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true,
            paths: {
                base: dev ? '' : '/awesome-rum-manager-apm',
            },
            // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
            // For example, instead of '_app', use 'app_', 'internal', etc.
            appDir: 'internal',
        }),
        alias: {
            '@awesome': 'src'
        }
    }
}
