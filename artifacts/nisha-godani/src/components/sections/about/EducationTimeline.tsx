

import { motion } from 'framer-motion'
import { GraduationCap, Medal, Star } from '@phosphor-icons/react'
import { educationEntries, competitiveExams } from '@/data/education'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp, timelineDot } from '@/lib/animations'

type TimelineEntry = {
  id: string
  year: number
  title: string
  subtitle: string
  detail?: string
  icon: 'graduation' | 'medal' | 'star'
}

export function EducationTimeline() {
  const entries: TimelineEntry[] = [
    ...competitiveExams.map((exam) => ({
      id: exam.id,
      year: exam.year,
      title: `${exam.examName} Qualification`,
      subtitle: `All India Rank ${exam.allIndiaRank}`,
      detail: exam.fullName,
      icon: 'star' as const,
    })),
    ...educationEntries.map((edu) => ({
      id: edu.id,
      year: edu.year,
      title: edu.degree,
      subtitle: edu.institutionShort,
      detail: edu.achievement,
      icon: (edu.type === 'mphil' ? 'medal' : 'graduation') as 'medal' | 'graduation',
    })),
  ].sort((a, b) => a.year - b.year)

  const iconMap = { graduation: GraduationCap, medal: Medal, star: Star }

  return (
    <div>
      <SectionEyebrow label="Educational Journey" color="gold" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        From JAM to PhD — A Decade of Mastery
      </h2>

      <motion.ol
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-7 border-l-2 border-border pl-7 sm:pl-9"
      >
        {entries.map((entry) => {
          const Icon = iconMap[entry.icon]
          return (
            <motion.li key={entry.id} variants={fadeUp} className="relative">
              <motion.span
                variants={timelineDot}
                aria-hidden="true"
                className="absolute -left-[37px] top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-accent-gold text-bg-dark sm:-left-[45px]"
              >
                <Icon size={12} weight="fill" />
              </motion.span>
              <p className="text-data mb-1 text-sm text-accent-gold">{entry.year}</p>
              <h3 className="font-display mb-1 text-xl font-semibold text-text-primary">
                {entry.title}
              </h3>
              <p className="mb-1 text-sm text-text-secondary">{entry.subtitle}</p>
              {entry.detail && (
                <p className="text-sm text-text-muted">{entry.detail}</p>
              )}
            </motion.li>
          )
        })}
      </motion.ol>
    </div>
  )
}
