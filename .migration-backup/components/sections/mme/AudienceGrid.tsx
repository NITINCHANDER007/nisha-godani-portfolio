'use client'

import { motion } from 'framer-motion'
import { mmeDetails } from '@/data/mme'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { cn } from '@/lib/utils'

const categoryLabels: Record<string, string> = {
  school: 'School',
  undergraduate: 'Undergraduate',
  postgraduate: 'Postgraduate',
  competitive: 'Competitive Exams',
}

const categoryColors: Record<string, string> = {
  school: 'border-accent-blue/30 bg-accent-blue/10 text-accent-blue',
  undergraduate: 'border-accent-teal/30 bg-accent-teal-subtle text-accent-teal',
  postgraduate: 'border-accent-rose/30 bg-accent-rose-subtle text-accent-rose',
  competitive: 'border-accent-gold/30 bg-accent-gold-subtle text-accent-gold',
}

export function AudienceGrid() {
  const grouped = mmeDetails.audienceLevels.reduce<Record<string, typeof mmeDetails.audienceLevels>>(
    (acc, level) => {
      acc[level.category] = acc[level.category] ?? []
      acc[level.category].push(level)
      return acc
    },
    {},
  )

  return (
    <div>
      <SectionEyebrow label="Who This Is For" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        From 9th Grade to Competitive Exams
      </h2>

      <div className="space-y-8">
        {Object.entries(grouped).map(([category, levels]) => (
          <div key={category}>
            <p className="text-caption mb-3 text-text-muted">{categoryLabels[category]}</p>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-wrap gap-2.5"
            >
              {levels.map((level) => (
                <motion.span
                  key={level.level}
                  variants={fadeUp}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold',
                    categoryColors[category],
                  )}
                >
                  {level.label}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
