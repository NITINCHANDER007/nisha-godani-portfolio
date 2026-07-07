import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { GalleryGrid } from '@/components/sections/gallery/GalleryGrid'
import { personalDetails } from '@/data/personal'
import { awards } from '@/data/awards'
import { conferenceEvents } from '@/data/teaching'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Gallery | Dr. Nisha Godani',
  description:
    "Visual moments from Dr. Nisha Godani's academic and teaching journey — conference presentations, classroom excellence, and Make Maths Easy Classes.",
  alternates: { canonical: `${SITE_URL}/gallery` },
  openGraph: {
    title: 'Gallery | Dr. Nisha Godani',
    description: "Academic and teaching journey in images.",
    url: `${SITE_URL}/gallery`,
    images: [{ url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630 }],
  },
}

const presented = conferenceEvents.filter((e) => e.type === 'presented').length
const totalEvents = conferenceEvents.length

export default function GalleryPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: 'Gallery', href: '/gallery' }]} />

      <SectionWrapper background="primary" ariaLabelledBy="gallery-page-heading">
        <div className="mb-12">
          <p className="text-caption mb-3 text-accent-gold">Moments &amp; Milestones</p>
          <h1 id="gallery-page-heading" className="text-heading-1 font-display mb-4 text-text-primary">
            A Career in Snapshots
          </h1>
          <p className="max-w-2xl text-body-lg text-text-secondary">
            From a PhD at Dayalbagh Educational Institute to research presented at IIT Indore
            and NIT Jamshedpur, to making mathematics accessible for students across Indore.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-card">
            <PortraitImage
              variant="fill"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-sm font-medium text-white">{personalDetails.displayName}</p>
              <p className="text-xs text-white/70">
                {personalDetails.title} · {personalDetails.institution}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {[
              {
                label: 'Top 2% Scientist',
                value: 'Stanford University\nCitation Impact Ranking · 3 Years',
                color: 'bg-accent-gold text-bg-dark',
              },
              {
                label: `${awards.length} Institutional Awards`,
                value: 'GLA University\n2018 – 2022',
                color: 'bg-accent-gold-subtle text-accent-gold border border-accent-gold/30',
              },
              {
                label: `${presented} Conference Presentations`,
                value: 'From DEI Agra to IIT Indore\nNIT Jamshedpur & beyond',
                color: 'bg-accent-teal-subtle text-accent-teal border border-accent-teal/30',
              },
              {
                label: `${totalEvents} Total Academic Events`,
                value: 'Seminars, workshops, and conferences\nattended across India',
                color: 'bg-accent-rose-subtle text-accent-rose border border-accent-rose/30',
              },
            ].map((tile) => (
              <div key={tile.label} className={`rounded-[var(--radius-md)] p-6 ${tile.color}`}>
                <p className="mb-1 text-lg font-bold">{tile.label}</p>
                <p className="whitespace-pre-line text-sm opacity-80">{tile.value}</p>
              </div>
            ))}
          </div>
        </div>

        <GalleryGrid />
      </SectionWrapper>
    </PageWrapper>
  )
}
