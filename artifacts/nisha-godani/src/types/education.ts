export type EducationType = 'phd' | 'mphil' | 'msc' | 'bsc' | 'exam'

export type EducationEntry = {
  id: string
  type: EducationType
  degree: string
  institution: string
  institutionShort: string
  location: string
  year: number
  specialization?: string
  thesis?: string
  supervisor?: string
  achievement?: string
  displayPriority: number
}

export type CompetitiveExam = {
  id: string
  examName: string
  fullName: string
  year: number
  allIndiaRank: number
  authority: string
  description: string
}
