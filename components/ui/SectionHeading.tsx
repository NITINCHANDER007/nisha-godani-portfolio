'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeUp } from '@/lib/animations'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3
  className?: string
  animate?: boolean
  id?: string
}

const levelStyles: Record<number, string> = {
  1: 'text-heading-1 font-display text-text-primary',
  2: 'text-heading-2 font-display text-text-primary',
  3: 'text-heading-3 font-body text-text-primary',
}

export function SectionHeading({
  children,
  level = 2,
  className,
  animate = true,
  id,
}: SectionHeadingProps) {
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'

  const content = (
    <Tag id={id} className={cn(levelStyles[level], className)}>
      {children}
    </Tag>
  )

  if (!animate) return content

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
      {content}
    </motion.div>
  )
}
