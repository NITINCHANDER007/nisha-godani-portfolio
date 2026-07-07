

import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { researchAreas } from '@/data/research'
import { publications, publicationStats } from '@/data/publications'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { ResearchCard } from '@/components/cards/ResearchCard'
import { JournalBadge } from '@/components/cards/JournalBadge'
import { Badge } from '@/components/ui/Badge'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { formatNumber } from '@/lib/utils'

export function ResearchSnapshotSection() {
  const featured = publications.find((p) => p.id === 'pub-2022-nonlocal-gravity')!

  return (
    <SectionWrapper background="dark" ariaLabelledBy="research-snapshot-heading">
      <div className="mb-12 max-w-2xl">
        <SectionEyebrow label="Research" color="teal" />
        <h2
          id="research-snapshot-heading"
          className="text-heading-1 font-display mb-4 text-text-inverse"
        >
          Exploring the Mathematical Fabric of Reality
        </h2>
        <p className="text-body-lg text-text-inverse/70">
          {publicationStats.headlineCount}+ publications · {formatNumber(publicationStats.totalCitations)}+ citations · SCI indexed
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {researchAreas.map((area) => (
          <motion.div key={area.id} variants={fadeUp}>
            <ResearchCard area={area} />
          </motion.div>
        ))}
      </motion.div>

      {/* Featured Paper */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="rounded-[var(--radius-md)] border border-white/10 bg-bg-dark-secondary p-6 sm:p-8"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <JournalBadge journal={featured.journal} journalShort={featured.journalShort} />
              <Badge variant="journal-sci" label="SCI" size="sm" />
              <Badge variant="year" label={featured.year.toString()} size="sm" />
            </div>
            <h3 className="text-heading-3 font-display mb-2 text-text-inverse">
              {featured.title}
            </h3>
            <p className="mb-3 text-sm text-text-inverse/60">
              {featured.authors.map((a) => a.name).join(', ')}
            </p>
            <p className="text-sm leading-relaxed text-text-inverse/70">
              Co-authored with Prof. Salvatore Capozziello, University of Naples
              Federico II — one of the most cited physicists in modified gravity
              globally.
            </p>
          </div>
          {featured.doiUrl && (
            <ExternalLink
              href={featured.doiUrl}
              ariaLabel="View paper on DOI"
              className="flex-shrink-0 whitespace-nowrap text-sm font-semibold"
            >
              View Paper
            </ExternalLink>
          )}
        </div>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button href="/publications" variant="primary">
          View All {publicationStats.totalJournal} Publications →
        </Button>
      </div>
    </SectionWrapper>
  )
}
