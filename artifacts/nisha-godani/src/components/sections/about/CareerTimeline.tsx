

import { motion } from 'framer-motion'
import { Briefcase } from '@phosphor-icons/react'
import { employment } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp, timelineDot } from '@/lib/animations'
import { formatYearRange } from '@/lib/utils'

export function CareerTimeline() {
  const sorted = [...employment].sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
  )

  return (
    <div>
      <SectionEyebrow label="Career Timeline" color="teal" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        A Decade in the Classroom
      </h2>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-7 border-l-2 border-border pl-7 sm:pl-9"
      >
        {sorted.map((job) => {
          const startYear = new Date(job.startDate).getFullYear()
          const endYear = job.endDate ? new Date(job.endDate).getFullYear() : undefined
          return (
            <motion.li key={job.id} variants={fadeUp} className="relative">
              <motion.span
                variants={timelineDot}
                aria-hidden="true"
                className="absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-teal text-bg-dark sm:-left-[45px]"
              >
                <Briefcase size={12} weight="fill" />
              </motion.span>
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <p className="text-data text-sm text-accent-teal">
                  {formatYearRange(startYear, endYear)}
                </p>
                {job.isCurrent && (
                  <span className="rounded-full bg-sci-green/15 px-2 py-0.5 text-xs font-semibold text-sci-green">
                    Current
                  </span>
                )}
              </div>
              <h3 className="font-display mb-1 text-xl font-semibold text-text-primary">
                {job.role}
              </h3>
              <p className="mb-2 text-sm text-text-secondary">
                {job.institution} · {job.city}, {job.state}
              </p>
              {job.highlights.length > 0 && (
                <ul className="space-y-1">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-text-muted">
                      <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-gold" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </motion.li>
          )
        })}
      </motion.ol>
    </div>
  )
}
