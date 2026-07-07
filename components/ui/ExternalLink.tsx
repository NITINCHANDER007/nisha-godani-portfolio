import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  showIcon?: boolean
  className?: string
  ariaLabel?: string
}

export function ExternalLink({
  href,
  children,
  showIcon = true,
  className,
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (opens in new tab)` : undefined}
      className={cn(
        'inline-flex items-center gap-1.5 text-accent-gold transition-colors hover:text-accent-gold-hover',
        className,
      )}
    >
      {children}
      {showIcon && (
        <ArrowSquareOut size={14} className="opacity-60" aria-hidden="true" />
      )}
    </a>
  )
}
