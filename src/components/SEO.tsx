import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string;
  noIndex?: boolean;
  schemaType?: 'WebPage' | 'Article' | 'FAQPage' | 'Product';
  datePublished?: string;
  dateModified?: string;
  articleTags?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
}

interface SchemaBase {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'AI Tools Guide',
  description = 'Discover the best AI tools and resources for various categories including marketing, video, audio, agents, and more.',
  canonicalUrl,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = 'AI tools, artificial intelligence, machine learning, AI resources, AI guide',
  noIndex = false,
  schemaType = 'WebPage',
  datePublished,
  dateModified,
  articleTags,
  faqItems,
}) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Function to create or update a meta tag
    const setMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Function to create or update a property meta tag (like og:title)
    const setPropertyMetaTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Set basic meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    if (noIndex) setMetaTag('robots', 'noindex, nofollow');

    // Set Open Graph meta tags
    setPropertyMetaTag('og:title', title);
    setPropertyMetaTag('og:description', description);
    setPropertyMetaTag('og:type', ogType);
    if (ogImage) setPropertyMetaTag('og:image', ogImage);
    if (canonicalUrl) setPropertyMetaTag('og:url', canonicalUrl);

    // Set Twitter Card meta tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if (ogImage) setMetaTag('twitter:image', ogImage);

    // Set canonical URL if provided
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalUrl) {
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }
      canonicalElement.href = canonicalUrl;
    } else if (canonicalElement) {
      canonicalElement.remove();
    }

    // Create schema.org JSON-LD
    let schema: SchemaBase | any = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: title,
      description: description,
      url: canonicalUrl || window.location.href,
    };

    if (ogImage) {
      schema.image = ogImage;
    }

    // Add additional schema properties based on schemaType
    if (schemaType === 'Article' && datePublished) {
      schema.datePublished = datePublished;
      if (dateModified) {
        schema.dateModified = dateModified;
      }
      if (articleTags && articleTags.length > 0) {
        schema.keywords = articleTags.join(',');
      }
    } else if (schemaType === 'FAQPage' && faqItems && faqItems.length > 0) {
      schema.mainEntity = faqItems.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }));
    }

    // Add or update the JSON-LD script
    let scriptElement = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(schema);

    // Cleanup function to remove script when component unmounts
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [
    title,
    description,
    canonicalUrl,
    ogImage,
    ogType,
    twitterCard,
    keywords,
    noIndex,
    schemaType,
    datePublished,
    dateModified,
    articleTags,
    faqItems
  ]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
