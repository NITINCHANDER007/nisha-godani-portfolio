import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface IconWrapperProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  color?: 'gold' | 'teal' | 'rose' | 'blue'
  className?: string
}

const sizeMap: Record<string, string> = {
  sm: 'h-9 w-9',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
}

const colorMap: Record<string, string> = {
  gold: 'bg-accent-gold-subtle text-accent-gold',
  teal: 'bg-accent-teal-subtle text-accent-teal',
  rose: 'bg-accent-rose-subtle text-accent-rose',
  blue: 'bg-accent-blue/10 text-accent-blue',
}

export function IconWrapper({ children, size = 'md', color = 'gold', className }: IconWrapperProps) {
  return (
    <div
      className={cn(
        'flex flex-shrink-0 items-center justify-center rounded-[var(--radius-base)]',
        sizeMap[size],
        colorMap[color],
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}
