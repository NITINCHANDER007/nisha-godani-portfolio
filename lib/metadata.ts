import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/constants'
import { defaultSeoMetadata } from '@/data/navigation'

function buildTitle(pageTitle: string): string {
  return `${pageTitle} | Dr. Nisha Godani`
}

function buildOgImage(path?: string) {
  return [
    {
      url: `${SITE_URL}${path ?? '/images/og-image.jpg'}`,
      width: 1200,
      height: 630,
      alt: 'Dr. Nisha Godani — Mathematician, Researcher, Educator',
    },
  ]
}

export function homeMetadata(): Metadata {
  return {
    title: defaultSeoMetadata.title,
    description: defaultSeoMetadata.description,
    keywords: defaultSeoMetadata.keywords,
    openGraph: {
      title: defaultSeoMetadata.title,
      description: defaultSeoMetadata.description,
      url: SITE_URL,
      siteName: defaultSeoMetadata.siteName,
      images: buildOgImage(),
      type: 'profile',
      firstName: 'Nisha',
      lastName: 'Godani',
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultSeoMetadata.title,
      description: defaultSeoMetadata.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
    alternates: { canonical: SITE_URL },
    robots: { index: true, follow: true },
  }
}

export function researchMetadata(): Metadata {
  const title = buildTitle('Research — Wormhole Physics & Modified Gravity')
  const description =
    'Explore Dr. Nisha Godani\'s research in wormhole physics, modified gravity (f(R), f(R,T), f(Q,T)), gravitational lensing, and cosmology. 49 SCI-indexed publications with 1,453+ citations.'
  return {
    title,
    description,
    keywords: [
      'wormhole physics research India',
      'modified gravity f(R) research',
      'gravitational lensing wormholes',
      'non-local gravity wormholes',
      'Nisha Godani wormhole',
      'f(R,T) gravity wormhole solutions',
    ],
    openGraph: { title, description, url: `${SITE_URL}/research`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/research` },
  }
}

export function publicationsMetadata(): Metadata {
  const title = buildTitle('Publications — 49 International Papers')
  const description =
    'Complete publication archive of Dr. Nisha Godani — 49 journal papers and 3 conference papers in SCI-indexed journals including Physics Letters B, Annals of Physics, and European Physical Journal. 1,453+ citations.'
  return {
    title,
    description,
    keywords: [
      'Nisha Godani publications',
      'Physics Letters B wormholes',
      'SCI journal papers mathematics India',
      'wormhole publications list',
    ],
    openGraph: { title, description, url: `${SITE_URL}/publications`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/publications` },
  }
}

export function awardsMetadata(): Metadata {
  const title = buildTitle('Awards & Recognition')
  const description =
    'Dr. Nisha Godani — Top 2% Scientist globally (Stanford University Ranking), NET All India Rank 40, GATE AIR 90, 10 institutional awards for teaching excellence and research from GLA University.'
  return {
    title,
    description,
    keywords: [
      'Nisha Godani awards',
      'top 2 percent scientist Stanford',
      'NET rank 40 mathematics',
      'GATE rank 90 mathematics',
      'Chancellor Award GLA University',
    ],
    openGraph: { title, description, url: `${SITE_URL}/awards`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/awards` },
  }
}

export function teachingMetadata(): Metadata {
  const title = buildTitle('Teaching — University & Make Maths Easy')
  const description =
    'Dr. Nisha Godani\'s teaching profile — Assistant Professor at Medi-Caps University, previously at GLA University (6.5 years, Chancellor Award winner). Subjects: Engineering Mathematics, Number Theory, Statistics, and more.'
  return {
    title,
    description,
    keywords: [
      'Nisha Godani teaching',
      'mathematics professor Indore',
      'engineering mathematics teaching',
      'Chancellor Award teacher GLA University',
    ],
    openGraph: { title, description, url: `${SITE_URL}/teaching`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/teaching` },
  }
}

export function mmeMetadata(): Metadata {
  const title = 'Make Maths Easy Classes — Indore | Dr. Nisha Godani'
  const description =
    'Mathematics coaching classes by Dr. Nisha Godani (PhD, NET AIR 40, GATE AIR 90). Classes for 9th–12th, B.Tech, MBA, competitive exams. Online and offline in Indore. Free demo class available.'
  return {
    title,
    description,
    keywords: [
      'Make Maths Easy Classes Indore',
      'maths coaching Indore PhD',
      'GATE maths coaching Indore',
      'NET maths tutor Indore',
      'online maths classes Indore',
      'maths tutor 9th 10th Indore',
      'engineering maths coaching Indore',
      'competitive exam maths Indore',
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/make-maths-easy`,
      images: buildOgImage(),
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/make-maths-easy` },
  }
}

export function aboutMetadata(): Metadata {
  const title = buildTitle('About — Biography & Career')
  const description =
    'Full academic biography of Dr. Nisha Godani — her journey from DEI Agra to international research collaborations with scientists in Italy, Spain, and Japan, and her commitment to accessible mathematics education.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/about`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/about` },
  }
}

export function contactMetadata(): Metadata {
  const title = buildTitle('Contact')
  const description =
    'Contact Dr. Nisha Godani for research collaborations, academic enquiries, or Make Maths Easy class bookings. WhatsApp: +91 9039006536. Email: nishagodani.dei@gmail.com.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/contact`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/contact` },
    robots: { index: true, follow: true },
  }
}
