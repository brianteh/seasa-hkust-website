// Central source of truth for site-wide constants (brand, URLs, contact, socials).
// Update these once and every component stays in sync.

import * as images from '@/assets/images.js'

export const SITE = {
  name: 'SEASA',
  fullName: 'Southeast Asian Student Association (SEASA) @ HKUST',
  shortName: 'SEASA HKUST',
  baseUrl: 'https://seasa.su.hkust.edu.hk',
  logo: images.headerLogo,
  ogImage: '/og-image.jpg',
  email: 'su_seasa@connect.ust.hk',
  socials: {
    instagram: 'https://www.instagram.com/seasa_hkustsu',
    facebook: 'https://www.facebook.com/seasahkust/',
    linkedin: 'https://www.linkedin.com/company/hkust-southeast-asian-students-association/',
    youtube: 'https://www.youtube.com/@seasahkustsu5388',
  },
}

export const DEFAULT_SEO = {
  title: 'SEASA - Southeast Asian Student Association',
  description:
    'Join the Southeast Asian Student Association (SEASA) to celebrate and share the rich cultures of Southeast Asia through various events and activities.',
  keywords:
    'SEASA, Southeast Asian Student Association, cultural organization, student club, Asian culture, university club, HKUST, student organization',
  locale: 'en_HK',
  siteName: 'SEASA @ HKUST | South East Asian Student Association in HKUST',
}
