import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] font-body font-semibold whitespace-nowrap',
  {
    variants: {
      variant: {
        credential:
          'bg-accent-blue/10 text-accent-blue border border-accent-blue/30',
        award: 'bg-accent-gold-subtle text-accent-gold border border-accent-gold-border',
        'journal-sci': 'bg-sci-green/10 text-sci-green border border-sci-green/30',
        'journal-scopus': 'bg-accent-blue/10 text-accent-blue border border-accent-blue/30',
        topic: 'bg-accent-teal-subtle text-accent-teal border border-accent-teal/25',
        year: 'bg-text-muted/10 text-text-muted border border-text-muted/20',
        'past-program': 'bg-accent-gold-hover/15 text-accent-gold-hover border border-accent-gold-hover/35',
        current: 'bg-sci-green/15 text-sci-green border border-sci-green/35',
        premium: 'bg-accent-gold text-bg-dark border border-accent-gold',
      },
      size: {
        sm: 'text-xs px-2.5 py-1',
        md: 'text-[13px] px-3.5 py-1.5',
      },
    },
    defaultVariants: {
      variant: 'topic',
      size: 'md',
    },
  },
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  label: string
  icon?: ReactNode
  className?: string
}

export function Badge({ variant, size, label, icon, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)}>
      {icon && <span aria-hidden="true">{icon}</span>}
      {label}
    </span>
  )
}
