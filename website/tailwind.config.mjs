/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				ink: {
					50: '#f5f7ff',
					100: '#eef1ff',
					200: '#dbe1ff',
					300: '#bcc8ff',
					400: '#8ea0ff',
					500: '#5f73ff',
					600: '#3e4df5',
					700: '#2f3ad1',
					800: '#262fa7',
					900: '#232c85',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

