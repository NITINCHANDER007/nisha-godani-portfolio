'use client'

import { motion } from 'framer-motion'
import { credentials } from '@/data/awards'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function CredentialTrio() {
  return (
    <div className="mb-16">
      <SectionEyebrow label="National Qualifying Examinations" color="blue" />
      <p className="mb-8 max-w-2xl text-body text-text-secondary">
        Among the most competitive mathematics examinations in India — qualified at
        national top ranks.
      </p>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {credentials.map((c) => (
          <motion.div
            key={c.id}
            variants={fadeUp}
            className="rounded-[var(--radius-md)] border border-accent-blue/25 bg-accent-blue/5 p-7 text-center"
          >
            <p className="text-caption mb-3 text-accent-blue">
              {c.fullName} · {c.year}
            </p>
            <p className="font-display mb-3 text-5xl font-semibold text-text-primary">
              {c.examName}
            </p>
            <p className="text-data mb-4 text-2xl font-semibold text-accent-blue">
              AIR {c.allIndiaRank}
            </p>
            <span className="mb-4 inline-block rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
              Qualified
            </span>
            <p className="text-sm leading-relaxed text-text-secondary">
              {c.significance}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
