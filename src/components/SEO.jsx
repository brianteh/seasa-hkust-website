import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { SITE, DEFAULT_SEO } from '@/data/site.js'

const canonicalForCurrentPath = () => {
  if (typeof window === 'undefined') return `${SITE.baseUrl}/`

  const path = window.location.pathname.replace(/\/+$/, '')
  const normalizedPath = path === '/index.html' ? '' : path
  return `${SITE.baseUrl.replace(/\/$/, '')}${normalizedPath || '/'}`
}

const absoluteUrl = (value) => {
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE.baseUrl.replace(/\/$/, '')}${value.startsWith('/') ? value : `/${value}`}`
}

const SEO = ({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  name = SITE.name,
  type = 'website',
  image = SITE.ogImage,
  keywords = DEFAULT_SEO.keywords,
  locale = DEFAULT_SEO.locale,
  siteName = DEFAULT_SEO.siteName,
}) => {
  const canonicalUrl = canonicalForCurrentPath()
  const imageUrl = absoluteUrl(image)

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
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site" content="@seasa_hkust" />
      <meta name="twitter:creator" content="@seasa_hkust" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string,
  keywords: PropTypes.string,
  locale: PropTypes.string,
  siteName: PropTypes.string,
}

export default SEO
