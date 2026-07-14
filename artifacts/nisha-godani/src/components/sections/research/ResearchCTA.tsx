import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { fadeUp } from '@/lib/animations'

export function ResearchCTA() {
  return (
    <SectionWrapper background="secondary">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-3xl rounded-[var(--radius-lg)] border border-border bg-bg-primary p-10 text-center shadow-card"
      >
        <h2 className="text-heading-2 font-display text-text-primary">
          Interested in exploring the complete research portfolio?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-body-lg text-text-secondary">
          Browse all research publications, journal articles, citations,
          collaborations, and academic contributions in one place.
        </p>

        <div className="mt-8">
          <Button href="/publications" variant="primary" size="md">
            View All Publications →
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
