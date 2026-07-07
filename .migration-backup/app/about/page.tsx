import type { Metadata } from 'next'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { JsonLd } from '@/components/layout/JsonLd'
import { FullBio } from '@/components/sections/about/FullBio'
import { EducationTimeline } from '@/components/sections/about/EducationTimeline'
import { CareerTimeline } from '@/components/sections/about/CareerTimeline'
import { ConferencesTable } from '@/components/sections/about/ConferencesTable'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { Divider } from '@/components/ui/Divider'
import { personalDetails } from '@/data/personal'
import { aboutMetadata } from '@/lib/metadata'
import { generateProfilePageSchema } from '@/lib/schema'

export const metadata: Metadata = aboutMetadata()

export default function AboutPage() {
  const schema = generateProfilePageSchema()

  return (
    <PageWrapper>
      <JsonLd data={schema} />
      <Breadcrumb items={[{ label: 'About', href: '/about' }]} />

      <SectionWrapper background="primary" ariaLabelledBy="about-heading">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto mb-6 aspect-square w-full max-w-sm overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-card lg:max-w-none">
              <PortraitImage
                variant="fill"
                priority
                sizes="(max-width: 1024px) 384px, 40vw"
              />
            </div>
            <p className="text-center text-sm text-text-muted lg:text-left">
              {personalDetails.title}, {personalDetails.department}
              <br />
              {personalDetails.institution}
            </p>
          </div>

          <div id="about-heading">
            <FullBio />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <EducationTimeline />
          <CareerTimeline />
        </div>
      </SectionWrapper>

      <SectionWrapper background="primary">
        <Divider className="mb-16" />
        <ConferencesTable />
      </SectionWrapper>
    </PageWrapper>
  )
}
