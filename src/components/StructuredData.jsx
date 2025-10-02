import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Helmet>
  );
};

export const OrganizationSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Southeast Asian Student Association (SEASA)",
    "alternateName": "SEASA HKUST",
    "url": "https://seasa.su.hkust.edu.hk",
    "logo": "https://seasa.su.hkust.edu.hk/src/assets/HeaderLogo.png",
    "sameAs": [
      "https://www.instagram.com/seasa_hkust/",
      "https://www.facebook.com/seasahkust/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "seasa@ust.hk",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hong Kong",
      "addressRegion": "Sai Kung",
      "streetAddress": "The Hong Kong University of Science and Technology, Clear Water Bay",
      "postalCode": "999077"
    }
  };

  return <StructuredData data={data} />;
};

export const WebPageSchema = ({ title, description, url, datePublished, dateModified }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "SEASA HKUST",
      "logo": {
        "@type": "ImageObject",
        "url": "https://seasa.su.hkust.edu.hk/src/assets/HeaderLogo.png"
      }
    }
  };

  if (datePublished) data.datePublished = datePublished;
  if (dateModified) data.dateModified = dateModified;

  return <StructuredData data={data} />;
};

export const EventSchema = ({
  name,
  startDate,
  endDate,
  location,
  description,
  image,
  price,
  url
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.streetAddress,
        "addressLocality": location.addressLocality,
        "addressRegion": location.addressRegion,
        "postalCode": location.postalCode,
        "addressCountry": location.addressCountry || "HK"
      }
    },
    "description": description,
    "image": image ? [image] : ["https://seasa.su.hkust.edu.hk/src/assets/HeaderLogo.png"],
    "offers": {
      "@type": "Offer",
      "url": url,
      "price": price || "0",
      "priceCurrency": "HKD",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    },
    "organizer": {
      "@type": "Organization",
      "name": "SEASA HKUST",
      "url": "https://seasa.su.hkust.edu.hk"
    }
  };

  return <StructuredData data={data} />;
};

export default StructuredData;
