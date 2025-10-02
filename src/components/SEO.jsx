import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'SEASA - Southeast Asian Student Association',
  description = 'Join the Southeast Asian Student Association (SEASA) to celebrate and share the rich cultures of Southeast Asia through various events and activities.',
  name = 'SEASA',
  type = 'website',
  image = '/src/assets/HeaderLogo.png',
  url = typeof window !== 'undefined' ? window.location.href : 'https://seasa.su.hkust.edu.hk',
  keywords = 'SEASA, Southeast Asian Student Association, cultural organization, student club, Asian culture, university club, HKUST, student organization',
  locale = 'en_HK',
  siteName = 'SEASA @ HKUST | South East Asian Student Association in HKUST'
}) => {
  // Ensure image URL is absolute
  const imageUrl = image.startsWith('http') ? image : `https://seasa.su.hkust.edu.hk${image}`;
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@seasa_hkust" />
      <meta name="twitter:creator" content="@seasa_hkust" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#1a237e" />
      <link rel="apple-touch-icon" href="/src/assets/HeaderLogo.png" />
      <link rel="icon" type="image/png" href="/src/assets/HeaderLogo.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured data for organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Southeast Asian Student Association (SEASA) @ HKUST",
          "url": "https://seasa.su.hkust.edu.hk",
          "logo": "https://seasa.su.hkust.edu.hk/src/assets/HeaderLogo.png",
          "sameAs": [
            "https://www.instagram.com/seasa_hkust/",
            "https://www.facebook.com/seasahkust/"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
