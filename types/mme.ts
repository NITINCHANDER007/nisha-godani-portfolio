export type AudienceLevel =
  | 'grade-9'
  | 'grade-10'
  | 'grade-11'
  | 'grade-12'
  | 'btech'
  | 'mtech'
  | 'bca'
  | 'mca'
  | 'bba'
  | 'mba'
  | 'bsc'
  | 'msc'
  | 'bcom'
  | 'mcom'
  | 'gate'
  | 'net'
  | 'competitive'

export type AudienceLevelDisplay = {
  level: AudienceLevel
  label: string
  category: 'school' | 'undergraduate' | 'postgraduate' | 'competitive'
}

export type ClassFeature = {
  id: string
  icon: string
  title: string
  description: string
}

export type DeliveryMode = 'online' | 'offline'

export type DeliveryModeDetails = {
  mode: DeliveryMode
  title: string
  description: string
  platform?: string
  features: string[]
  cta: {
    label: string
    href: string
  }
}

// CRITICAL: status is permanently 'completed' — cannot be changed to 'current'
export type PastProgramStatus = 'completed'

export type PastProgram = {
  id: string
  title: string
  subtitle: string
  period: string
  year: number
  duration: string
  format: string
  extras: string[]
  topics: string[]
  status: PastProgramStatus
  description: string
}

export type Testimonial = {
  id: string
  quote: string
  studentName: string
  level: string
  course?: string
  rating: 1 | 2 | 3 | 4 | 5
  isVerified: boolean
  year: number
}

export type YoutubeChannel = {
  channelName: string
  handle: string
  url: string
  channelId: string
  description: string
  rssUrl: string
}

export type MmeDetails = {
  brandName: string
  tagline: string
  heroSubtext: string
  credentialHighlight: string
  phone: string
  whatsapp: string
  whatsappMessage: string
  youtube: YoutubeChannel
  audienceLevels: AudienceLevelDisplay[]
  features: ClassFeature[]
  deliveryModes: DeliveryModeDetails[]
  pastPrograms: PastProgram[]
  testimonials: Testimonial[]
}
