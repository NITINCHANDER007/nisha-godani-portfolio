

import { motion } from 'framer-motion'
import { Trophy, GraduationCap, Globe, BookOpen } from '@phosphor-icons/react'
import { personalDetails } from '@/data/personal'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { staggerContainer, fadeUp, scaleIn } from '@/lib/animations'

const illustrativeTiles = [
  { id: 'tile-research', icon: Globe, label: 'Top 2% Scientist', sublabel: 'Stanford University Ranking', color: 'gold' as const },
  { id: 'tile-teaching', icon: Trophy, label: '10 Institutional Awards', sublabel: 'GLA University, 2018–2022', color: 'rose' as const },
  { id: 'tile-education', icon: GraduationCap, label: 'PhD Mathematics', sublabel: 'Dayalbagh Educational Institute', color: 'teal' as const },
  { id: 'tile-publications', icon: BookOpen, label: '50+ Publications', sublabel: 'SCI-Indexed International Journals', color: 'blue' as const },
]

const colorMap: Record<string, string> = {
  gold: 'bg-accent-gold-subtle text-accent-gold',
  rose: 'bg-accent-rose-subtle text-accent-rose',
  teal: 'bg-accent-teal-subtle text-accent-teal',
  blue: 'bg-accent-blue/10 text-accent-blue',
}

export function GalleryPreviewSection() {
  return (
    <SectionWrapper background="secondary" ariaLabelledBy="gallery-heading">
      <div className="mb-12 text-center">
        <SectionEyebrow label="Moments &amp; Milestones" color="gold" className="justify-center" />
        <h2 id="gallery-heading" className="text-heading-1 font-display text-text-primary">
          A Career in Snapshots
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] border border-border shadow-card"
        >
          <PortraitImage
            variant="fill"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-sm font-medium text-white">
              {personalDetails.displayName} — {personalDetails.institution}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-5"
        >
          {illustrativeTiles.map((tile) => {
            const Icon = tile.icon
            return (
              <motion.div
                key={tile.id}
                variants={fadeUp}
                className="flex flex-col items-center justify-center rounded-[var(--radius-lg)] border border-border bg-bg-card p-6 text-center shadow-card"
              >
                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${colorMap[tile.color]}`}>
                  <Icon size={22} weight="duotone" />
                </div>
                <p className="text-sm font-semibold text-text-primary">{tile.label}</p>
                <p className="mt-1 text-xs text-text-muted">{tile.sublabel}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
