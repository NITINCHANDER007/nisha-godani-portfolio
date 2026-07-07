'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { sectionReveal } from '@/lib/animations'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  background?: 'primary' | 'secondary' | 'dark' | 'mme' | 'card'
  id?: string
  ariaLabelledBy?: string
  fullBleed?: boolean
  animate?: boolean
}

const bgMap: Record<string, string> = {
  primary: 'bg-bg-primary',
  secondary: 'bg-bg-secondary',
  dark: 'bg-bg-dark text-text-inverse',
  mme: 'bg-bg-mme',
  card: 'bg-bg-card',
}

export function SectionWrapper({
  children,
  className,
  background = 'primary',
  id,
  ariaLabelledBy,
  fullBleed = false,
  animate = true,
}: SectionWrapperProps) {
  const inner = (
    <div className={fullBleed ? '' : 'container-wide'}>{children}</div>
  )

  const sharedProps = {
    id,
    'aria-labelledby': ariaLabelledBy,
    className: cn('section-padding', bgMap[background], className),
  }

  if (!animate) {
    return <section {...sharedProps}>{inner}</section>
  }

  return (
    <motion.section
      {...sharedProps}
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {inner}
    </motion.section>
  )
}
