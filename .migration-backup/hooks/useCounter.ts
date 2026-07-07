'use client'

import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

export function useCounter(
  target: number,
  duration: number = 800,
  startOnMount: boolean = false,
): { count: number; start: () => void } {
  const [count, setCount] = useState(startOnMount ? 0 : target)
  const prefersReduced = useReducedMotion()
  const rafRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const hasStarted = useRef(false)

  const start = () => {
    if (prefersReduced) {
      setCount(target)
      return
    }
    if (hasStarted.current) return
    hasStarted.current = true

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutExpo(progress)
      setCount(Math.round(easedProgress * target))

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (startOnMount) start()
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { count, start }
}
