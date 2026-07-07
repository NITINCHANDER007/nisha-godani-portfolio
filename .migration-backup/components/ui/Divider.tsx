import { cn } from '@/lib/utils'

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'subtle' | 'accent'
  className?: string
}

export function Divider({ orientation = 'horizontal', variant = 'subtle', className }: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <span
        aria-hidden="true"
        className={cn(
          'inline-block w-px self-stretch',
          variant === 'accent' ? 'bg-accent-gold/40' : 'bg-border',
          className,
        )}
      />
    )
  }

  return (
    <hr
      aria-hidden="true"
      className={cn(
        'border-0 h-px w-full',
        variant === 'accent' ? 'bg-accent-gold/40' : 'bg-border',
        className,
      )}
    />
  )
}
