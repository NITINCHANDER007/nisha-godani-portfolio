

import { motion } from 'framer-motion'
import { MapPin } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { personalDetails } from '@/data/personal'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { fadeUp } from '@/lib/animations'

export function MmeContactBlock() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 gap-8 rounded-[var(--radius-lg)] border border-border bg-bg-card p-8 shadow-card lg:grid-cols-2"
    >
      <div>
        <h2 className="text-heading-2 font-display mb-4 text-text-primary">
          Book Your Free Demo Class
        </h2>
        <p className="mb-6 text-body text-text-secondary">
          Talk directly to Dr. Godani on WhatsApp to discuss your requirements, check
          batch availability, and book a free demo session.
        </p>
        <WhatsAppButton
          phone={mmeDetails.whatsapp}
          message={mmeDetails.whatsappMessage}
          label={`Chat with Dr. Godani — ${mmeDetails.phone}`}
          className="w-full sm:w-auto"
        />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3 rounded-[var(--radius-md)] border border-border bg-bg-secondary p-5">
          <MapPin size={20} className="mt-0.5 flex-shrink-0 text-accent-rose" />
          <div>
            <p className="mb-1 text-sm font-semibold text-text-primary">Offline Center</p>
            <a
              href="https://maps.app.goo.gl/2yjdpcEb1L5d1TXv8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-rose hover:underline"
            >
              Make Maths Easy Classes Office
            </a>
            <a
              href={personalDetails.contact.mme.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-xs font-semibold text-accent-rose hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
        <p className="text-xs text-text-muted">
          Online classes available across India · No forms · No registration fee to
          enquire
        </p>
      </div>
    </motion.div>
  )
}
