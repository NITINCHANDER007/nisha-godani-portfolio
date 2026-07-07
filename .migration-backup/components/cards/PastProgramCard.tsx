import { Clock, CalendarBlank, PlayCircle } from '@phosphor-icons/react/dist/ssr'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { PastProgram } from '@/types'

interface PastProgramCardProps {
  program: PastProgram
}

export function PastProgramCard({ program }: PastProgramCardProps) {
  return (
    <Card accentColor="gold" className="relative">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <Badge variant="past-program" label={`Completed · ${program.year}`} />
      </div>

      <h3 className="font-display mb-1 text-2xl font-semibold text-text-primary">
        {program.title}
      </h3>
      <p className="mb-5 text-sm text-text-secondary">{program.subtitle}</p>

      <div className="mb-5 flex flex-wrap gap-4 text-sm text-text-muted">
        <span className="flex items-center gap-1.5">
          <CalendarBlank size={16} className="text-accent-gold" />
          {program.period}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock size={16} className="text-accent-gold" />
          {program.duration}
        </span>
        <span>{program.format}</span>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-text-secondary">
        {program.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {program.topics.map((topic) => (
          <span
            key={topic}
            className="rounded-full bg-bg-secondary px-3 py-1 text-xs text-text-secondary"
          >
            {topic}
          </span>
        ))}
      </div>

      {program.extras.map((extra) => (
        <p key={extra} className="flex items-center gap-1.5 text-sm font-medium text-accent-gold">
          <PlayCircle size={16} weight="fill" />
          {extra}
        </p>
      ))}
    </Card>
  )
}
