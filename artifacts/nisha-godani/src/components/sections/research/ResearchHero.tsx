

import { motion } from 'framer-motion'
import { Link } from 'wouter'
import { publicationStats } from '@/data/publications'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { formatNumber } from '@/lib/utils'

const quickNav = [
  { label: 'Research Areas', href: '#research-areas' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Featured Work', href: '#featured-papers' },
  { label: 'Collaborations', href: '#collaborations' },
]

export function ResearchHero() {
  return (
    <section className="bg-bg-dark px-0 py-16 text-text-inverse sm:py-20" aria-labelledby="research-hero-heading">
      <div className="container-wide">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="text-caption mb-4 text-accent-teal">
            Research Portfolio
          </motion.p>
          <motion.h1
            id="research-hero-heading"
            variants={fadeUp}
            className="text-display-lg font-display mb-6 text-text-inverse"
          >
            Mathematical Structures of Gravity and Spacetime
          </motion.h1>
          <motion.p variants={fadeUp} className="text-body-lg mb-10 text-text-inverse/70">
            {publicationStats.headlineCount}+ publications · {formatNumber(publicationStats.totalCitations)}+
            citations · SCI indexed · International collaborations across Italy, Spain, and Japan
          </motion.p>

          <motion.nav
            variants={fadeUp}
            aria-label="Research page sections"
            className="flex flex-wrap gap-3"
          >
            {quickNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-text-inverse/80 transition-colors hover:border-accent-gold hover:text-accent-gold"
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        </motion.div>
      </div>
    </section>
  )
}
