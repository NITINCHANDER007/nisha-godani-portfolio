'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface AppTooltipProps {
  content: string
  children: ReactNode
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function AppTooltip({ content, children, side = 'top', className }: AppTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            sideOffset={8}
            className={cn(
              'z-50 max-w-xs rounded-[var(--radius-base)] border border-border bg-bg-dark px-3.5 py-2.5 text-sm leading-snug text-text-inverse shadow-lift',
              'data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95',
              className,
            )}
          >
            {content}
            <Tooltip.Arrow className="fill-bg-dark" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
