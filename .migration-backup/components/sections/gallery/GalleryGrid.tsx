'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  GraduationCap,
  Trophy,
  Globe,
  ChalkboardTeacher,
  Atom,
  Users,
} from '@phosphor-icons/react'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { publicationStats } from '@/data/publications'
import { formatNumber } from '@/lib/utils'

const tiles = [
  {
    icon: Globe,
    heading: 'Top 2% Scientist',
    body: 'Stanford University Citation Impact Ranking — Physics & Astronomy — Three Consecutive Years',
    accent: 'text-accent-gold',
    bg: 'bg-accent-gold-subtle border-accent-gold/30',
  },
  {
    icon: BookOpen,
    heading: `${publicationStats.headlineCount}+ Publications`,
    body: `${formatNumber(publicationStats.totalCitations)}+ citations in SCI-indexed international journals including Physics Letters B, Annals of Physics, and European Physical Journal.`,
    accent: 'text-accent-teal',
    bg: 'bg-accent-teal-subtle border-accent-teal/30',
  },
  {
    icon: Trophy,
    heading: 'Chancellor Award',
    body: 'Highest institutional award at GLA University for Excellent Performance in Classroom Teaching — awarded for three consecutive academic years.',
    accent: 'text-accent-rose',
    bg: 'bg-accent-rose-subtle border-accent-rose/30',
  },
  {
    icon: GraduationCap,
    heading: "Director's Medal",
    body: 'Awarded for securing highest marks in M.Phil. Mathematics Examination at Dayalbagh Educational Institute (Deemed University), 2011.',
    accent: 'text-accent-gold',
    bg: 'bg-accent-gold-subtle border-accent-gold/30',
  },
  {
    icon: Atom,
    heading: 'Physics Letters B',
    body: 'Published in Physics Letters B (2022) alongside Prof. Salvatore Capozziello, University of Naples Federico II — one of the world\'s most cited physicists in modified gravity.',
    accent: 'text-accent-teal',
    bg: 'bg-accent-teal-subtle border-accent-teal/30',
  },
  {
    icon: ChalkboardTeacher,
    heading: 'Make Maths Easy Classes',
    body: 'Founder of Make Maths Easy Classes, Indore — bringing PhD-level mathematical clarity to students from 9th grade through competitive examinations.',
    accent: 'text-accent-rose',
    bg: 'bg-accent-rose-subtle border-accent-rose/30',
  },
  {
    icon: Users,
    heading: 'International Collaborations',
    body: 'Research collaborations spanning Naples (Italy), Barcelona (Spain), Nagoya (Japan), and across India — a truly global mathematics research network.',
    accent: 'text-accent-gold',
    bg: 'bg-accent-gold-subtle border-accent-gold/30',
  },
  {
    icon: Globe,
    heading: 'NET AIR 40 · GATE AIR 90 · JAM AIR 166',
    body: 'Qualified all three major national mathematics competitive examinations with outstanding All India Ranks — the same examinations taught at Make Maths Easy Classes.',
    accent: 'text-accent-blue',
    bg: 'bg-accent-blue/10 border-accent-blue/30',
  },
]

export function GalleryGrid() {
  return (
    <div>
      <h2 className="text-heading-2 font-display mb-8 text-text-primary">
        Career Highlights
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {tiles.map((tile, i) => {
          const Icon = tile.icon
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-[var(--radius-md)] border p-6 shadow-card ${tile.bg}`}
            >
              <div className={`mb-3 ${tile.accent}`}>
                <Icon size={24} weight="duotone" />
              </div>
              <h3 className={`mb-2 text-sm font-bold ${tile.accent}`}>{tile.heading}</h3>
              <p className="text-xs leading-relaxed text-text-secondary">{tile.body}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
