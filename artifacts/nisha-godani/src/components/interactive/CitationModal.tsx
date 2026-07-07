

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Copy, Check } from '@phosphor-icons/react'
import type { Publication } from '@/types'
import { Modal } from '@/components/ui/Modal'
import { generateAPA, generateMLA, generateBibTeX } from '@/lib/publications'
import { cn } from '@/lib/utils'

interface CitationModalProps {
  publication: Publication | null
  onClose: () => void
}

const formats = [
  { id: 'apa', label: 'APA' },
  { id: 'mla', label: 'MLA' },
  { id: 'bibtex', label: 'BibTeX' },
]

export function CitationModal({ publication, onClose }: CitationModalProps) {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null)

  if (!publication) return null

  const citations: Record<string, string> = {
    apa: generateAPA(publication),
    mla: generateMLA(publication),
    bibtex: generateBibTeX(publication),
  }

  const handleCopy = async (formatId: string) => {
    try {
      await navigator.clipboard.writeText(citations[formatId])
      setCopiedFormat(formatId)
      setTimeout(() => setCopiedFormat(null), 2000)
    } catch {
      // Clipboard API unavailable — silently ignore
    }
  }

  return (
    <Modal isOpen={!!publication} onClose={onClose} title="Cite This Publication" size="md">
      <p className="mb-5 text-sm text-text-secondary">{publication.title}</p>

      <Tabs.Root defaultValue="apa">
        <Tabs.List className="mb-4 flex gap-1 rounded-[var(--radius-base)] bg-bg-secondary p-1">
          {formats.map((format) => (
            <Tabs.Trigger
              key={format.id}
              value={format.id}
              className={cn(
                'flex-1 rounded-[var(--radius-sm)] px-4 py-2 text-sm font-semibold text-text-muted transition-colors',
                'data-[state=active]:bg-bg-card data-[state=active]:text-accent-gold data-[state=active]:shadow-sm',
              )}
            >
              {format.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {formats.map((format) => (
          <Tabs.Content key={format.id} value={format.id}>
            <div className="relative rounded-[var(--radius-base)] border border-border bg-bg-secondary p-4">
              <pre className="text-data whitespace-pre-wrap break-words pr-10 text-sm leading-relaxed text-text-secondary">
                {citations[format.id]}
              </pre>
              <button
                type="button"
                onClick={() => handleCopy(format.id)}
                aria-label={`Copy ${format.label} citation`}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg-card text-text-muted shadow-sm transition-colors hover:text-accent-gold"
              >
                {copiedFormat === format.id ? (
                  <Check size={16} weight="bold" className="text-sci-green" />
                ) : (
                  <Copy size={16} />
                )}
              </button>
            </div>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Modal>
  )
}
