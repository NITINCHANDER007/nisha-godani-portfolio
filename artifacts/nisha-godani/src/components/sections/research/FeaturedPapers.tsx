

import { motion } from 'framer-motion'
import { publications } from '@/data/publications'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Badge } from '@/components/ui/Badge'
import { JournalBadge } from '@/components/cards/JournalBadge'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { getResearchAreaLabel } from '@/lib/utils'

export function FeaturedPapers() {
  const featured = publications.filter((p) => p.isFeatured).sort((a, b) => b.year - a.year)

  return (
    <SectionWrapper background="primary" id="featured-papers" ariaLabelledBy="featured-papers-heading">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow label="Featured Work" color="gold" />
        <h2 id="featured-papers-heading" className="text-heading-1 font-display text-text-primary">
          Signature Publications
        </h2>
        <p className="mt-3 text-body text-text-secondary">
          The papers that best represent the depth and international reach of this
          research program.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-5"
      >
        {featured.map((paper) => (
          <motion.article
            key={paper.id}
            variants={fadeUp}
            className="group rounded-[var(--radius-md)] border border-border border-l-2 border-l-transparent bg-bg-card p-6 shadow-card transition-colors duration-200 hover:border-l-accent-gold sm:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <JournalBadge journal={paper.journal} journalShort={paper.journalShort} />
                  {paper.indexedBy.includes('SCI') && (
                    <Badge variant="journal-sci" label="SCI" size="sm" />
                  )}
                  <Badge variant="year" label={paper.year.toString()} size="sm" />
                  {paper.researchAreas.slice(0, 1).map((tag) => (
                    <Badge key={tag} variant="topic" label={getResearchAreaLabel(tag)} size="sm" />
                  ))}
                </div>
                <h3 className="text-heading-3 font-display mb-2 text-text-primary">
                  {paper.title}
                </h3>
                <p className="mb-3 text-sm text-text-muted">
                  {paper.authors.map((a) => a.name).join(', ')} · {paper.journal}
                  {paper.volume ? `, ${paper.volume}` : ''}
                </p>
                {paper.abstract && (
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {paper.abstract}
                  </p>
                )}
              </div>
              {paper.doiUrl && (
                <ExternalLink
                  href={paper.doiUrl}
                  ariaLabel={`View "${paper.title}" on DOI`}
                  className="flex-shrink-0 whitespace-nowrap text-sm font-semibold"
                >
                  View Paper
                </ExternalLink>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
