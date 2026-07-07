import { SITE_URL } from '@/lib/constants'

/** Person schema for Dr. Nisha Godani */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Dr. Nisha Godani',
    honorificPrefix: 'Dr.',
    givenName: 'Nisha',
    familyName: 'Godani',
    jobTitle: 'Assistant Professor',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'Medi-Caps University',
      department: 'Department of Mathematics',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Indore',
        addressRegion: 'Madhya Pradesh',
        addressCountry: 'IN',
      },
    },
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Dayalbagh Educational Institute (Deemed University)',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Agra',
          addressRegion: 'Uttar Pradesh',
          addressCountry: 'IN',
        },
      },
    ],
    knowsAbout: [
      'Mathematics',
      'Wormhole Physics',
      'Modified Gravity',
      'General Relativity',
      'Gravitational Lensing',
      'Cosmology',
      'Spacetime Topology',
      'f(R) gravity',
      'f(R,T) gravity',
    ],
    sameAs: [
      'https://scholar.google.com/citations?user=PGvvWBMAAAAJ&hl=en',
      'https://www.researchgate.net/profile/Nisha-Godani',
      'https://www.linkedin.com/in/nisha-godani-895b483b/',
      'https://www.youtube.com/@mymath355',
    ],
    email: 'nishagodani.dei@gmail.com',
    image: `${SITE_URL}/images/portrait.jpg`,
    url: SITE_URL,
    description:
      'Assistant Professor of Mathematics at Medi-Caps University, Indore. PhD researcher in wormhole physics and modified gravity with 49+ international publications. NET AIR 40, GATE AIR 90. Founder of Make Maths Easy Classes.',
  }
}

/** LocalBusiness + EducationalOrganization schema for Make Maths Easy */
export function generateMMESchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    '@id': `${SITE_URL}/make-maths-easy#business`,
    name: 'Make Maths Easy Classes',
    founder: {
      '@type': 'Person',
      name: 'Dr. Nisha Godani',
      '@id': `${SITE_URL}/#person`,
    },
    telephone: '+919039006536',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'S-80 Singapore NX, Street No. 3, Near Police Upchowki, Lasudia Mori, Talawali Chanda, Dewas Naka',
      addressLocality: 'Indore',
      postalCode: '453771',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN',
    },
    url: `${SITE_URL}/make-maths-easy`,
    description:
      'Mathematics coaching classes by Dr. Nisha Godani (PhD, NET AIR 40, GATE AIR 90) covering 9th grade through competitive examinations. Online and offline classes available in Indore.',
    hasMap: 'https://maps.google.com/?q=Dewas+Naka,Indore,Madhya+Pradesh',
  }
}

/** BreadcrumbList schema */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/** ProfilePage schema for About page */
export function generateProfilePageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@id': `${SITE_URL}/#person`,
    },
    url: `${SITE_URL}/about`,
    name: 'About Dr. Nisha Godani',
    description: 'Full academic biography and career profile of Dr. Nisha Godani.',
  }
}

/** ScholarlyArticle schema for publications page */
export function generatePublicationsPageSchema(publications: Array<{
  title: string
  authors: Array<{ name: string }>
  journal: string
  year: number
  doi?: string
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Publications — Dr. Nisha Godani',
    description: 'Complete list of 52 academic publications by Dr. Nisha Godani in SCI-indexed international journals.',
    url: `${SITE_URL}/publications`,
    hasPart: publications.slice(0, 10).map((pub) => ({
      '@type': 'ScholarlyArticle',
      name: pub.title,
      author: pub.authors.map((a) => ({ '@type': 'Person', name: a.name })),
      isPartOf: { '@type': 'Periodical', name: pub.journal },
      datePublished: pub.year.toString(),
      ...(pub.doi && {
        identifier: {
          '@type': 'PropertyValue',
          propertyID: 'DOI',
          value: pub.doi,
        },
      }),
    })),
  }
}
