'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Spiral, Waves, Eye, Graph, CaretDown } from '@phosphor-icons/react'
import type { ComponentType } from 'react'
import { researchAreas } from '@/data/research'
import { publications } from '@/data/publications'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Badge } from '@/components/ui/Badge'
import { accordionContent, staggerContainer, fadeUp } from '@/lib/animations'
import { formatYearRange } from '@/lib/utils'

type IconComponent = ComponentType<{ size?: number; weight?: 'fill' | 'duotone' | 'regular' | 'bold' | 'light' | 'thin' }>

const iconMap: Record<string, IconComponent> = {
  Spiral,
  Waves,
  Eye,
  Graph,
}

export function ResearchAreasGrid() {
  const [expandedId, setExpandedId] = useState<string | null>(researchAreas[0]?.id ?? null)

  return (
    <SectionWrapper background="primary" id="research-areas" ariaLabelledBy="research-areas-heading">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow label="Research Areas" color="teal" />
        <h2 id="research-areas-heading" className="text-heading-1 font-display text-text-primary">
          Four Threads, One Mathematical Pursuit
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {researchAreas.map((area) => {
          const Icon = iconMap[area.icon] ?? Spiral
          const isExpanded = expandedId === area.id
          const keyPapers = area.keyPaperIds
            .map((id) => publications.find((p) => p.id === id))
            .filter(Boolean)

          return (
            <motion.div
              key={area.id}
              variants={fadeUp}
              id={area.slug}
              className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-bg-card shadow-card"
            >
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : area.id)}
                aria-expanded={isExpanded}
                aria-controls={`research-area-panel-${area.id}`}
                className="flex w-full items-start gap-4 p-6 text-left"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[var(--radius-base)] bg-accent-teal-subtle text-accent-teal">
                  <Icon size={24} weight="duotone" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center justify-between gap-3">
                    <h3 className="text-heading-3 font-body text-text-primary">{area.title}</h3>
                    <CaretDown
                      size={18}
                      className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm text-text-secondary">{area.description}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <Badge variant="topic" label={`${area.paperCount}+ papers`} size="sm" />
                    <span className="text-data text-xs text-text-muted">
                      {formatYearRange(area.era.start, area.era.end)}
                    </span>
                  </div>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    id={`research-area-panel-${area.id}`}
                    variants={accordionContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border px-6 pb-6 pt-5">
                      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                        {area.longDescription}
                      </p>
                      <p className="text-caption mb-3 text-text-muted">Key Papers</p>
                      <ul className="space-y-2.5">
                        {keyPapers.map((paper) => (
                          <li key={paper!.id}>
                            <Link
                              href={`/publications?search=${encodeURIComponent(paper!.title)}`}
                              className="group flex items-start gap-2 text-sm text-text-secondary transition-colors hover:text-accent-gold"
                            >
                              <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-gold" />
                              <span className="group-hover:underline">
                                {paper!.title} ({paper!.year})
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/publications?topic=${area.slug}`}
                        className="mt-4 inline-block text-sm font-semibold text-accent-teal hover:underline"
                      >
                        View papers in this area →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </SectionWrapper>
  )
}
