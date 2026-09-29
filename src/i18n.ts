import * as fr from './content.fr';
import * as en from './content.en';

export type Content = typeof fr;
export type Lang = 'fr' | 'en';

// French is the default language (served at /). English lives at /en/.
// The annotation makes TypeScript check that the English file has the same shape.
const english: Content = en;

export const defaultLang: Lang = 'fr';

export const alternates: { lang: Lang; href: string }[] = [
  { lang: 'fr', href: 'https://bptechlabs.com/' },
  { lang: 'en', href: 'https://bptechlabs.com/en/' },
];

export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'fr';
}

export function getContent(url: URL): Content {
  return getLang(url) === 'en' ? english : fr;
}
