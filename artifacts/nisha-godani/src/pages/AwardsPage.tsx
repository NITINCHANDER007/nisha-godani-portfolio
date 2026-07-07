import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { StanfordBadge } from '@/components/sections/awards/StanfordBadge'
import { CredentialTrio } from '@/components/sections/awards/CredentialTrio'
import { DirectorMedal } from '@/components/sections/awards/DirectorMedal'
import { AwardsTimeline } from '@/components/sections/awards/AwardsTimeline'

export default function AwardsPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: 'Awards & Recognition', href: '/awards' }]} />
      <SectionWrapper background="primary" ariaLabelledBy="awards-page-heading">
        <div className="mb-12 text-center">
          <p className="text-caption mb-3 text-accent-gold">Recognition &amp; Honours</p>
          <h1
            id="awards-page-heading"
            className="text-heading-1 font-display mx-auto max-w-3xl text-text-primary"
          >
            Excellence, Recognized — Across Research and Teaching
          </h1>
        </div>

        <StanfordBadge />
        <CredentialTrio />

        <div className="mb-16">
          <DirectorMedal />
        </div>

        <AwardsTimeline />
      </SectionWrapper>
    </PageWrapper>
  )
}
