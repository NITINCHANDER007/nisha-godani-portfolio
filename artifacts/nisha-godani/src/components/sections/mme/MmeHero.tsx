

import { motion } from 'framer-motion'
import { YoutubeLogo } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { credentials, globalRecognition } from '@/data/awards'
import { WhatsAppButton } from '@/components/interactive/WhatsAppButton'
import { Button } from '@/components/ui/Button'
import { AppTooltip } from '@/components/ui/Tooltip'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function MmeHero() {
  return (
    <section className="relative overflow-hidden bg-bg-mme px-0 py-20 sm:py-24" aria-labelledby="mme-hero-heading">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, var(--accent-rose) 0%, transparent 35%), radial-gradient(circle at 80% 75%, var(--accent-gold) 0%, transparent 35%)',
        }}
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-wide relative z-10 text-center"
      >
        <motion.p variants={fadeUp} className="font-display mb-3 text-2xl font-semibold text-accent-rose sm:text-3xl">
          {mmeDetails.brandName}
        </motion.p>
        <motion.h1
          id="mme-hero-heading"
          variants={fadeUp}
          className="text-display-lg font-display mx-auto mb-6 max-w-3xl text-text-primary"
        >
          {mmeDetails.tagline}
        </motion.h1>
        <motion.p variants={fadeUp} className="text-body-lg mx-auto mb-10 max-w-2xl text-text-secondary">
          {mmeDetails.heroSubtext}
        </motion.p>

        {/* Credential strip */}
        <motion.div
          variants={fadeUp}
          className="mb-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          <span className="rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3.5 py-1.5 text-xs font-semibold text-accent-gold">
            PhD Mathematics
          </span>
          {credentials.map((c) => (
            <span
              key={c.id}
              className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3.5 py-1.5 text-xs font-semibold text-accent-blue"
            >
              {c.examName} · AIR {c.allIndiaRank}
            </span>
          ))}
          <AppTooltip content={globalRecognition.tooltipNote}>
            <span className="animate-gold-glow cursor-help rounded-full bg-accent-gold px-4 py-2 text-xs font-bold text-bg-dark">
              Top 2% Scientist · Stanford
            </span>
          </AppTooltip>
        </motion.div>

        <motion.p variants={fadeUp} className="mb-8 text-sm font-medium text-text-muted">
          {mmeDetails.credentialHighlight}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <WhatsAppButton
            phone={mmeDetails.whatsapp}
            message={mmeDetails.whatsappMessage}
            label="Book a Free Demo →"
          />
          <Button
            href={mmeDetails.youtube.url}
            variant="youtube"
            icon={<YoutubeLogo size={18} weight="fill" />}
          >
            Watch Free Lectures
          </Button>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3 text-sm text-text-muted">
          <span className="rounded-full bg-accent-teal-subtle px-3 py-1 font-semibold text-accent-teal">
            Online
          </span>
          <span aria-hidden="true">·</span>
          <span className="rounded-full bg-accent-rose-subtle px-3 py-1 font-semibold text-accent-rose">
            Offline — Indore
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
