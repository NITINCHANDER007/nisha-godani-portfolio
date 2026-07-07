'use client'

import { X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface ChipProps {
  label: string
  onRemove?: () => void
  className?: string
}

export function Chip({ label, onRemove, className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-border bg-bg-card px-3 py-1.5 text-sm text-text-secondary',
        className,
      )}
    >
      {label}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove filter: ${label}`}
          className="text-text-muted hover:text-accent-gold transition-colors"
        >
          <X size={14} weight="bold" />
        </button>
      )}
    </span>
  )
}
