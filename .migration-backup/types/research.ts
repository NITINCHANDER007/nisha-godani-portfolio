import type { ResearchAreaTag } from './publication'

export type ResearchArea = {
  id: string
  title: string
  slug: ResearchAreaTag
  description: string
  longDescription: string
  paperCount: number
  keyPaperIds: string[]
  icon: string
  era: {
    start: number
    end?: number
  }
}

export type ResearchEra = 'phd' | 'early-gla' | 'peak' | 'advanced'

export type ResearchTimelineNode = {
  id: string
  period: string
  startYear: number
  endYear?: number
  title: string
  subtitle: string
  description: string
  highlightedPaperIds: string[]
  era: ResearchEra
  keyAchievement?: string
}

export type Collaborator = {
  id: string
  name: string
  institution: string
  city: string
  country: string
  countryCode: string
  countryFlag: string
  paperCount: number
  jointPaperIds: string[]
  isInternational: boolean
  coordinates: {
    lat: number
    lng: number
  }
  description: string
}
