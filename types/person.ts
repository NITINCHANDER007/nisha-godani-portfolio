export type SocialPlatform =
  | 'googleScholar'
  | 'researchGate'
  | 'linkedin'
  | 'youtube'
  | 'orcid'

export type SocialProfile = {
  platform: SocialPlatform
  label: string
  url: string
  handle?: string
  ariaLabel: string
}

export type AcademicContact = {
  email: string
  phone?: string
  institution: string
  department: string
  city: string
  state: string
  country: string
}

export type MmeAddress = {
  line1: string
  line2: string
  line3: string
  city: string
  state: string
  pincode: string
  country: string
}

export type MmeContactInfo = {
  phone: string
  whatsapp: string
  whatsappMessage: string
  address: MmeAddress
  googleMapsEmbedUrl: string
  googleMapsLink: string
}

export type ContactInfo = {
  academic: AcademicContact
  mme: MmeContactInfo
}

export type PortraitImage = {
  src: string
  alt: string
  width: number
  height: number
}

export type PersonalDetails = {
  fullName: string
  displayName: string
  honorific: string
  firstName: string
  lastName: string
  title: string
  department: string
  institution: string
  city: string
  country: string
  tagline: string
  researchDescription: string
  teachingDescription: string
  fullBio: string[]
  contact: ContactInfo
  socialProfiles: SocialProfile[]
  portrait: PortraitImage
  lastUpdated: string
}
