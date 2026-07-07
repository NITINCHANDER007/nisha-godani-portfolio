'use client'

import { motion } from 'framer-motion'
import { Monitor, Question, ClipboardText, UserFocus, YoutubeLogo, MapPin } from '@phosphor-icons/react'
import type { ComponentType } from 'react'
import { mmeDetails } from '@/data/mme'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { PastProgramCard } from '@/components/cards/PastProgramCard'
import { staggerContainer, fadeUp } from '@/lib/animations'

type IconComponent = ComponentType<{ size?: number; weight?: 'fill' | 'duotone' | 'regular' | 'bold' | 'light' | 'thin' }>

const iconMap: Record<string, IconComponent> = {
  Monitor,
  Question,
  ClipboardText,
  UserFocus,
}

export function MmePreviewSection() {
  return (
    <SectionWrapper
      background="mme"
      ariaLabelledBy="mme-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, var(--accent-rose) 0%, transparent 35%), radial-gradient(circle at 85% 80%, var(--accent-gold) 0%, transparent 35%)',
        }}
      />

      <div className="relative z-10">
        <div className="mb-10 text-center">
          <p className="font-display mb-3 text-3xl font-semibold text-accent-gold sm:text-4xl">
            {mmeDetails.brandName}
          </p>
          <h2 id="mme-heading" className="text-heading-1 font-display mx-auto max-w-2xl text-text-primary">
            {mmeDetails.tagline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-text-secondary">
            {mmeDetails.credentialHighlight}
          </p>
        </div>

        {/* Features */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {mmeDetails.features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Monitor
            return (
              <motion.div
                key={feature.id}
                variants={fadeUp}
                className="rounded-[var(--radius-md)] border border-border bg-bg-card p-6 text-center shadow-card"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-rose-subtle text-accent-rose">
                  <Icon size={22} weight="duotone" />
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

        {/* Course levels */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-wrap justify-center gap-2.5"
        >
          {mmeDetails.audienceLevels.map((level) => (
            <motion.span
              key={level.level}
              variants={fadeUp}
              className="rounded-full border border-border bg-bg-card px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {level.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Online + Offline */}
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {mmeDetails.deliveryModes.map((mode) => (
            <div
              key={mode.mode}
              className="rounded-[var(--radius-md)] border border-border bg-bg-card p-6 shadow-card"
            >
              <div className="mb-3 flex items-center gap-2">
                {mode.mode === 'online' ? (
                  <Monitor size={20} className="text-accent-teal" />
                ) : (
                  <MapPin size={20} className="text-accent-rose" />
                )}
                <h3 className="text-heading-3 font-body text-base text-text-primary">
                  {mode.title}
                </h3>
              </div>
              <p className="mb-4 text-sm text-text-secondary">{mode.description}</p>
              <ul className="space-y-1.5">
                {mode.features.slice(0, 3).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span aria-hidden="true" className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent-gold" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Past Programs */}
        <div className="mb-12">
          <p className="text-caption mb-5 text-center text-text-muted">
            Past Programs · Specialized Courses · Academic Outreach
          </p>
          <div className="mx-auto max-w-2xl">
            {mmeDetails.pastPrograms.map((program) => (
              <PastProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton phone={mmeDetails.whatsapp} message={mmeDetails.whatsappMessage} label="Enquire Now" />
          <Button
            href={mmeDetails.youtube.url}
            variant="youtube"
            icon={<YoutubeLogo size={18} weight="fill" />}
          >
            Free Lectures
          </Button>
          <Button href="/make-maths-easy" variant="ghost">
            Explore Make Maths Easy →
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
