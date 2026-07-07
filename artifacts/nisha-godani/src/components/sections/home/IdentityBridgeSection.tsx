

import { Link } from 'wouter'
import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { fadeLeft, fadeRight } from '@/lib/animations'

export function IdentityBridgeSection() {
  return (
    <section
      aria-label="Researcher and Educator identity"
      className="grid grid-cols-1 md:grid-cols-2"
    >
      <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <Link
          href="/research"
          className="group flex h-32 items-center justify-center bg-bg-dark-secondary px-6 transition-colors hover:bg-bg-dark sm:h-44 md:h-52"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="text-right">
              <p className="text-caption mb-2 text-accent-teal">Researcher</p>
              <p className="font-display max-w-xs text-xl font-light text-text-inverse sm:text-2xl">
                Bending Mathematics to Understand the Universe
              </p>
            </div>
            <ArrowRight
              size={24}
              className="flex-shrink-0 text-accent-teal transition-transform duration-200 group-hover:translate-x-2"
              aria-hidden="true"
            />
          </div>
        </Link>
      </motion.div>

      <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <Link
          href="/make-maths-easy"
          className="group flex h-32 items-center justify-center bg-bg-mme px-6 transition-colors hover:brightness-95 sm:h-44 md:h-52"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <ArrowRight
              size={24}
              className="hidden flex-shrink-0 text-accent-rose transition-transform duration-200 group-hover:translate-x-2 sm:block"
              aria-hidden="true"
            />
            <div className="text-left">
              <p className="text-caption mb-2 text-accent-rose">Educator</p>
              <p className="font-display max-w-xs text-xl font-light text-text-primary sm:text-2xl">
                Making Mathematics Possible for Every Student
              </p>
            </div>
            <ArrowRight
              size={24}
              className="flex-shrink-0 text-accent-rose transition-transform duration-200 group-hover:translate-x-2 sm:hidden"
              aria-hidden="true"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  )
}
