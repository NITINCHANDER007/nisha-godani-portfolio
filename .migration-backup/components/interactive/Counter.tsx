'use client'

import { useEffect } from 'react'
import { useCounter } from '@/hooks/useCounter'
import { useInView } from '@/hooks/useInView'
import { formatNumber } from '@/lib/utils'

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
  prefix?: string
  label: string
  className?: string
}

export function Counter({
  target,
  duration = 800,
  suffix = '',
  prefix = '',
  label,
  className,
}: CounterProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3 })
  const { count, start } = useCounter(target, duration, false)

  useEffect(() => {
    if (isInView) start()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <div ref={ref} className={className}>
      <p
        className="text-data text-2xl font-semibold text-accent-gold sm:text-3xl"
        aria-label={`${formatNumber(target)}${suffix} ${label}`}
      >
        {prefix}
        {formatNumber(count)}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-text-muted sm:text-sm">{label}</p>
    </div>
  )
}
