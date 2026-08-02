import type { Language } from '../types';

type SeoPage = Readonly<{
  title: string;
  description: string;
  path: string;
  language: Language;
  noindex?: boolean;
  type?: 'website' | 'article';
  imagePath?: string;
  jsonLd?: unknown;
}>;

const siteUrl = (import.meta.env.VITE_SITE_URL ?? '').replace(/\/$/, '');

function absoluteUrl(path: string): string {
  return siteUrl ? `${siteUrl}${path.startsWith('/') ? path : `/${path}`}` : path;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string): void {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

function removeLink(rel: string): void {
  document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)?.remove();
}

function localizedPath(path: string, language: Language): string {
  const hasTrailingSlash = path.endsWith('/');
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'ar') {
    segments[0] = language;
  } else {
    segments.unshift(language);
  }
  return `/${segments.join('/')}${hasTrailingSlash ? '/' : ''}`;
}

function upsertAlternateLink(language: string, href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${language}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = 'alternate';
    element.hreflang = language;
    document.head.appendChild(element);
  }
  element.href = href;
}

function removeAlternateLinks(): void {
  document.head.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]').forEach((element) => element.remove());
}

export function updateSeoMetadata(page: SeoPage): void {
  if (typeof document === 'undefined') return;

  const imageUrl = absoluteUrl(page.imagePath ?? '/og-image.png');
  document.title = page.title;
  document.documentElement.lang = page.language;
  upsertMeta('name', 'description', page.description);
  upsertMeta('name', 'robots', page.noindex ? 'noindex, nofollow' : 'index, follow');
  upsertMeta('property', 'og:title', page.title);
  upsertMeta('property', 'og:description', page.description);
  upsertMeta('property', 'og:type', page.type ?? 'website');
  upsertMeta('property', 'og:image', imageUrl);
  upsertMeta('property', 'og:image:type', 'image/png');
  upsertMeta('property', 'og:image:width', '1200');
  upsertMeta('property', 'og:image:height', '630');
  upsertMeta('property', 'og:image:alt', page.title);
  upsertMeta('property', 'og:locale', page.language === 'ar' ? 'ar_EG' : 'en_US');
  upsertMeta('name', 'twitter:card', 'summary_large_image');
  upsertMeta('name', 'twitter:title', page.title);
  upsertMeta('name', 'twitter:description', page.description);
  upsertMeta('name', 'twitter:image', imageUrl);
  upsertMeta('name', 'twitter:image:alt', page.title);

  if (siteUrl) {
    const canonicalUrl = absoluteUrl(page.path);
    upsertLink('canonical', canonicalUrl);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertAlternateLink('en', absoluteUrl(localizedPath(page.path, 'en')));
    upsertAlternateLink('ar', absoluteUrl(localizedPath(page.path, 'ar')));
    upsertAlternateLink('x-default', absoluteUrl(localizedPath(page.path, 'en')));
  } else {
    upsertLink('canonical', page.path);
    upsertMeta('property', 'og:url', page.path);
    removeAlternateLinks();
  }

  const existingJsonLd = document.head.querySelector<HTMLScriptElement>('#dev-stage-jsonld');
  if (page.jsonLd) {
    const script = existingJsonLd ?? document.createElement('script');
    script.id = 'dev-stage-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(page.jsonLd);
    if (!existingJsonLd) document.head.appendChild(script);
  } else {
    existingJsonLd?.remove();
  }
}

export function getSiteUrl(): string {
  return siteUrl;
}

export function toAbsoluteUrl(path: string): string {
  return absoluteUrl(path);
}
