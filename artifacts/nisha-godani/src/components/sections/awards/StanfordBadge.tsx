

import { motion } from 'framer-motion'
import { Globe } from '@phosphor-icons/react'
import { globalRecognition } from '@/data/awards'
import { AppTooltip } from '@/components/ui/Tooltip'
import { scaleIn } from '@/lib/animations'

export function StanfordBadge() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="mx-auto mb-16 max-w-2xl"
    >
      <AppTooltip content={globalRecognition.tooltipNote}>
        <div className="gold-shimmer-border relative cursor-help overflow-hidden rounded-[var(--radius-lg)] p-10 text-center shadow-glow-gold sm:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 20%, rgba(201,168,76,0.18) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(201,168,76,0.1) 0%, transparent 50%)',
            }}
          />
          {/* Orbiting particles */}
          <span
            aria-hidden="true"
            className="animate-spin-slow absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 opacity-40"
            style={{ animationDuration: '20s' }}
          >
            <span className="absolute left-0 top-1/2 h-1.5 w-1.5 rounded-full bg-accent-gold" />
            <span className="absolute right-0 top-1/3 h-1 w-1 rounded-full bg-accent-gold" />
            <span className="absolute bottom-0 left-1/3 h-1 w-1 rounded-full bg-accent-gold" />
          </span>

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-accent-gold text-bg-dark shadow-glow-gold">
              <Globe size={40} weight="fill" />
            </div>
            <p className="font-display mb-2 text-3xl font-semibold text-text-primary sm:text-4xl">
              Top 2% Scientist in the World
            </p>
            <p className="mb-2 text-lg font-medium text-accent-gold">
              {globalRecognition.category}
            </p>
            <p className="text-sm text-text-muted">
              {globalRecognition.authority}
              <br />
              {globalRecognition.duration}
            </p>
          </div>
        </div>
      </AppTooltip>
    </motion.div>
  )
}
