import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { AcademicContact } from '@/components/sections/contact/AcademicContact'
import { MmeContact } from '@/components/sections/contact/MmeContact'

export default function ContactPage() {
  return (
    <PageWrapper>
      <Breadcrumb items={[{ label: 'Contact', href: '/contact' }]} />
      <SectionWrapper background="primary" ariaLabelledBy="contact-heading">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="text-caption mb-3 text-accent-gold">Get in Touch</p>
          <h1
            id="contact-heading"
            className="text-heading-1 font-display mb-4 text-text-primary"
          >
            Two Doors, One Mathematician
          </h1>
          <p className="text-body-lg text-text-secondary">
            Research enquiries and teaching enquiries — each has its own door. Choose
            the one that fits your question.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AcademicContact />
          <MmeContact />
        </div>
      </SectionWrapper>
    </PageWrapper>
  )
}
