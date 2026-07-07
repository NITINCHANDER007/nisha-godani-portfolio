export type AwardCategory = 'teaching' | 'research' | 'academic-excellence' | 'credential' | 'global'

export type AwardTier = 'standard' | 'chancellor' | 'national' | 'global'

export type Award = {
  id: string
  name: string
  awardingBody: string
  year: number | string
  session?: string
  category: AwardCategory
  tier: AwardTier
  description: string
  icon: string
}

export type Credential = {
  id: string
  examName: string
  fullName: string
  year: number
  allIndiaRank: number
  authority: string
  description: string
  significance: string
}

export type GlobalRecognition = {
  id: string
  name: string
  category: string
  authority: string
  duration: string
  tooltipNote: string
  isVerified: true
  badgeDescription: string
}
