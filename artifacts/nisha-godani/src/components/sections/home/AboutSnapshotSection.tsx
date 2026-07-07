

import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { personalDetails } from '@/data/personal'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { fadeUp, fadeLeft, staggerContainer } from '@/lib/animations'

const miniTimeline = [
  { year: '2018', label: 'PhD, DEI Agra' },
  { year: '2017–2023', label: 'GLA University, Mathura' },
  { year: '2023–Now', label: 'Medi-Caps University, Indore' },
]

export function AboutSnapshotSection() {
  return (
    <SectionWrapper background="primary" ariaLabelledBy="about-snapshot-heading">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left — mathematical illustration + mini timeline */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative mb-10 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[var(--radius-lg)] border border-border bg-bg-card">
            <svg
              viewBox="0 0 400 300"
              className="h-full w-full"
              aria-hidden="true"
              role="presentation"
            >
              <defs>
                <linearGradient id="wormholeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent-gold)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--accent-teal)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {Array.from({ length: 7 }).map((_, i) => (
                <ellipse
                  key={i}
                  cx="200"
                  cy="150"
                  rx={30 + i * 22}
                  ry={14 + i * 9}
                  fill="none"
                  stroke="url(#wormholeGrad)"
                  strokeWidth="1.2"
                  opacity={1 - i * 0.1}
                />
              ))}
              <circle cx="200" cy="150" r="6" fill="var(--accent-gold)" />
            </svg>
          </div>

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 border-l border-border pl-6"
          >
            {miniTimeline.map((item) => (
              <motion.li key={item.year} variants={fadeUp} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-gold"
                />
                <span className="text-data block text-sm text-accent-gold">{item.year}</span>
                <span className="text-sm text-text-secondary">{item.label}</span>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>

        {/* Right — narrative */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionEyebrow label="About Dr. Nisha Godani" color="gold" />
          <h2
            id="about-snapshot-heading"
            className="text-heading-1 font-display mb-6 text-text-primary"
          >
            A mathematician who lives in two worlds — the abstract universe of
            wormholes and the very human world of a student struggling with calculus.
          </h2>
          <p className="mb-8 text-body-lg text-text-secondary">
            {personalDetails.fullBio[0]}
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-[15px] font-semibold text-accent-gold"
          >
            <span className="border-b border-transparent transition-colors group-hover:border-accent-gold">
              Full story
            </span>
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
