/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
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
				surface: {
					DEFAULT: '#ffffff',
					2: '#f8fafc',
					3: '#f1f5f9',
					dark: '#0b1220',
					'dark-2': '#0f172a',
					'dark-3': '#111c33',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
