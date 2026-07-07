'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { cardHoverVariants } from '@/lib/animations'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
  accentColor?: 'gold' | 'teal' | 'rose' | 'blue'
  as?: 'div' | 'article'
}

const accentBorderMap: Record<string, string> = {
  gold: 'group-hover:border-l-accent-gold',
  teal: 'group-hover:border-l-accent-teal',
  rose: 'group-hover:border-l-accent-rose',
  blue: 'group-hover:border-l-accent-blue',
}

export function Card({
  children,
  className,
  hoverable = true,
  accentColor = 'gold',
  as = 'div',
}: CardProps) {
  const Tag = as === 'article' ? motion.article : motion.div

  return (
    <Tag
      className={cn(
        'group relative rounded-[var(--radius-md)] border border-border bg-bg-card p-6 shadow-card',
        'border-l-2 border-l-transparent transition-colors duration-200',
        hoverable && accentBorderMap[accentColor],
        className,
      )}
      initial="rest"
      whileHover={hoverable ? 'hover' : undefined}
      variants={hoverable ? cardHoverVariants : undefined}
      style={hoverable ? { boxShadow: 'var(--shadow-card)' } : undefined}
    >
      {children}
    </Tag>
  )
}
