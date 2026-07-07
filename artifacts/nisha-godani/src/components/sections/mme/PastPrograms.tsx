

import { motion } from 'framer-motion'
import { mmeDetails } from '@/data/mme'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { PastProgramCard } from '@/components/cards/PastProgramCard'
import { fadeUp } from '@/lib/animations'

export function PastPrograms() {
  return (
    <div>
      <SectionEyebrow label="Past Programs · Teaching Initiatives · Academic Outreach" color="gold" />
      <h2 className="text-heading-2 font-display mb-4 text-text-primary">
        Specialized Courses We&apos;ve Run
      </h2>
      <p className="mb-10 max-w-2xl text-body text-text-secondary">
        Beyond regular classes, Dr. Godani has led specialized cohort-based programs.
        These are completed initiatives — not currently enrolling, though recorded
        access remains available where noted.
      </p>

      <div className="mx-auto max-w-2xl space-y-6">
        {mmeDetails.pastPrograms.map((program) => (
          <motion.div
            key={program.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <PastProgramCard program={program} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
