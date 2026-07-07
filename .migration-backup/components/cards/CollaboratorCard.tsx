import { Card } from '@/components/ui/Card'
import type { Collaborator } from '@/types'

interface CollaboratorCardProps {
  collaborator: Collaborator
}

export function CollaboratorCard({ collaborator }: CollaboratorCardProps) {
  return (
    <Card accentColor="teal" className="h-full min-w-[260px]">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-2xl" aria-hidden="true">
          {collaborator.countryFlag}
        </span>
        <span className="text-caption text-text-muted">{collaborator.country}</span>
      </div>
      <h3 className="text-heading-3 font-body mb-1 text-base text-text-primary">
        {collaborator.name}
      </h3>
      <p className="mb-3 text-sm text-text-muted">{collaborator.institution}</p>
      <p className="text-sm leading-relaxed text-text-secondary">
        {collaborator.description}
      </p>
      <p className="text-data mt-4 text-xs text-accent-teal">
        {collaborator.paperCount} joint {collaborator.paperCount === 1 ? 'paper' : 'papers'}
      </p>
    </Card>
  )
}
