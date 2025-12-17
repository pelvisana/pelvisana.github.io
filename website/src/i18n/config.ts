export const SUPPORTED_LANGS = ['en', 'es', 'ca'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const FALLBACK_LANG: Lang = 'en';

export function isLang(value: string): value is Lang {
	return (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export function normalizeLocale(input: string | undefined | null): Lang | null {
	if (!input) return null;
	const base = input.trim().toLowerCase().split(/[-_]/)[0] ?? '';
	return isLang(base) ? base : null;
}
