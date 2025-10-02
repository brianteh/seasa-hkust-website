import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'SEASA - Southeast Asian Student Association',
  description = 'Join the Southeast Asian Student Association (SEASA) to celebrate and share the rich cultures of Southeast Asia through various events and activities.',
  name = 'SEASA',
  type = 'website',
  image = '/seasa-logo.png', // Make sure to add your logo to the public folder
  url = window.location.href,
  keywords = 'SEASA, Southeast Asian Student Association, cultural organization, student club, Asian culture, university club'
}) => {
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
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
