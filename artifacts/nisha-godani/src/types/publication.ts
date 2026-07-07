export type PublicationType = 'journal' | 'conference' | 'preprint'

export type IndexType = 'SCI' | 'SCOPUS' | 'other'

export type ResearchAreaTag =
  | 'wormhole-physics'
  | 'modified-gravity'
  | 'gravitational-lensing'
  | 'cosmology'
  | 'neutron-stars'
  | 'spacetime-topology'
  | 'energy-conditions'
  | 'thin-shell'

export type Author = {
  name: string
  isPrimary: boolean
}

export type ConferenceDetails = {
  conferenceName: string
  location: string
  dates: string
  aipVolume?: string
}

export type Publication = {
  id: string
  type: PublicationType
  title: string
  authors: Author[]
  journal: string
  journalShort: string
  volume?: string
  issue?: string
  articleNumber?: string
  pages?: string
  year: number
  doi?: string
  doiUrl?: string
  researchGateUrl?: string
  abstract?: string
  indexedBy: IndexType[]
  researchAreas: ResearchAreaTag[]
  isFeatured: boolean
  conferenceDetails?: ConferenceDetails
}

export type PublicationFilters = {
  search: string
  year: string
  journal: string
  topic: ResearchAreaTag | ''
  type: PublicationType | ''
  sortBy: 'newest' | 'oldest' | 'journal'
}

export type PublicationStats = {
  totalJournal: number
  totalConference: number
  totalCitations: number
  sciPapers: number
  scopusPapers: number
}
