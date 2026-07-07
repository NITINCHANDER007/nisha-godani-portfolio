import { Presentation, Users, ChalkboardSimple } from '@phosphor-icons/react/dist/ssr'
import { cn } from '@/lib/utils'

interface TimelineCardProps {
  year: number
  title: string
  location: string
  type: 'presented' | 'attended' | 'organized'
  className?: string
}

const typeConfig: Record<
  string,
  { icon: React.ComponentType<{ size?: number; weight?: 'fill' | 'duotone' | 'regular' }>; label: string; color: string }
> = {
  presented: { icon: Presentation, label: 'Presented', color: 'text-accent-gold bg-accent-gold-subtle' },
  attended: { icon: Users, label: 'Attended', color: 'text-accent-teal bg-accent-teal-subtle' },
  organized: { icon: ChalkboardSimple, label: 'Organized', color: 'text-accent-rose bg-accent-rose-subtle' },
}

export function TimelineCard({ year, title, location, type, className }: TimelineCardProps) {
  const config = typeConfig[type]
  const Icon = config.icon

  return (
    <div
      className={cn(
        'flex-shrink-0 rounded-[var(--radius-md)] border border-border bg-bg-card p-5 shadow-card',
        'w-72 sm:w-80',
        className,
      )}
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-data text-sm text-accent-gold">{year}</span>
        <span className={cn('flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold', config.color)}>
          <Icon size={12} weight="fill" />
          {config.label}
        </span>
      </div>
      <p className="mb-1.5 line-clamp-2 text-sm font-semibold leading-snug text-text-primary">
        {title}
      </p>
      <p className="line-clamp-1 text-xs text-text-muted">{location}</p>
    </div>
  )
}
