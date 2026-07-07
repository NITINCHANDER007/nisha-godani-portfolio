

import { motion } from 'framer-motion'
import { ChalkboardSimple, Globe } from '@phosphor-icons/react'
import { workshopsOrganized } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { fadeUp } from '@/lib/animations'

export function WorkshopsOrganized() {
  return (
    <div>
      <SectionEyebrow label="Workshops Organized" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Building International Academic Bridges
      </h2>

      <div className="space-y-5">
        {workshopsOrganized.map((workshop) => (
          <motion.div
            key={workshop.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[var(--radius-md)] border border-accent-rose/25 bg-accent-rose-subtle p-7"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-accent-rose text-white">
              <ChalkboardSimple size={20} weight="fill" />
            </div>
            <h3 className="font-display mb-1 text-xl font-semibold text-text-primary">
              {workshop.title}
            </h3>
            <p className="mb-3 text-sm text-text-secondary">{workshop.subtitle}</p>
            <p className="text-data mb-4 text-xs text-text-muted">
              {workshop.venue} · {workshop.date}
            </p>
            {workshop.collaboratingInstitution && (
              <div className="flex items-start gap-2 rounded-[var(--radius-base)] border border-accent-rose/20 bg-bg-card p-4">
                <Globe size={16} className="mt-0.5 flex-shrink-0 text-accent-rose" />
                <p className="text-sm text-text-secondary">
                  {workshop.mou}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
