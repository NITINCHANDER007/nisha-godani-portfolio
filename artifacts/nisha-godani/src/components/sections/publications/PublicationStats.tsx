

import { motion } from 'framer-motion'
import { publicationStats } from '@/data/publications'
import { Counter } from '@/components/interactive/Counter'
import { staggerContainerFast, fadeUp } from '@/lib/animations'

export function PublicationStatsBanner() {
  return (
    <motion.div
      variants={staggerContainerFast}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 grid grid-cols-2 gap-4 rounded-[var(--radius-md)] border border-border bg-bg-card p-6 shadow-card sm:grid-cols-5 sm:p-8"
    >
      <motion.div variants={fadeUp}>
        <Counter target={publicationStats.totalJournal} label="Journal Papers" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter target={publicationStats.totalConference} label="Conference Papers" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter target={publicationStats.totalCitations} suffix="+" label="Citations (ResearchGate)" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter target={publicationStats.sciPapers} suffix="+" label="SCI Papers" />
      </motion.div>
      <motion.div variants={fadeUp}>
        <Counter target={publicationStats.scopusPapers} label="SCOPUS Papers" />
      </motion.div>
    </motion.div>
  )
}
