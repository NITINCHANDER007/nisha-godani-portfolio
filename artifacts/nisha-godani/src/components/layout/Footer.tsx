import { Link } from 'wouter'
import {
  GraduationCap,
  WhatsappLogo,
  MapPin,
  EnvelopeSimple,
} from '@phosphor-icons/react/dist/ssr'
import { personalDetails } from '@/data/personal'
import { mmeDetails } from '@/data/mme'
import { navigationItems } from '@/data/navigation'
import { Divider } from '@/components/ui/Divider'
import { buildWhatsAppUrl } from '@/lib/utils'
import { SocialIcon } from '@/components/ui/SocialIcon'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-bg-dark">
      <div className="container-wide section-padding !py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Academic Column */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-accent-teal">
              <GraduationCap size={20} weight="bold" />
              <span className="text-caption">Academic</span>
            </div>
            <h3 className="font-display mb-1 text-2xl font-semibold text-text-inverse">
              {personalDetails.displayName}
            </h3>
            <p className="mb-6 text-sm text-text-inverse/60">
              {personalDetails.title}, {personalDetails.department}
              <br />
              {personalDetails.institution}
            </p>

            <div className="mb-6 flex items-center gap-2 text-sm text-text-inverse/80">
              <EnvelopeSimple size={16} className="flex-shrink-0 text-accent-teal" />
              <a
                href={`mailto:${personalDetails.contact.academic.email}`}
                className="hover:text-accent-gold transition-colors"
              >
                {personalDetails.contact.academic.email}
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {personalDetails.socialProfiles.map((profile) => (
                <SocialIcon key={profile.platform} profile={profile} />
              ))}
            </div>
          </div>

          {/* MME Column */}
          <div>
            <div className="mb-4 flex items-center gap-2 text-accent-rose">
              <span className="text-caption">Make Maths Easy Classes</span>
            </div>
            <h3 className="font-display mb-1 text-2xl font-semibold text-text-inverse">
              Mathematics Coaching
            </h3>
            <p className="mb-6 text-sm text-text-inverse/60">
              Online &amp; Offline · 9th Grade to Competitive Exams
            </p>

            <a
              href={buildWhatsAppUrl(mmeDetails.whatsapp, mmeDetails.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-flex items-center gap-2 text-sm text-text-inverse/80 transition-colors hover:text-accent-gold"
              aria-label="Contact on WhatsApp (opens in new tab)"
            >
              <WhatsappLogo size={16} weight="fill" className="flex-shrink-0 text-[#25D366]" />
              {mmeDetails.phone}
            </a>

            <div className="flex items-start gap-2 text-sm text-text-inverse/60">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent-rose" />
              <address className="not-italic">
                {personalDetails.contact.mme.address.line1}
                <br />
                {personalDetails.contact.mme.address.line2}
                <br />
                {personalDetails.contact.mme.address.line3}, {personalDetails.contact.mme.address.city} –{' '}
                {personalDetails.contact.mme.address.pincode}
              </address>
            </div>
          </div>
        </div>

        <Divider className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-text-inverse/50 transition-colors hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/gallery"
              className="text-sm text-text-inverse/50 transition-colors hover:text-accent-gold"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-sm text-text-inverse/50 transition-colors hover:text-accent-gold"
            >
              Contact
            </Link>
          </nav>
          <p className="text-xs text-text-inverse/40">
            © {currentYear} {personalDetails.displayName}. Research data current as of{' '}
            {new Date(personalDetails.lastUpdated).toLocaleDateString('en-IN', {
              month: 'long',
              year: 'numeric',
            })}
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
