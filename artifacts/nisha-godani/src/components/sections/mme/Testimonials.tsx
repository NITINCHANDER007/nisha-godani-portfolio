

import { motion } from 'framer-motion'
import { Star } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function Testimonials() {
  return (
    <div>
      <SectionEyebrow label="What Students Say" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Results That Speak
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {mmeDetails.testimonials.map((t) => (
          <motion.div
            key={t.id}
            variants={fadeUp}
            className="flex flex-col rounded-[var(--radius-lg)] border border-border bg-bg-card p-7 shadow-card"
          >
            <div className="mb-4 flex gap-0.5" aria-label={`Rating: ${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} weight="fill" className="text-accent-gold" />
              ))}
            </div>
            <blockquote className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-text-primary">{t.studentName}</p>
              <p className="text-xs text-text-muted">{t.level}</p>
              {t.course && (
                <p className="mt-0.5 text-xs text-text-muted">{t.course}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
