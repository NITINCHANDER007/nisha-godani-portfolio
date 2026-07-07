import { getJournalColor } from '@/lib/publications'
import { cn } from '@/lib/utils'

interface JournalBadgeProps {
  journal: string
  journalShort?: string
  className?: string
}

export function JournalBadge({ journal, journalShort, className }: JournalBadgeProps) {
  const colors = getJournalColor(journal)

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 text-xs font-semibold',
        className,
      )}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        borderColor: colors.border,
      }}
    >
      {journalShort ?? journal}
    </span>
  )
}
