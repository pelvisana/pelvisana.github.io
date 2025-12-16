import { FALLBACK_LANG, normalizeLocale, SUPPORTED_LANGS, type Lang } from './config';

export function getStaticLangPaths() {
	return SUPPORTED_LANGS.map((lang) => ({ params: { lang } }));
}

export function detectBrowserLang(): Lang {
	if (typeof navigator === 'undefined') return FALLBACK_LANG;
	const candidates = [...(navigator.languages ?? []), navigator.language].filter(Boolean) as string[];
	for (const candidate of candidates) {
		const normalized = normalizeLocale(candidate);
		if (normalized) return normalized;
	}
	return FALLBACK_LANG;
}

export function stripLangPrefix(pathname: string): string {
	return pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
}
