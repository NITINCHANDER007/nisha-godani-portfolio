export type EmploymentType = 'assistant-professor' | 'guest-lecturer'

export type Employment = {
  id: string
  type: EmploymentType
  role: string
  institution: string
  department: string
  city: string
  state: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  awards: string[]
  highlights: string[]
}

export type SubjectCategory = 'pure-math' | 'applied-math' | 'statistics' | 'business-math'

export type Subject = {
  id: string
  name: string
  description: string
  category: SubjectCategory
  relevantFor: string[]
}

export type InvitedTalk = {
  id: string
  title: string
  venue: string
  event: string
  dateRange: string
  city: string
  mode: 'in-person' | 'online'
  year: number
}

export type WorkshopOrganized = {
  id: string
  title: string
  subtitle: string
  date: string
  venue: string
  mode: 'in-person' | 'online'
  collaboratingInstitution?: string
  collaboratingCountry?: string
  mou?: string
}

export type ConferenceRole = 'presented' | 'attended' | 'organized'
export type ConferenceMode = 'in-person' | 'online' | 'virtual'

export type ConferenceEvent = {
  id: string
  year: number
  type: ConferenceRole
  eventName: string
  location: string
  dates: string
  paperTitle?: string
  mode: ConferenceMode
  hostInstitution?: string
}
