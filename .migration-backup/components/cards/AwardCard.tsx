import {
  Star,
  ChalkboardTeacher,
  Flask,
  Medal,
  Atom,
  Trophy,
  GraduationCap,
} from '@phosphor-icons/react/dist/ssr'
import { Card } from '@/components/ui/Card'
import type { Award } from '@/types'
import { cn } from '@/lib/utils'
import type { ComponentType } from 'react'

type IconComponent = ComponentType<{ size?: number; weight?: 'fill' | 'regular' | 'bold' | 'light' | 'duotone' | 'thin' }>

const iconMap: Record<string, IconComponent> = {
  Star,
  ChalkboardTeacher,
  Flask,
  Medal,
  Atom,
  Trophy,
  GraduationCap,
}

interface AwardCardProps {
  award: Award
  className?: string
}

export function AwardCard({ award, className }: AwardCardProps) {
  const Icon = iconMap[award.icon] ?? Medal
  const isPremium = award.tier === 'chancellor'

  return (
    <Card
      accentColor={isPremium ? 'gold' : award.category === 'research' ? 'teal' : 'rose'}
      className={cn(isPremium && 'ring-1 ring-accent-gold/30', className)}
    >
      <div className="flex items-start gap-4">
        <div
          className={cn(
            'flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full',
            isPremium ? 'bg-accent-gold text-bg-dark' : 'bg-accent-gold-subtle text-accent-gold',
          )}
        >
          <Icon size={20} weight="fill" />
        </div>
        <div>
          <h3 className="text-heading-3 font-body mb-1 text-base text-text-primary">
            {award.name}
          </h3>
          <p className="mb-1 text-sm text-text-muted">{award.awardingBody}</p>
          <p className="text-data text-xs text-accent-gold">
            {award.session ?? award.year}
          </p>
        </div>
      </div>
    </Card>
  )
}
