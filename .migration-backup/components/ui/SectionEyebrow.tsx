import { cn } from '@/lib/utils'

interface SectionEyebrowProps {
  label: string
  color?: 'gold' | 'teal' | 'rose'
  className?: string
}

const colorMap: Record<string, string> = {
  gold: 'text-accent-gold',
  teal: 'text-accent-teal',
  rose: 'text-accent-rose',
}

export function SectionEyebrow({ label, color = 'gold', className }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        'text-caption mb-3 flex items-center gap-2',
        colorMap[color],
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-px w-6 bg-current opacity-60" />
      {label}
    </p>
  )
}
