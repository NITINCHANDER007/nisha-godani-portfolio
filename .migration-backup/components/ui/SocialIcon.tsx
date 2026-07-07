import {
  GraduationCap,
  LinkedinLogo,
  YoutubeLogo,
  Hash,
} from '@phosphor-icons/react/dist/ssr'
import type { SocialProfile } from '@/types'
import type { ReactNode } from 'react'

const iconMap: Record<string, ReactNode> = {
  googleScholar: <GraduationCap size={18} weight="bold" />,
  researchGate: <Hash size={18} weight="bold" />,
  linkedin: <LinkedinLogo size={18} weight="fill" />,
  youtube: <YoutubeLogo size={18} weight="fill" />,
  orcid: <Hash size={18} weight="bold" />,
}

interface SocialIconProps {
  profile: SocialProfile
}

export function SocialIcon({ profile }: SocialIconProps) {
  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={profile.ariaLabel}
      title={profile.label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-text-inverse/70 transition-colors hover:border-accent-gold hover:text-accent-gold"
    >
      {iconMap[profile.platform]}
    </a>
  )
}
