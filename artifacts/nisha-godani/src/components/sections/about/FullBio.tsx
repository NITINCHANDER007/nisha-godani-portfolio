

import { motion } from 'framer-motion'
import { personalDetails } from '@/data/personal'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function FullBio() {
  return (
    <div>
      <h2 className="text-heading-1 font-display mb-8 text-text-primary">
        The Mathematician Behind the Research
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-5"
      >
        {personalDetails.fullBio.map((paragraph, i) => (
          <motion.p
            key={i}
            variants={fadeUp}
            className="text-body-lg leading-relaxed text-text-secondary"
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </div>
  )
}
