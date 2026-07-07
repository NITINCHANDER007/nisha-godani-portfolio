'use client'

import { motion } from 'framer-motion'
import { Buildings } from '@phosphor-icons/react'
import { employment } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { formatYearRange } from '@/lib/utils'

export function EmployerCards() {
  const sorted = [...employment].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )

  return (
    <div>
      <SectionEyebrow label="University Teaching Experience" color="teal" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        A Decade of Classroom Leadership
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-3"
      >
        {sorted.map((job) => {
          const startYear = new Date(job.startDate).getFullYear()
          const endYear = job.endDate ? new Date(job.endDate).getFullYear() : undefined
          return (
            <motion.div key={job.id} variants={fadeUp}>
              <Card accentColor="teal" className="h-full">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[var(--radius-base)] bg-accent-teal-subtle text-accent-teal">
                    <Buildings size={20} weight="duotone" />
                  </div>
                  {job.isCurrent && (
                    <Badge variant="current" label="Current" size="sm" />
                  )}
                </div>
                <p className="text-data mb-2 text-sm text-accent-teal">
                  {formatYearRange(startYear, endYear)}
                </p>
                <h3 className="text-heading-3 font-body mb-1 text-text-primary">
                  {job.role}
                </h3>
                <p className="mb-1 text-sm font-medium text-text-secondary">
                  {job.institution}
                </p>
                <p className="mb-4 text-xs text-text-muted">
                  {job.department} · {job.city}, {job.state}
                </p>
                {job.awards.length > 0 && (
                  <div className="mb-3">
                    <p className="text-caption mb-2 text-text-muted">Awards Earned</p>
                    <ul className="space-y-1.5">
                      {job.awards.slice(0, 3).map((a) => (
                        <li key={a} className="flex items-start gap-2 text-xs text-text-secondary">
                          <span aria-hidden="true" className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent-gold" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {job.highlights.length > 0 && (
                  <ul className="space-y-1.5 border-t border-border pt-3">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-text-muted">
                        <span aria-hidden="true" className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-accent-teal" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
