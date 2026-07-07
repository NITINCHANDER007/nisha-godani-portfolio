

import { motion } from 'framer-motion'
import { EnvelopeSimple, YoutubeLogo } from '@phosphor-icons/react'
import { personalDetails } from '@/data/personal'
import { mmeDetails } from '@/data/mme'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { Divider } from '@/components/ui/Divider'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ContactFooterSection() {
  return (
    <SectionWrapper
      background="dark"
      ariaLabelledBy="contact-cta-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 500px 300px at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%)',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-2xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          id="contact-cta-heading"
          className="text-heading-1 font-display mb-5 text-text-inverse"
        >
          Two Doors, One Mathematician
        </motion.h2>
        <motion.p variants={fadeUp} className="mb-10 text-body-lg text-text-inverse/70">
          Whether you&apos;re a researcher exploring a collaboration, a student
          preparing for an exam, or a parent looking for a tutor — reach out the way
          that fits you.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <WhatsAppButton
            phone={mmeDetails.whatsapp}
            message={mmeDetails.whatsappMessage}
            label="Make Maths Easy — WhatsApp"
          />
          <Button
            href={`mailto:${personalDetails.contact.academic.email}`}
            variant="secondary"
            icon={<EnvelopeSimple size={18} />}
            className="text-text-inverse"
          >
            Academic Email
          </Button>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Divider className="my-10 !bg-white/10" />
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-6">
          <Button href="/contact" variant="ghost" className="text-text-inverse">
            Full Contact Page →
          </Button>
          <Button
            href={mmeDetails.youtube.url}
            variant="ghost"
            icon={<YoutubeLogo size={16} weight="fill" />}
            className="text-text-inverse"
          >
            Free Lectures on YouTube
          </Button>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  )
}
