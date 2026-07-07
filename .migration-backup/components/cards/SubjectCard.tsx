import { Card } from '@/components/ui/Card'
import type { Subject } from '@/types'

const categoryColorMap: Record<string, 'gold' | 'teal' | 'rose' | 'blue'> = {
  'pure-math': 'gold',
  'applied-math': 'teal',
  statistics: 'rose',
  'business-math': 'blue',
}

interface SubjectCardProps {
  subject: Subject
}

export function SubjectCard({ subject }: SubjectCardProps) {
  return (
    <Card accentColor={categoryColorMap[subject.category]} className="h-full">
      <h3 className="text-heading-3 font-body mb-2 text-base text-text-primary">
        {subject.name}
      </h3>
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {subject.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {subject.relevantFor.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-bg-secondary px-2.5 py-1 text-xs text-text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
