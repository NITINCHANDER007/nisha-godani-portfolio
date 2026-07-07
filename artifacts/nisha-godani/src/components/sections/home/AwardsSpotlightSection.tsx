

import { motion } from 'framer-motion'
import { Globe } from '@phosphor-icons/react'
import { awards, credentials, globalRecognition } from '@/data/awards'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { AwardCard } from '@/components/cards/AwardCard'
import { AppTooltip } from '@/components/ui/Tooltip'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'

export function AwardsSpotlightSection() {
  const visibleAwards = awards.slice(0, 6)

  return (
    <SectionWrapper background="primary" ariaLabelledBy="awards-snapshot-heading">
      <div className="mb-12 text-center">
        <SectionEyebrow label="Recognition" color="gold" className="justify-center" />
        <h2
          id="awards-snapshot-heading"
          className="text-heading-1 font-display text-text-primary"
        >
          A Decade of Excellence, Recognized
        </h2>
      </div>

      {/* Stanford Badge — premium hero treatment */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="mx-auto mb-12 max-w-xl"
      >
        <AppTooltip content={globalRecognition.tooltipNote}>
          <div className="gold-shimmer-border relative cursor-help overflow-hidden rounded-[var(--radius-lg)] p-8 text-center shadow-glow-gold sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 20%, rgba(201,168,76,0.15) 0%, transparent 60%)',
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-gold-subtle text-accent-gold">
                <Globe size={32} weight="fill" />
              </div>
              <p className="font-display mb-1 text-2xl font-semibold text-text-primary sm:text-3xl">
                {globalRecognition.name}
              </p>
              <p className="mb-1 text-base font-medium text-accent-gold">
                {globalRecognition.category}
              </p>
              <p className="text-sm text-text-muted">
                {globalRecognition.authority} · {globalRecognition.duration}
              </p>
            </div>
          </div>
        </AppTooltip>
      </motion.div>

      {/* Credential Trio */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {credentials.map((c) => (
          <motion.div
            key={c.id}
            variants={fadeUp}
            className="rounded-[var(--radius-md)] border border-accent-blue/25 bg-accent-blue/5 p-6 text-center"
          >
            <p className="text-caption mb-2 text-accent-blue">{c.examName} {c.year}</p>
            <p className="font-display mb-2 text-3xl font-semibold text-text-primary">
              All India Rank {c.allIndiaRank}
            </p>
            <p className="text-sm text-text-secondary">{c.fullName}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Awards strip */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visibleAwards.map((award) => (
          <motion.div key={award.id} variants={fadeUp}>
            <AwardCard award={award} />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button href="/awards" variant="ghost">
          View all {awards.length} awards →
        </Button>
      </div>
    </SectionWrapper>
  )
}
