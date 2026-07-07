import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface PageWrapperProps {
  children: ReactNode
  className?: string
  noPaddingTop?: boolean
}

export function PageWrapper({ children, className, noPaddingTop = false }: PageWrapperProps) {
  return (
    <main
      id="main-content"
      className={cn(!noPaddingTop && 'pt-20', className)}
      tabIndex={-1}
    >
      {children}
    </main>
  )
}
