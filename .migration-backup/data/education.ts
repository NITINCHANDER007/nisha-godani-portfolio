import type { EducationEntry, CompetitiveExam } from '@/types'

export const educationEntries: EducationEntry[] = [
  {
    id: 'phd-dei-2018',
    type: 'phd',
    degree: 'PhD in Mathematics',
    institution: 'Dayalbagh Educational Institute (Deemed University)',
    institutionShort: 'DEI, Agra',
    location: 'Dayalbagh, Agra, Uttar Pradesh, India',
    year: 2018,
    specialization: 'Mathematics',
    achievement: 'Completed doctorate in mathematical structures of modified gravity and spacetime topology',
    displayPriority: 1,
  },
  {
    id: 'mphil-dei-2011',
    type: 'mphil',
    degree: 'M.Phil. in Mathematics',
    institution: 'Dayalbagh Educational Institute (Deemed University)',
    institutionShort: 'DEI, Agra',
    location: 'Dayalbagh, Agra, Uttar Pradesh, India',
    year: 2011,
    specialization: 'Mathematics',
    achievement: "Director's Medal for securing highest marks in M.Phil. Mathematics Examination",
    displayPriority: 2,
  },
]

export const competitiveExams: CompetitiveExam[] = [
  {
    id: 'net-2012',
    examName: 'NET',
    fullName: 'National Eligibility Test',
    year: 2012,
    allIndiaRank: 40,
    authority: 'University Grants Commission (UGC)',
    description:
      'Qualified NET with All India Rank 40 — among the most competitive national examinations for mathematics faculty eligibility.',
  },
  {
    id: 'gate-2012',
    examName: 'GATE',
    fullName: 'Graduate Aptitude Test in Engineering',
    year: 2012,
    allIndiaRank: 90,
    authority: 'Indian Institutes of Technology (IITs)',
    description:
      'Qualified GATE Mathematics with All India Rank 90 — a gateway examination for postgraduate admissions and research fellowships.',
  },
  {
    id: 'jam-2009',
    examName: 'JAM',
    fullName: 'Joint Admission Test for M.Sc.',
    year: 2009,
    allIndiaRank: 166,
    authority: 'Indian Institutes of Technology (IITs)',
    description:
      'Qualified JAM with All India Rank 166 — national admission test for M.Sc. programmes at IITs and IISc.',
  },
]
