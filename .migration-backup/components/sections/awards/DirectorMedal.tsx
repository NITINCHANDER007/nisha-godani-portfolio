import { GraduationCap } from '@phosphor-icons/react/dist/ssr'

export function DirectorMedal() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-[var(--radius-md)] border border-accent-gold-border bg-accent-gold-subtle p-8 text-center sm:flex-row sm:text-left">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-accent-gold text-bg-dark">
        <GraduationCap size={28} weight="fill" />
      </div>
      <div>
        <h3 className="font-display mb-1 text-2xl font-semibold text-text-primary">
          Director&apos;s Medal
        </h3>
        <p className="text-sm text-text-secondary">
          For Securing Highest Marks in M.Phil. (Mathematics) Examination —
          Dayalbagh Educational Institute (Deemed University), 2011.
        </p>
      </div>
    </div>
  )
}
