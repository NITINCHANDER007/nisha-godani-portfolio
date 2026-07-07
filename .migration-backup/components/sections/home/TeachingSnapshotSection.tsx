'use client'

import { motion } from 'framer-motion'
import { YoutubeLogo } from '@phosphor-icons/react'
import { employment, subjects } from '@/data/teaching'
import { mmeDetails } from '@/data/mme'
import { Button } from '@/components/ui/Button'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { fadeLeft, fadeRight, staggerContainerFast, fadeUp } from '@/lib/animations'

export function TeachingSnapshotSection() {
  const current = employment.find((e) => e.isCurrent)!
  const previous = employment.find((e) => e.id === 'gla-2017')!

  return (
    <section aria-label="Teaching overview" className="grid grid-cols-1 lg:grid-cols-2">
      {/* University Teaching */}
      <motion.div
        variants={fadeLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-bg-dark px-6 py-16 text-text-inverse sm:px-10 md:py-20 lg:px-14"
      >
        <SectionEyebrow label="Academia" color="teal" />
        <h2 className="text-heading-2 font-display mb-6 text-text-inverse">
          Award-Winning University Educator
        </h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {subjects.slice(0, 4).map((s) => (
            <span
              key={s.id}
              className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-text-inverse/80"
            >
              {s.name}
            </span>
          ))}
        </div>

        <div className="mb-6 space-y-1">
          <p className="text-sm font-semibold text-accent-gold">{current.institution}</p>
          <p className="text-sm text-text-inverse/60">
            {current.role} · {current.startDate.slice(0, 4)} – Present
          </p>
        </div>

        <div className="mb-8 space-y-1">
          <p className="text-sm font-semibold text-text-inverse/80">
            {previous.institution}
          </p>
          <p className="text-sm text-text-inverse/60">
            {previous.role} · 6.5 years · Chancellor Award recipient
          </p>
        </div>

        <Button href="/teaching" variant="secondary" className="text-text-inverse">
          Full Teaching Profile →
        </Button>
      </motion.div>

      {/* Make Maths Easy preview */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col justify-center bg-bg-mme px-6 py-16 sm:px-10 md:py-20 lg:px-14"
      >
        <SectionEyebrow label="Make Maths Easy" color="rose" />
        <h2 className="text-heading-2 font-display mb-4 text-text-primary">
          Learn from a Researcher
        </h2>
        <p className="mb-6 text-body text-text-secondary">{mmeDetails.heroSubtext}</p>

        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {['9th to 12th', 'B.Tech', 'MBA', 'GATE', 'NET'].map((level) => (
            <motion.span
              key={level}
              variants={fadeUp}
              className="rounded-full bg-accent-rose-subtle px-3 py-1.5 text-xs font-semibold text-accent-rose"
            >
              {level}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton phone={mmeDetails.whatsapp} message={mmeDetails.whatsappMessage} />
          <Button
            href={mmeDetails.youtube.url}
            variant="secondary"
            icon={<YoutubeLogo size={18} weight="fill" />}
          >
            Watch Free Lectures
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
