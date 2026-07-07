'use client'

import * as Popover from '@radix-ui/react-popover'
import { motion, AnimatePresence } from 'framer-motion'
import { Circle, CircleHalf, Moon, SunDim, Check } from '@phosphor-icons/react'
import { useState } from 'react'
import { useTheme } from '@/hooks/useTheme'
import { themes } from '@/data/navigation'
import type { ThemeName } from '@/types'
import { cn } from '@/lib/utils'

const themeIcons: Record<ThemeName, React.ReactNode> = {
  'academic-ivory': <SunDim size={16} weight="bold" />,
  'deep-navy': <Moon size={16} weight="bold" />,
  'dark-research': <CircleHalf size={16} weight="bold" />,
  'elegant-light': <Circle size={16} weight="bold" />,
}

export function ThemeSwitcher({ variant = 'default' }: { variant?: 'default' | 'mobile' }) {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label="Switch theme"
          className={cn(
            'flex items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-accent-gold hover:text-accent-gold',
            variant === 'default' ? 'h-9 w-9' : 'h-11 w-11',
          )}
        >
          <span className="flex gap-[2px]" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
          </span>
        </button>
      </Popover.Trigger>
      <AnimatePresence>
        {isOpen && (
          <Popover.Portal forceMount>
            <Popover.Content
              sideOffset={12}
              align="end"
              asChild
            >
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
                className="z-[70] w-64 rounded-[var(--radius-md)] border border-border bg-bg-card p-2 shadow-lift"
              >
                <p className="px-3 pb-2 pt-1.5 text-caption text-text-muted">
                  Choose Theme
                </p>
                <div className="flex flex-col gap-1">
                  {themes.map((t) => (
                    <button
                      key={t.name}
                      type="button"
                      onClick={() => {
                        setTheme(t.name)
                        setIsOpen(false)
                      }}
                      aria-current={theme === t.name}
                      className={cn(
                        'flex items-center gap-3 rounded-[var(--radius-base)] px-3 py-2.5 text-left transition-colors hover:bg-bg-secondary',
                        theme === t.name && 'bg-accent-gold-subtle',
                      )}
                    >
                      <span
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2"
                        style={{
                          backgroundColor: t.previewBg,
                          borderColor: t.previewAccent,
                        }}
                        aria-hidden="true"
                      >
                        <span style={{ color: t.previewAccent }}>
                          {themeIcons[t.name]}
                        </span>
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-text-primary">
                          {t.label}
                        </span>
                        <span className="block text-xs text-text-muted">
                          {t.description}
                        </span>
                      </span>
                      {theme === t.name && (
                        <Check size={16} weight="bold" className="flex-shrink-0 text-accent-gold" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  )
}
