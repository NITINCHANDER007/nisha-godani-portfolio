// Metadata helpers — types stripped of next dependency for Vite compatibility
// These functions are kept for schema/SEO utility references in components.
import { SITE_URL } from '@/lib/constants'
import { defaultSeoMetadata } from '@/data/navigation'

type SeoMetadata = {
  title: string
  description: string
  keywords?: string[]
  openGraph?: Record<string, unknown>
  twitter?: Record<string, unknown>
  alternates?: Record<string, unknown>
  robots?: Record<string, unknown>
}

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

export function homeMetadata(): SeoMetadata {
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
    },
    twitter: {
      card: 'summary_large_image',
      title: defaultSeoMetadata.title,
      description: defaultSeoMetadata.description,
    },
    alternates: { canonical: SITE_URL },
    robots: { index: true, follow: true },
  }
}

export function researchMetadata(): SeoMetadata {
  const title = buildTitle('Research — Wormhole Physics & Modified Gravity')
  const description =
    "Explore Dr. Nisha Godani's research in wormhole physics, modified gravity, gravitational lensing, and cosmology."
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/research`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/research` },
  }
}

export function publicationsMetadata(): SeoMetadata {
  const title = buildTitle('Publications — 49 International Papers')
  const description =
    'Complete publication archive of Dr. Nisha Godani — 49 journal papers and 3 conference papers.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/publications`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/publications` },
  }
}

export function awardsMetadata(): SeoMetadata {
  const title = buildTitle('Awards & Recognition')
  const description =
    'Dr. Nisha Godani — Top 2% Scientist globally (Stanford University Ranking), NET All India Rank 40, GATE AIR 90.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/awards`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/awards` },
  }
}

export function teachingMetadata(): SeoMetadata {
  const title = buildTitle('Teaching — University & Make Maths Easy')
  const description =
    "Dr. Nisha Godani's teaching profile — Assistant Professor at Medi-Caps University."
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/teaching`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/teaching` },
  }
}

export function mmeMetadata(): SeoMetadata {
  const title = 'Make Maths Easy Classes — Indore | Dr. Nisha Godani'
  const description =
    'Mathematics coaching classes by Dr. Nisha Godani. Classes for 9th–12th, B.Tech, MBA, competitive exams. Online and offline in Indore.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/make-maths-easy`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/make-maths-easy` },
  }
}

export function aboutMetadata(): SeoMetadata {
  const title = buildTitle('About — Biography & Career')
  const description =
    "Full academic biography of Dr. Nisha Godani — her journey from DEI Agra to international research collaborations."
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/about`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/about` },
  }
}

export function contactMetadata(): SeoMetadata {
  const title = buildTitle('Contact')
  const description =
    'Contact Dr. Nisha Godani for research collaborations, academic enquiries, or Make Maths Easy class bookings.'
  return {
    title,
    description,
    openGraph: { title, description, url: `${SITE_URL}/contact`, images: buildOgImage() },
    twitter: { card: 'summary_large_image', title, description },
    alternates: { canonical: `${SITE_URL}/contact` },
    robots: { index: true, follow: true },
  }
}
