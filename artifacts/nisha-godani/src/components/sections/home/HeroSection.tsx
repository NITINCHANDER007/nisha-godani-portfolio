

import React, { Suspense } from 'react'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { motion } from 'framer-motion'
import { GraduationCap, Star, Globe } from '@phosphor-icons/react'
import { personalDetails } from '@/data/personal'
import { credentials, globalRecognition } from '@/data/awards'
import { publicationStats } from '@/data/publications'
import { awards } from '@/data/awards'
import { Button } from '@/components/ui/Button'
import { Counter } from '@/components/interactive/Counter'
import { AppTooltip } from '@/components/ui/Tooltip'
import {
  heroName,
  heroTitle,
  heroCtas,
  heroBadges,
  heroPortrait,
  staggerContainerFast,
} from '@/lib/animations'
import { CONFERENCE_EVENT_COUNT } from '@/lib/constants'

const MeshCanvas = React.lazy(
  () => import('@/components/interactive/MeshCanvas').then((m) => ({ default: m.MeshCanvas })),
)

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-bg-hero pt-28 pb-16 text-text-inverse md:pt-32"
      aria-labelledby="hero-heading"
    >
      <Suspense fallback={null}><MeshCanvas /></Suspense>

      {/* Gold glow radial */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 600px 500px at 30% 55%, rgba(201,168,76,0.12) 0%, transparent 60%), radial-gradient(ellipse 500px 400px at 75% 30%, rgba(45,212,191,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="container-wide relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8">
        {/* Left column — identity */}
        <div>
          <motion.p
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="text-caption mb-5 text-accent-teal"
          >
            {personalDetails.tagline}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={heroName}
            initial="hidden"
            animate="visible"
            className="text-display-xl font-display text-text-inverse"
          >
            Dr. Nisha
            <br />
            Godani
          </motion.h1>

          <motion.p
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="mt-5 text-lg text-text-inverse/70"
          >
            {personalDetails.department} · {personalDetails.institution}
          </motion.p>

          <motion.div
            aria-hidden="true"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 40, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="my-8 h-[2px] bg-accent-gold"
          />

          <motion.div variants={heroTitle} initial="hidden" animate="visible" className="space-y-3">
            <p className="max-w-xl text-body-lg text-text-inverse/80">
              {personalDetails.researchDescription}
            </p>
            <p className="max-w-xl text-body-lg text-text-inverse/80">
              {personalDetails.teachingDescription}
            </p>
          </motion.div>

          <motion.div
            variants={heroCtas}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="/research" variant="primary" size="md">
              Explore Research →
            </Button>
            <Button href="/make-maths-easy" variant="secondary" size="md" className="text-text-inverse">
              Make Maths Easy Classes →
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            <Counter target={publicationStats.headlineCount} suffix="+" label="Publications" />
            <Counter target={publicationStats.totalCitations} suffix="+" label="Citations" />
            <Counter target={awards.length} suffix="+" label="Awards" />
            <Counter target={CONFERENCE_EVENT_COUNT} suffix="+" label="Conferences" />
          </motion.div>
        </div>

        {/* Right column — portrait + badges */}
        <div className="flex flex-col items-center">
          <motion.div
            variants={heroPortrait}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
              }}
            />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-accent-gold p-2 sm:h-80 sm:w-80">
              <PortraitImage
                size="md"
                priority={true}
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px"
              />
            </div>
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            variants={staggerContainerFast}
            initial="hidden"
            animate="visible"
            className="mt-8 flex max-w-sm flex-wrap items-center justify-center gap-2.5"
          >
            <motion.span
              variants={heroBadges}
              className="inline-flex items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3.5 py-1.5 text-xs font-semibold text-accent-gold"
            >
              <GraduationCap size={14} weight="fill" />
              PhD Mathematics
            </motion.span>
            {credentials.map((c) => (
              <motion.span
                key={c.id}
                variants={heroBadges}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent-gold/40 bg-accent-gold/10 px-3.5 py-1.5 text-xs font-semibold text-accent-gold"
              >
                <Star size={14} weight="fill" />
                {c.examName} · AIR {c.allIndiaRank}
              </motion.span>
            ))}
            <AppTooltip content={globalRecognition.tooltipNote}>
              <motion.span
                variants={heroBadges}
                className="animate-gold-glow inline-flex cursor-help items-center gap-1.5 rounded-full bg-accent-gold px-4 py-2 text-xs font-bold text-bg-dark"
              >
                <Globe size={14} weight="fill" />
                Top 2% Scientist · Stanford
              </motion.span>
            </AppTooltip>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden="true"
      >
        <span className="text-caption text-text-inverse/40">Scroll to explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-8 w-px bg-gradient-to-b from-accent-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
