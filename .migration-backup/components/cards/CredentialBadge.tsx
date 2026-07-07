'use client'

import { Card } from '@/components/ui/Card'
import type { Credential } from '@/types'

interface CredentialBadgeProps {
  credential: Credential
}

export function CredentialBadge({ credential }: CredentialBadgeProps) {
  return (
    <Card accentColor="blue" className="text-center" hoverable>
      <p className="text-caption mb-3 text-accent-blue">{credential.examName}</p>
      <p className="font-display mb-1 text-4xl font-semibold text-text-primary">
        AIR {credential.allIndiaRank}
      </p>
      <p className="mb-3 text-xs text-text-muted">
        {credential.year} · {credential.fullName}
      </p>
      <p className="text-sm leading-relaxed text-text-secondary">
        {credential.significance}
      </p>
    </Card>
  )
}
