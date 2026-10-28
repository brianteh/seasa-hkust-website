import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import { SITE } from '@/data/site.js'

const absoluteUrl = (value) => {
  if (!value) return `${SITE.baseUrl}${SITE.ogImage}`
  if (/^https?:\/\//i.test(value)) return value
  return `${SITE.baseUrl.replace(/\/$/, '')}${value.startsWith('/') ? value : `/${value}`}`
}

const HKUST_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'The Hong Kong University of Science and Technology, Clear Water Bay',
  addressLocality: 'Hong Kong',
  addressRegion: 'Sai Kung',
  postalCode: '999077',
  addressCountry: 'HK',
}

const ORGANIZATION = {
  '@type': 'Organization',
  name: SITE.fullName,
  alternateName: SITE.shortName,
  url: SITE.baseUrl,
}

const StructuredData = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
)

StructuredData.propTypes = {
  data: PropTypes.object.isRequired,
}

export const OrganizationSchema = () => {
  const data = {
    '@context': 'https://schema.org',
    ...ORGANIZATION,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.ogImage),
    sameAs: [SITE.socials.instagram, SITE.socials.facebook, SITE.socials.linkedin, SITE.socials.youtube],
    email: SITE.email,
    contactPoint: {
      '@type': 'ContactPoint',
      email: SITE.email,
      contactType: 'General enquiries',
      availableLanguage: ['English'],
    },
    address: HKUST_ADDRESS,
  }

  return <StructuredData data={data} />
}

export const WebPageSchema = ({ title, description, url, datePublished, dateModified }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: url || `${SITE.baseUrl}/`,
    inLanguage: 'en-HK',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.fullName,
      url: SITE.baseUrl,
    },
    publisher: {
      ...ORGANIZATION,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(SITE.logo),
      },
    },
  }

  if (datePublished) data.datePublished = datePublished
  if (dateModified) data.dateModified = dateModified

  return <StructuredData data={data} />
}

WebPageSchema.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
}

export const EventSchema = ({ name, startDate, endDate, location, description, image, price, url }) => {
  const place = typeof location === 'string' ? { name: location } : location
  const address = place.streetAddress
    ? {
        '@type': 'PostalAddress',
        streetAddress: place.streetAddress,
        addressLocality: place.addressLocality,
        addressRegion: place.addressRegion,
        postalCode: place.postalCode,
        addressCountry: place.addressCountry || 'HK',
      }
    : undefined

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name,
    startDate,
    endDate: endDate || startDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: place.name,
      ...(address ? { address } : {}),
    },
    description,
    image: [absoluteUrl(image)],
    organizer: {
      ...ORGANIZATION,
      logo: absoluteUrl(SITE.logo),
    },
  }

  if (url) data.url = url

  if (price) {
    data.offers = {
      '@type': 'Offer',
      ...(url ? { url } : {}),
      price,
      priceCurrency: 'HKD',
      availability: 'https://schema.org/InStock',
    }
  }

  return <StructuredData data={data} />
}

EventSchema.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  url: PropTypes.string,
}

export const EventListSchema = ({ name, events }) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: events.map((event, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Event',
        name: event.name,
        startDate: event.startDate,
        endDate: event.endDate,
        eventStatus: 'https://schema.org/EventCompleted',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        description: event.description,
        image: [absoluteUrl(event.image)],
        url: event.url || event.link,
        location: {
          '@type': 'Place',
          name: event.location,
          address: HKUST_ADDRESS,
        },
        organizer: {
          ...ORGANIZATION,
          logo: absoluteUrl(SITE.logo),
        },
      },
    })),
  }

  return <StructuredData data={data} />
}

EventListSchema.propTypes = {
  name: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default StructuredData
