import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schemaType?: 'website' | 'organization' | 'service' | 'article';
}

export function SEOHead({
  title,
  description,
  keywords = 'NIXRIX, web design UK, SME websites, business websites, AI chatbot, KPI dashboard, website automation, SEO services, Leeds web design',
  ogImage = 'https://images.unsplash.com/photo-1758519291531-e96279895745?w=1200',
  canonicalUrl,
  schemaType = 'website',
}: SEOProps) {
  const location = useLocation();

  /**
   * IMPORTANT:
   * When you move to your custom domain, change this ONE line to:
   * const BASE_URL = 'https://nixrix.com';
   */
  const BASE_URL = 'https://amritha-gosh.github.io/nixrix-ltd';

  const fullUrl = canonicalUrl || `${BASE_URL}${location.pathname}`;

  useEffect(() => {
    /* ---------- Helpers ---------- */
    const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const upsertLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    /* ---------- Basic SEO ---------- */
    document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'author', 'NIXRIX');
    upsertMeta(
      'name',
      'robots',
      'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
    );
    upsertMeta('name', 'googlebot', 'index, follow');
    upsertMeta('name', 'viewport', 'width=device-width, initial-scale=1, maximum-scale=5');
    upsertMeta('name', 'theme-color', '#0D9488');

    upsertLink('canonical', fullUrl);

    /* ---------- Open Graph ---------- */
    upsertMeta('property', 'og:site_name', 'NIXRIX');
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', fullUrl);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:image:width', '1200');
    upsertMeta('property', 'og:image:height', '630');
    upsertMeta('property', 'og:locale', 'en_GB');

    /* ---------- Twitter ---------- */
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    /* ---------- Structured Data ---------- */
    const schemaData: any = {
      '@context': 'https://schema.org',
      '@type': schemaType === 'organization' ? 'Organization' : 'WebSite',
      name: 'NIXRIX',
      description,
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      email: 'hello@nixrix.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Leeds',
        addressCountry: 'GB',
      },
    };

    if (schemaType === 'service') {
      schemaData['@type'] = 'Service';
      schemaData.serviceType = 'Web Design and Digital Solutions';
      schemaData.provider = {
        '@type': 'Organization',
        name: 'NIXRIX',
      };
      schemaData.areaServed = 'GB';
    }

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);

  }, [title, description, keywords, ogImage, canonicalUrl, schemaType, location.pathname]);

  return null;
}
