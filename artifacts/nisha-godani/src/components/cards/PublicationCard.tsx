

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CaretDown, Quotes } from '@phosphor-icons/react'
import type { Publication } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { JournalBadge } from '@/components/cards/JournalBadge'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { accordionContent } from '@/lib/animations'
import { getResearchAreaLabel } from '@/lib/utils'

interface PublicationCardProps {
  publication: Publication
  onCiteOpen: (pub: Publication) => void
}

export function PublicationCard({ publication, onCiteOpen }: PublicationCardProps) {
  const [isAbstractOpen, setIsAbstractOpen] = useState(false)

  return (
    <article className="group rounded-[var(--radius-md)] border border-border border-l-2 border-l-transparent bg-bg-card p-5 shadow-card transition-colors duration-200 hover:border-l-accent-teal sm:p-6">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="year" label={publication.year.toString()} size="sm" />
        <JournalBadge journal={publication.journal} journalShort={publication.journalShort} />
        {publication.indexedBy.includes('SCI') && (
          <Badge variant="journal-sci" label="SCI" size="sm" />
        )}
        {publication.indexedBy.includes('SCOPUS') && (
          <Badge variant="journal-scopus" label="Scopus" size="sm" />
        )}
        {publication.researchAreas.slice(0, 1).map((tag) => (
          <Badge key={tag} variant="topic" label={getResearchAreaLabel(tag)} size="sm" />
        ))}
        {publication.type === 'conference' && (
          <Badge variant="topic" label="Conference Paper" size="sm" />
        )}
      </div>

      <h3 className="text-heading-3 font-display mb-2 text-text-primary">
        {publication.title}
      </h3>

      <p className="text-data mb-1 text-sm text-text-secondary">
        {publication.authors.map((a, i) => (
          <span key={a.name} className={a.isPrimary ? 'font-semibold text-text-primary' : ''}>
            {a.name}
            {i < publication.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      <p className="text-data mb-4 text-xs text-text-muted">
        {publication.journal}
        {publication.volume ? `, Vol. ${publication.volume}` : ''}
        {publication.pages ? `, pp. ${publication.pages}` : ''}
        {publication.articleNumber && !publication.pages ? `, Art. ${publication.articleNumber}` : ''}
        {' · '}
        {publication.year}
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {publication.doiUrl && (
          <ExternalLink href={publication.doiUrl} ariaLabel={`DOI for "${publication.title}"`} className="text-sm font-semibold">
            DOI
          </ExternalLink>
        )}
        {publication.abstract && (
          <button
            type="button"
            onClick={() => setIsAbstractOpen((v) => !v)}
            aria-expanded={isAbstractOpen}
            aria-controls={`abstract-${publication.id}`}
            className="flex items-center gap-1 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-gold"
          >
            Abstract
            <CaretDown
              size={14}
              className={`transition-transform duration-200 ${isAbstractOpen ? 'rotate-180' : ''}`}
            />
          </button>
        )}
        {publication.researchGateUrl && (
          <ExternalLink
            href={publication.researchGateUrl}
            ariaLabel={`ResearchGate page for "${publication.title}"`}
            className="text-sm font-semibold"
          >
            ResearchGate
          </ExternalLink>
        )}
        <button
          type="button"
          onClick={() => onCiteOpen(publication)}
          className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-gold"
        >
          <Quotes size={14} weight="fill" />
          Cite
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isAbstractOpen && publication.abstract && (
          <motion.div
            id={`abstract-${publication.id}`}
            variants={accordionContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-text-secondary">
              {publication.abstract}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}
