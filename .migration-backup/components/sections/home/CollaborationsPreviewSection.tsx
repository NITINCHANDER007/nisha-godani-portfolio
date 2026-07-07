'use client'

import { motion } from 'framer-motion'
import { collaborators } from '@/data/research'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CollaboratorCard } from '@/components/cards/CollaboratorCard'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'

// Simplified world-map dot positions (percentage-based, matching collaborator coordinates approximately)
const mapDots = [
  { id: 'india', x: '68%', y: '48%', label: 'Mathura / Indore, India' },
  { id: 'italy', x: '50%', y: '38%', label: 'Naples, Italy' },
  { id: 'spain', x: '46%', y: '38%', label: 'Barcelona, Spain' },
  { id: 'japan', x: '86%', y: '40%', label: 'Nagoya, Japan' },
]

export function CollaborationsPreviewSection() {
  const intlCollaborators = collaborators.filter((c) => c.isInternational)

  return (
    <SectionWrapper background="primary" ariaLabelledBy="collaborations-heading">
      <div className="mb-12 text-center">
        <SectionEyebrow label="Global Research Network" color="teal" className="justify-center" />
        <h2 id="collaborations-heading" className="text-heading-1 font-display text-text-primary">
          Research Without Borders
        </h2>
      </div>

      {/* World map */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="relative mx-auto mb-14 aspect-[2/1] max-w-4xl overflow-hidden rounded-[var(--radius-lg)] border border-border bg-bg-card"
      >
        <svg
          viewBox="0 0 1000 500"
          className="absolute inset-0 h-full w-full opacity-[0.07]"
          aria-hidden="true"
        >
          <path
            d="M150 200 Q200 150 280 180 T420 170 T560 190 T700 180 T850 200 L850 350 Q700 380 560 360 T420 370 T280 350 T150 380 Z"
            fill="var(--text-primary)"
          />
        </svg>
        {mapDots.map((dot) => (
          <div
            key={dot.id}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: dot.x, top: dot.y }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-gold opacity-50" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent-gold" />
            </span>
            <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap rounded-[var(--radius-base)] border border-border bg-bg-card px-2.5 py-1 text-xs font-medium text-text-secondary opacity-0 shadow-card transition-opacity group-hover:opacity-100">
              {dot.label}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
      >
        {intlCollaborators.map((collaborator) => (
          <motion.div key={collaborator.id} variants={fadeUp} className="flex-shrink-0 snap-start">
            <CollaboratorCard collaborator={collaborator} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
