import type { Locale } from '../data/site';

export function formatDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
