

import { Link } from 'wouter'
import { Spiral, Waves, Eye, Graph } from '@phosphor-icons/react'
import type { ComponentType } from 'react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import type { ResearchArea } from '@/types'

type IconComponent = ComponentType<{ size?: number; weight?: 'fill' | 'duotone' | 'regular' | 'bold' | 'light' | 'thin' }>

const iconMap: Record<string, IconComponent> = {
  Spiral,
  Waves,
  Eye,
  Graph,
}

interface ResearchCardProps {
  area: ResearchArea
}

export function ResearchCard({ area }: ResearchCardProps) {
  const Icon = iconMap[area.icon] ?? Spiral

  return (
    <Link href={`/research#${area.slug}`} className="block h-full">
      <Card accentColor="teal" className="h-full overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-6 opacity-[0.06] transition-transform duration-300 group-hover:scale-110 group-hover:opacity-[0.1]"
        >
          <Icon size={140} weight="thin" />
        </div>
        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[var(--radius-base)] bg-accent-teal-subtle text-accent-teal">
            <Icon size={24} weight="duotone" />
          </div>
          <h3 className="text-heading-3 font-body mb-2 text-text-primary">{area.title}</h3>
          <p className="mb-5 flex-1 text-sm leading-relaxed text-text-secondary">
            {area.description}
          </p>
          <Badge variant="topic" label={`${area.paperCount}+ papers`} size="sm" />
        </div>
      </Card>
    </Link>
  )
}
