'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { modalOverlay, modalContent } from '@/lib/animations'
import type { ReactNode } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap: Record<string, string> = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
}

export function Modal({ isOpen, onClose, title, children, size = 'md', className }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                variants={modalOverlay}
                initial="hidden"
                animate="visible"
                exit="exit"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className={cn(
                  'fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2',
                  'max-h-[85vh] overflow-y-auto rounded-[var(--radius-lg)] border border-border bg-bg-card p-6 sm:p-8 shadow-lift',
                  sizeMap[size],
                  className,
                )}
                variants={modalContent}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <Dialog.Title className="text-heading-3 font-display text-text-primary">
                    {title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label="Close dialog"
                      className="flex-shrink-0 rounded-full p-1.5 text-text-muted transition-colors hover:bg-bg-secondary hover:text-text-primary"
                    >
                      <X size={20} />
                    </button>
                  </Dialog.Close>
                </div>
                {children}
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
