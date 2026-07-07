

import { motion } from 'framer-motion'
import { Monitor, Question, ClipboardText, UserFocus } from '@phosphor-icons/react'
import type { ComponentType } from 'react'
import { mmeDetails } from '@/data/mme'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { staggerContainer, fadeUp } from '@/lib/animations'

type IconComponent = ComponentType<{ size?: number; weight?: 'fill' | 'duotone' | 'regular' | 'bold' | 'light' | 'thin' }>

const iconMap: Record<string, IconComponent> = {
  Monitor,
  Question,
  ClipboardText,
  UserFocus,
}

export function ClassFeatures() {
  return (
    <div>
      <SectionEyebrow label="How Classes Work" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Learning Designed Around You
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {mmeDetails.features.map((feature) => {
          const Icon = iconMap[feature.icon] ?? Monitor
          return (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              className="rounded-[var(--radius-lg)] border border-border bg-bg-card p-7 text-center shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-rose-subtle text-accent-rose">
                <Icon size={26} weight="duotone" />
              </div>
              <h3 className="text-heading-3 font-body mb-2 text-base text-text-primary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
