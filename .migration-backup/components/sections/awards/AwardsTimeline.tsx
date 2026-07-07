'use client'

import { motion } from 'framer-motion'
import { Star } from '@phosphor-icons/react'
import { awards } from '@/data/awards'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { timelineDot, fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

function sortKey(award: (typeof awards)[number]): number {
  return typeof award.year === 'number' ? award.year : 2022
}

const categoryColor: Record<string, string> = {
  teaching: 'bg-accent-rose',
  research: 'bg-accent-teal',
  'academic-excellence': 'bg-accent-gold',
  credential: 'bg-accent-blue',
  global: 'bg-accent-gold',
}

const categoryLabel: Record<string, string> = {
  teaching: 'Teaching Excellence',
  research: 'Research Excellence',
  'academic-excellence': 'Academic Excellence',
  credential: 'Credential',
  global: 'Global Recognition',
}

export function AwardsTimeline() {
  const sorted = [...awards].sort((a, b) => sortKey(b) - sortKey(a))

  return (
    <div>
      <SectionEyebrow label="Institutional Honours" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        A Timeline of Teaching &amp; Research Excellence
      </h2>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="relative space-y-8 border-l-2 border-border pl-8 sm:pl-10"
      >
        {sorted.map((award) => {
          const isPremium = award.tier === 'chancellor'
          return (
            <motion.li key={award.id} variants={fadeUp} className="relative">
              <motion.span
                variants={timelineDot}
                aria-hidden="true"
                className={cn(
                  'absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-bg-primary sm:-left-[49px]',
                  categoryColor[award.category],
                  isPremium && 'h-7 w-7 ring-2 ring-accent-gold ring-offset-2 ring-offset-bg-primary',
                )}
              >
                {isPremium && <Star size={12} weight="fill" className="text-bg-dark" />}
              </motion.span>

              <div
                className={cn(
                  'rounded-[var(--radius-md)] border border-border bg-bg-card p-6 shadow-card',
                  isPremium && 'border-accent-gold/40 bg-accent-gold-subtle',
                )}
              >
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="text-data text-sm font-semibold text-accent-gold">
                    {award.session ?? award.year}
                  </span>
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-0.5 text-xs font-semibold',
                      award.category === 'teaching' && 'bg-accent-rose-subtle text-accent-rose',
                      award.category === 'research' && 'bg-accent-teal-subtle text-accent-teal',
                      award.category === 'academic-excellence' && 'bg-accent-gold-subtle text-accent-gold',
                    )}
                  >
                    {categoryLabel[award.category]}
                  </span>
                  {isPremium && (
                    <span className="flex items-center gap-1 rounded-full bg-accent-gold px-2.5 py-0.5 text-xs font-bold text-bg-dark">
                      <Star size={10} weight="fill" />
                      Highest Honour
                    </span>
                  )}
                </div>
                <h3 className="font-display mb-1 text-xl font-semibold text-text-primary">
                  {award.name}
                </h3>
                <p className="mb-2 text-sm font-medium text-text-muted">{award.awardingBody}</p>
                <p className="text-sm leading-relaxed text-text-secondary">{award.description}</p>
              </div>
            </motion.li>
          )
        })}
      </motion.ol>
    </div>
  )
}
