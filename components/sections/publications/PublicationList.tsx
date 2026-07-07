'use client'

import { AnimatePresence, motion } from 'framer-motion'
import type { Publication } from '@/types'
import { groupPublicationsByYear } from '@/lib/publications'
import { PublicationCard } from '@/components/cards/PublicationCard'
import { filterListVariants, filterItemVariants } from '@/lib/animations'

interface PublicationListProps {
  publications: Publication[]
  sortBy: 'newest' | 'oldest' | 'journal'
  onCiteOpen: (pub: Publication) => void
}

export function PublicationList({ publications, sortBy, onCiteOpen }: PublicationListProps) {
  if (publications.length === 0) {
    return (
      <div className="rounded-[var(--radius-md)] border border-dashed border-border bg-bg-card p-16 text-center">
        <p className="text-body text-text-secondary">
          No publications match your current filters.
        </p>
      </div>
    )
  }

  // Group by year only when sorting by date (newest/oldest); flat list when sorting by journal
  if (sortBy === 'journal') {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="flat-list"
          variants={filterListVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-4"
        >
          {publications.map((pub) => (
            <motion.div key={pub.id} variants={filterItemVariants}>
              <PublicationCard publication={pub} onCiteOpen={onCiteOpen} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    )
  }

  const grouped = groupPublicationsByYear(publications)
  const years = Object.keys(grouped).sort((a, b) =>
    sortBy === 'oldest' ? Number(a) - Number(b) : Number(b) - Number(a),
  )

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="grouped-list"
        variants={filterListVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="space-y-10"
      >
        {years.map((year) => (
          <div key={year}>
            <div className="mb-4 flex items-center gap-4">
              <h2 className="font-display text-3xl font-semibold text-accent-gold">{year}</h2>
              <span aria-hidden="true" className="h-px flex-1 bg-accent-gold/30" />
              <span className="text-data text-xs text-text-muted">
                {grouped[year].length} {grouped[year].length === 1 ? 'paper' : 'papers'}
              </span>
            </div>
            <div className="space-y-4">
              {grouped[year].map((pub) => (
                <motion.div key={pub.id} variants={filterItemVariants}>
                  <PublicationCard publication={pub} onCiteOpen={onCiteOpen} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
