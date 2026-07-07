

import { motion } from 'framer-motion'
import { subjects } from '@/data/teaching'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SubjectCard } from '@/components/cards/SubjectCard'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function SubjectGrid() {
  return (
    <div>
      <SectionEyebrow label="Subjects Taught" color="rose" />
      <h2 className="text-heading-2 font-display mb-10 text-text-primary">
        Pure to Applied — A Broad Mathematical Range
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {subjects.map((subject) => (
          <motion.div key={subject.id} variants={fadeUp}>
            <SubjectCard subject={subject} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
