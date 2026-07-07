

import { motion } from 'framer-motion'
import { useState } from 'react'
import { researchTimeline } from '@/data/research'
import { publications } from '@/data/publications'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { timelineDot, fadeUp, staggerContainer } from '@/lib/animations'
import { cn } from '@/lib/utils'

const eraColors: Record<string, string> = {
  phd: 'bg-accent-blue',
  'early-gla': 'bg-accent-teal',
  peak: 'bg-accent-gold',
  advanced: 'bg-accent-rose',
}

export function ResearchTimeline() {
  const [activeId, setActiveId] = useState<string>(researchTimeline[researchTimeline.length - 1].id)
  const activeNode = researchTimeline.find((n) => n.id === activeId)!
  const highlightedPapers = activeNode.highlightedPaperIds
    .map((id) => publications.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <SectionWrapper background="secondary" id="timeline" ariaLabelledBy="timeline-heading">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow label="Research Evolution" color="gold" />
        <h2 id="timeline-heading" className="text-heading-1 font-display text-text-primary">
          A Decade of Mathematical Discovery
        </h2>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative mb-10">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-5 h-px bg-border"
          />
          <div className="relative grid grid-cols-4 gap-4">
            {researchTimeline.map((node) => {
              const isActive = activeId === node.id
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center text-center"
                >
                  <motion.span
                    variants={timelineDot}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={cn(
                      'relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border-4 border-bg-secondary transition-transform',
                      eraColors[node.era],
                      isActive && 'scale-125 ring-2 ring-accent-gold ring-offset-2 ring-offset-bg-secondary',
                    )}
                  />
                  <span className="text-data mb-1 text-sm font-semibold text-text-primary">
                    {node.period}
                  </span>
                  <span
                    className={cn(
                      'text-sm transition-colors',
                      isActive ? 'font-semibold text-accent-gold' : 'text-text-muted group-hover:text-text-secondary',
                    )}
                  >
                    {node.title}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-[var(--radius-md)] border border-border bg-bg-card p-8 shadow-card"
        >
          <p className="text-caption mb-2 text-accent-gold">{activeNode.subtitle}</p>
          <h3 className="text-heading-2 font-display mb-4 text-text-primary">{activeNode.title}</h3>
          <p className="mb-6 max-w-3xl text-body text-text-secondary">{activeNode.description}</p>
          {activeNode.keyAchievement && (
            <p className="mb-6 text-sm font-semibold text-accent-gold">
              ✦ {activeNode.keyAchievement}
            </p>
          )}
          {highlightedPapers.length > 0 && (
            <div>
              <p className="text-caption mb-3 text-text-muted">Highlighted Papers</p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {highlightedPapers.map((paper) => (
                  <li key={paper!.id} className="text-sm text-text-secondary">
                    <span className="text-accent-gold">·</span> {paper!.title} ({paper!.year})
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>

      {/* Mobile vertical timeline */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-6 border-l-2 border-border pl-6 md:hidden"
      >
        {researchTimeline.map((node) => (
          <motion.div key={node.id} variants={fadeUp} className="relative">
            <span
              aria-hidden="true"
              className={cn(
                'absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg-secondary',
                eraColors[node.era],
              )}
            />
            <p className="text-data mb-1 text-sm text-accent-gold">{node.period}</p>
            <h3 className="text-heading-3 font-body mb-2 text-text-primary">{node.title}</h3>
            <p className="mb-2 text-sm leading-relaxed text-text-secondary">{node.description}</p>
            {node.keyAchievement && (
              <p className="text-xs font-semibold text-accent-gold">✦ {node.keyAchievement}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
