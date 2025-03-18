import React from 'react';
import { Helmet } from 'react-helmet';

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
  ogImage = '/images/og-image.svg', // Default OG image in public/images directory
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = 'AI tools, artificial intelligence, machine learning, AI guide, AI resources',
  noIndex = false,
  schemaType = 'WebPage',
  datePublished,
  dateModified,
  articleTags = [],
  faqItems = []
}) => {
  // Construct the full title with site name
  const fullTitle = `${title} | Nestor AI`;
  
  // Get the current URL
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  // Use provided canonical URL or current URL
  const canonical = canonicalUrl || currentUrl;

  // Build JSON-LD structured data based on schema type
  const buildJsonLd = () => {
    const baseSchema: SchemaBase = {
      '@context': 'https://schema.org',
      '@type': schemaType,
      name: fullTitle,
      description: description,
      url: canonical,
    };

    if (ogImage) {
      baseSchema.image = ogImage;
    }

    // Add specific properties based on schema type
    switch (schemaType) {
      case 'Article':
        return {
          ...baseSchema,
          headline: title,
          author: {
            '@type': 'Organization',
            name: 'Nestor AI'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Nestor AI',
            logo: {
              '@type': 'ImageObject',
              url: '/images/logo.svg'
            }
          },
          datePublished: datePublished || new Date().toISOString(),
          dateModified: dateModified || new Date().toISOString(),
          keywords: articleTags.join(', ')
        };
      
      case 'FAQPage':
        return {
          ...baseSchema,
          mainEntity: faqItems.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer
            }
          }))
        };
      
      default:
        return baseSchema;
    }
  };

  const jsonLd = buildJsonLd();

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Nestor AI" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Robots Meta Tag */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Nestor AI" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
