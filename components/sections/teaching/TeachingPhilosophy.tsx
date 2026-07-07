'use client'

import { motion } from 'framer-motion'
import { Quotes } from '@phosphor-icons/react'
import { fadeUp } from '@/lib/animations'

export function TeachingPhilosophy() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto max-w-3xl text-center"
    >
      <Quotes size={36} weight="fill" className="mx-auto mb-6 text-accent-gold/40" />
      <blockquote className="font-display mb-6 text-2xl font-light italic leading-snug text-text-inverse sm:text-3xl">
        &ldquo;Mathematics is not a subject to fear. It is a language to learn. Every
        student who says &lsquo;I can&apos;t do maths&rsquo; is simply waiting for the
        right teacher.&rdquo;
      </blockquote>
      <cite className="text-sm font-medium not-italic text-accent-gold">
        — Dr. Nisha Godani
      </cite>
    </motion.div>
  )
}
