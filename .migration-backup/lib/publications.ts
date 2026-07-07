import type { Publication, PublicationFilters, ResearchAreaTag } from '@/types'
import { groupBy, sortByYearDesc } from './utils'

/** Filter publications by all active filter criteria */
export function filterPublications(
  publications: Publication[],
  filters: PublicationFilters,
): Publication[] {
  let result = [...publications]

  // Search across title, authors, journal
  if (filters.search.trim()) {
    const query = filters.search.toLowerCase().trim()
    result = result.filter(
      (pub) =>
        pub.title.toLowerCase().includes(query) ||
        pub.journal.toLowerCase().includes(query) ||
        pub.authors.some((a) => a.name.toLowerCase().includes(query)),
    )
  }

  // Year filter
  if (filters.year) {
    result = result.filter((pub) => pub.year.toString() === filters.year)
  }

  // Journal filter
  if (filters.journal) {
    result = result.filter(
      (pub) =>
        pub.journal === filters.journal || pub.journalShort === filters.journal,
    )
  }

  // Topic filter
  if (filters.topic) {
    result = result.filter((pub) =>
      pub.researchAreas.includes(filters.topic as ResearchAreaTag),
    )
  }

  // Type filter
  if (filters.type) {
    result = result.filter((pub) => pub.type === filters.type)
  }

  // Sort
  switch (filters.sortBy) {
    case 'newest':
      result = sortByYearDesc(result)
      break
    case 'oldest':
      result = result.sort((a, b) => a.year - b.year)
      break
    case 'journal':
      result = result.sort((a, b) => a.journal.localeCompare(b.journal))
      break
  }

  return result
}

/** Group publications by year for year-header display */
export function groupPublicationsByYear(
  publications: Publication[],
): Record<string, Publication[]> {
  return groupBy(publications, (pub) => pub.year.toString())
}

/** Get all unique years from a publication list, sorted descending */
export function getUniqueYears(publications: Publication[]): number[] {
  const years = [...new Set(publications.map((p) => p.year))]
  return years.sort((a, b) => b - a)
}

/** Get all unique journals from a publication list, sorted alphabetically */
export function getUniqueJournals(publications: Publication[]): string[] {
  const journals = [...new Set(publications.map((p) => p.journal))]
  return journals.sort((a, b) => a.localeCompare(b))
}

/** Get all unique research area tags from a publication list */
export function getUniqueTopics(publications: Publication[]): ResearchAreaTag[] {
  const topics = new Set<ResearchAreaTag>()
  publications.forEach((pub) => pub.researchAreas.forEach((tag) => topics.add(tag)))
  return [...topics]
}

/** Generate APA citation string for a publication */
export function generateAPA(pub: Publication): string {
  const authors = pub.authors
    .map((a) => {
      const parts = a.name.trim().split(' ')
      const last = parts[parts.length - 1]
      const initials = parts
        .slice(0, -1)
        .map((p) => `${p[0]}.`)
        .join(' ')
      return `${last}, ${initials}`
    })
    .join(', ')

  const doi = pub.doiUrl ? ` https://doi.org/${pub.doi}` : ''
  const volume = pub.volume ? `, ${pub.volume}` : ''
  const pages = pub.pages ? `, ${pub.pages}` : ''
  const articleNo = pub.articleNumber ? `, ${pub.articleNumber}` : ''

  return `${authors} (${pub.year}). ${pub.title}. ${pub.journal}${volume}${pages || articleNo}.${doi}`
}

/** Generate MLA citation string for a publication */
export function generateMLA(pub: Publication): string {
  const authors = pub.authors.map((a) => a.name).join(', ')
  const volume = pub.volume ? `, vol. ${pub.volume}` : ''
  const pages = pub.pages ? `, pp. ${pub.pages}` : ''
  const doi = pub.doiUrl ? ` doi:${pub.doi}.` : '.'

  return `${authors}. "${pub.title}." ${pub.journal}${volume}, ${pub.year}${pages}${doi}`
}

/** Generate BibTeX citation string for a publication */
export function generateBibTeX(pub: Publication): string {
  const key = `Godani${pub.year}${pub.id.replace('pub-', '').replace(/-/g, '').slice(0, 8)}`
  const authors = pub.authors.map((a) => a.name).join(' and ')
  const doi = pub.doi ? `  doi = {${pub.doi}},\n` : ''
  const volume = pub.volume ? `  volume = {${pub.volume}},\n` : ''
  const pages = pub.pages ? `  pages = {${pub.pages}},\n` : ''
  const number = pub.articleNumber ? `  article-number = {${pub.articleNumber}},\n` : ''

  return `@article{${key},
  author = {${authors}},
  title = {${pub.title}},
  journal = {${pub.journal}},
  year = {${pub.year}},
${volume}${pages}${number}${doi}}`
}

/** Color mapping for journal badges */
export const journalColors: Record<string, { bg: string; text: string; border: string }> = {
  'Physics Letters B': { bg: '#3b0764', text: '#e879f9', border: '#7c3aed' },
  'Annals of Physics': { bg: '#0c2a4a', text: '#7dd3fc', border: '#0369a1' },
  'European Physical Journal Plus': { bg: '#064e3b', text: '#6ee7b7', border: '#065f46' },
  'European Physical Journal C': { bg: '#064e3b', text: '#6ee7b7', border: '#065f46' },
  'Physics of the Dark Universe': { bg: '#1e1b4b', text: '#a5b4fc', border: '#4338ca' },
  'New Astronomy': { bg: '#0c4a6e', text: '#7dd3fc', border: '#0369a1' },
  'International Journal of Geometric Methods in Modern Physics': {
    bg: '#451a03',
    text: '#fde68a',
    border: '#92400e',
  },
  'International Journal of Modern Physics D': {
    bg: '#312e81',
    text: '#c7d2fe',
    border: '#4f46e5',
  },
  'International Journal of Modern Physics A': {
    bg: '#312e81',
    text: '#c7d2fe',
    border: '#4f46e5',
  },
  'Modern Physics Letters A': { bg: '#1e3a5f', text: '#93c5fd', border: '#2563eb' },
  'Indian Journal of Physics': { bg: '#4c0519', text: '#fda4af', border: '#9f1239' },
  'Chinese Journal of Physics': { bg: '#083344', text: '#67e8f9', border: '#0e7490' },
  'Physica Scripta': { bg: '#1a2e05', text: '#bef264', border: '#4d7c0f' },
  'Topology and its Applications': { bg: '#1c1917', text: '#d6d3d1', border: '#57534e' },
  'Reports on Mathematical Physics': { bg: '#1c1917', text: '#d6d3d1', border: '#57534e' },
}

export function getJournalColor(journal: string) {
  return (
    journalColors[journal] ?? {
      bg: '#1c1917',
      text: '#d6d3d1',
      border: '#57534e',
    }
  )
}
