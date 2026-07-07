

import { motion } from 'framer-motion'
import { Microphone } from '@phosphor-icons/react'
import { invitedTalks } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Card } from '@/components/ui/Card'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function InvitedTalks() {
  return (
    <div>
      <SectionEyebrow label="Invited Lectures &amp; Talks" color="gold" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Sharing Expertise Beyond the Classroom
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2"
      >
        {invitedTalks.map((talk) => (
          <motion.div key={talk.id} variants={fadeUp}>
            <Card accentColor="gold" className="h-full">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent-gold-subtle text-accent-gold">
                <Microphone size={18} weight="fill" />
              </div>
              <h3 className="text-heading-3 font-body mb-2 text-base text-text-primary">
                &ldquo;{talk.title}&rdquo;
              </h3>
              <p className="mb-1 text-sm text-text-secondary">{talk.event}</p>
              <p className="text-data text-xs text-text-muted">
                {talk.venue} · {talk.dateRange}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
