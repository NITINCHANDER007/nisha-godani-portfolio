import { EnvelopeSimple, Copy } from '@phosphor-icons/react/dist/ssr'
import { personalDetails } from '@/data/personal'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { Card } from '@/components/ui/Card'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'

export function AcademicContact() {
  return (
    <Card accentColor="teal" className="h-full">
      <SectionEyebrow label="Academic &amp; Research" color="teal" />
      <h2 className="text-heading-3 font-display mb-2 text-text-primary">
        Research Collaborations &amp; Academic Enquiries
      </h2>
      <p className="mb-6 text-body text-text-secondary">
        For research collaborations, academic enquiries, peer review, or professional
        matters.
      </p>

      <div className="mb-6 flex items-center gap-3 rounded-[var(--radius-base)] border border-border bg-bg-secondary px-4 py-3.5">
        <EnvelopeSimple size={18} className="flex-shrink-0 text-accent-teal" />
        <a
          href={`mailto:${personalDetails.contact.academic.email}`}
          className="flex-1 truncate text-sm text-text-primary hover:text-accent-gold"
        >
          {personalDetails.contact.academic.email}
        </a>
        <Copy size={16} className="flex-shrink-0 text-text-muted" aria-hidden="true" />
      </div>

      <div className="mb-6 space-y-1 text-sm text-text-secondary">
        <p className="font-semibold text-text-primary">{personalDetails.institution}</p>
        <p>{personalDetails.contact.academic.department}</p>
        <p>{personalDetails.contact.academic.city}, {personalDetails.contact.academic.state}</p>
      </div>

      <p className="text-caption mb-3 text-text-muted">Research Profiles</p>
      <div className="flex flex-wrap gap-3">
        {personalDetails.socialProfiles
          .filter((p) => p.platform !== 'youtube')
          .map((profile) => (
            <SocialIcon key={profile.platform} profile={profile} />
          ))}
      </div>
    </Card>
  )
}
