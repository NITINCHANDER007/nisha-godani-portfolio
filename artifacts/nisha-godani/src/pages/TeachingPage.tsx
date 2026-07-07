import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { TeachingPhilosophy } from '@/components/sections/teaching/TeachingPhilosophy'
import { EmployerCards } from '@/components/sections/teaching/EmployerCards'
import { SubjectGrid } from '@/components/sections/teaching/SubjectGrid'
import { InvitedTalks } from '@/components/sections/teaching/InvitedTalks'
import { WorkshopsOrganized } from '@/components/sections/teaching/WorkshopsOrganized'
import { Button } from '@/components/ui/Button'

export default function TeachingPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: 'Teaching', href: '/teaching' }]} />

      <SectionWrapper background="dark" ariaLabelledBy="teaching-heading">
        <div className="mb-6 text-center">
          <p className="text-caption mb-3 text-accent-teal">Academia</p>
          <h1
            id="teaching-heading"
            className="text-heading-1 font-display mx-auto max-w-3xl text-text-inverse"
          >
            Award-Winning University Educator
          </h1>
        </div>
        <TeachingPhilosophy />
      </SectionWrapper>

      <SectionWrapper background="primary">
        <EmployerCards />
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <SubjectGrid />
      </SectionWrapper>

      <SectionWrapper background="primary">
        <InvitedTalks />
      </SectionWrapper>

      <SectionWrapper background="secondary">
        <WorkshopsOrganized />
      </SectionWrapper>

      <SectionWrapper background="dark" className="text-center">
        <h2 className="text-heading-2 font-display mb-4 text-text-inverse">
          Want to Learn From Dr. Godani Directly?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-body text-text-inverse/70">
          Make Maths Easy Classes brings the same teaching excellence to school,
          undergraduate, postgraduate, and competitive exam students.
        </p>
        <Button href="/make-maths-easy" variant="primary">
          Explore Make Maths Easy →
        </Button>
      </SectionWrapper>
    </PageWrapper>
  )
}
