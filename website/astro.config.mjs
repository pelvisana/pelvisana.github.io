// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://pelvisana.github.io',
	output: 'static',
	trailingSlash: 'always',
	integrations: [
		tailwind(),
		mdx(),
		sitemap({
			filter: (page) => !['/', '/privacy/', '/terms/', '/support/', '/404.html'].includes(page),
		}),
	],
	vite: {
		css: {
			devSourcemap: true,
		},
	},
});
