import { SITE, type Locale } from '../data/site';

/** Ensure a path ends with a single trailing slash. */
export function ensureTrailingSlash(path: string): string {
  if (!path) return '/';
  if (path === '/' || path.endsWith('/')) return path;
  return `${path}/`;
}

/**
 * Absolute URL for a site-relative path. Does not force a trailing slash,
 * so it is safe for both page URLs and asset URLs such as social images.
 */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}

/** Home path for a given locale. */
export function homePath(locale: Locale): string {
  return locale === 'it' ? '/it/' : '/';
}

/**
 * Map a canonical path into the equivalent path for a locale.
 * English lives at the root, Italian under /it/.
 */
export function localizedPath(path: string, locale: Locale): string {
  const p = ensureTrailingSlash(path);
  const isItalian = p === '/it/' || p.startsWith('/it/');

  if (locale === 'it') {
    return isItalian ? p : `/it${p === '/' ? '/' : p}`;
  }

  // English
  if (isItalian) {
    const stripped = p.replace(/^\/it/, '');
    return ensureTrailingSlash(stripped === '' ? '/' : stripped);
  }
  return p;
}

export interface HreflangAlternate {
  lang: string;
  href: string;
}

/** Default EN + IT hreflang pairs for 1:1 translated pages. */
export function defaultHreflang(path: string): HreflangAlternate[] {
  return [
    { lang: 'en', href: absoluteUrl(localizedPath(path, 'en')) },
    { lang: 'it', href: absoluteUrl(localizedPath(path, 'it')) },
  ];
}
