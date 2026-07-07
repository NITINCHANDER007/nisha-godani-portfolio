

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Monitor, MapPin, ArrowSquareOut } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { personalDetails } from '@/data/personal'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { fadeLeft, fadeRight } from '@/lib/animations'

export function DeliveryModes() {
  const [mapLoaded, setMapLoaded] = useState(false)

  return (
    <div>
      <SectionEyebrow label="Online &amp; Offline" color="teal" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Learn However Works Best for You
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {mmeDetails.deliveryModes.map((mode) => (
          <motion.div
            key={mode.mode}
            variants={mode.mode === 'online' ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[var(--radius-lg)] border border-border bg-bg-card p-7 shadow-card"
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className={
                  mode.mode === 'online'
                    ? 'flex h-11 w-11 items-center justify-center rounded-full bg-accent-teal-subtle text-accent-teal'
                    : 'flex h-11 w-11 items-center justify-center rounded-full bg-accent-rose-subtle text-accent-rose'
                }
              >
                {mode.mode === 'online' ? <Monitor size={20} /> : <MapPin size={20} />}
              </div>
              <h3 className="text-heading-3 font-body text-text-primary">{mode.title}</h3>
            </div>
            <p className="mb-2 text-sm text-text-secondary">{mode.description}</p>
            {mode.platform && (
              <p className="text-data mb-4 text-xs text-text-muted">{mode.platform}</p>
            )}
            <ul className="mb-6 space-y-2">
              {mode.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                  <span
                    aria-hidden="true"
                    className={
                      mode.mode === 'online'
                        ? 'mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-teal'
                        : 'mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-rose'
                    }
                  />
                  {f}
                </li>
              ))}
            </ul>

            {mode.mode === 'offline' && (
              <div className="mb-6">
                {!mapLoaded ? (
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="flex h-40 w-full flex-col items-center justify-center gap-2 rounded-[var(--radius-base)] border border-dashed border-border bg-bg-secondary text-text-muted transition-colors hover:border-accent-rose hover:text-accent-rose"
                  >
                    <MapPin size={24} />
                    <span className="text-sm font-medium">Click to load map</span>
                  </button>
                ) : (
                  <iframe
                    title="Make Maths Easy Classes location"
                    src={personalDetails.contact.mme.googleMapsEmbedUrl}
                    className="h-40 w-full rounded-[var(--radius-base)] border border-border"
                    loading="lazy"
                  />
                )}
              </div>
            )}

            <Button
              href={mode.cta.href}
              variant="secondary"
              size="sm"
              icon={mode.mode === 'offline' ? <ArrowSquareOut size={16} /> : undefined}
            >
              {mode.cta.label}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
