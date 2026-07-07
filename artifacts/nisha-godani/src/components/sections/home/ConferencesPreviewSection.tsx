

import { motion } from 'framer-motion'
import { conferenceEvents, workshopsOrganized } from '@/data/teaching'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { TimelineCard } from '@/components/cards/TimelineCard'
import { staggerContainerFast, fadeUp } from '@/lib/animations'

export function ConferencesPreviewSection() {
  const presented = conferenceEvents
    .filter((e) => e.type === 'presented')
    .sort((a, b) => b.year - a.year)
    .slice(0, 6)

  const organizedCount = workshopsOrganized.length
  const totalEvents = conferenceEvents.length

  return (
    <SectionWrapper background="primary" ariaLabelledBy="conferences-heading">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <SectionEyebrow label="Conferences &amp; Workshops" color="gold" />
          <h2 id="conferences-heading" className="text-heading-1 font-display text-text-primary">
            {totalEvents}+ Academic Events
          </h2>
          <p className="mt-3 text-body text-text-secondary">
            From poster presentations at Dayalbagh Educational Institute to invited
            talks at GLA University, including {organizedCount} workshop organized
            under international MoU collaboration.
          </p>
        </div>
        <Button href="/about#conferences" variant="ghost">
          View full record →
        </Button>
      </div>

      <div className="relative">
        <motion.div
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin]"
          role="list"
          aria-label="Conference presentations"
        >
          {presented.map((event) => (
            <motion.div key={event.id} variants={fadeUp} role="listitem" className="snap-start">
              <TimelineCard
                year={event.year}
                title={event.paperTitle ?? event.eventName}
                location={event.location}
                type={event.type}
              />
            </motion.div>
          ))}
        </motion.div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-16 bg-gradient-to-l from-bg-primary to-transparent sm:block"
        />
      </div>
    </SectionWrapper>
  )
}
