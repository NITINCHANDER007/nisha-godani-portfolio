import { MapPin, YoutubeLogo } from '@phosphor-icons/react/dist/ssr'
import { personalDetails } from '@/data/personal'
import { mmeDetails } from '@/data/mme'
import { Card } from '@/components/ui/Card'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'

export function MmeContact() {
  return (
    <Card accentColor="rose" className="h-full">
      <SectionEyebrow label="Make Maths Easy Classes" color="rose" />
      <h2 className="text-heading-3 font-display mb-2 text-text-primary">
        Class Enquiries &amp; Admissions
      </h2>
      <p className="mb-6 text-body text-text-secondary">
        For Make Maths Easy class enquiries, free demo bookings, and batch scheduling.
      </p>

      <div className="mb-5">
        <WhatsAppButton
          phone={mmeDetails.whatsapp}
          message={mmeDetails.whatsappMessage}
          label={`Chat on WhatsApp — ${mmeDetails.phone}`}
          className="w-full"
        />
      </div>

      <a
        href={mmeDetails.youtube.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent-gold"
        aria-label="Watch free lectures on YouTube (opens in new tab)"
      >
        <YoutubeLogo size={18} weight="fill" className="text-[#FF0000]" />
        Watch free lectures first @{mmeDetails.youtube.handle.replace('@', '')}
      </a>

      <div className="flex items-start gap-2 rounded-[var(--radius-base)] border border-border bg-bg-secondary px-4 py-3.5 text-sm text-text-secondary">
        <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent-rose" />
        <address className="not-italic">
          {personalDetails.contact.mme.address.line1}
          <br />
          {personalDetails.contact.mme.address.line2}
          <br />
          {personalDetails.contact.mme.address.line3},{' '}
          {personalDetails.contact.mme.address.city} –{' '}
          {personalDetails.contact.mme.address.pincode}
        </address>
      </div>

      <p className="mt-6 text-xs text-text-muted">
        No CV download. No forms. Contact directly.
      </p>
    </Card>
  )
}
