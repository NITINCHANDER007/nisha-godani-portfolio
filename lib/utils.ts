import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes safely, resolving conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a number with thousands separators */
export function formatNumber(n: number): string {
  return n.toLocaleString('en-IN')
}

/** Truncate text to a given character limit with ellipsis */
export function truncate(text: string, limit: number): string {
  if (text.length <= limit) return text
  return text.slice(0, limit).trimEnd() + '…'
}

/** Convert a year number or range string to a display string */
export function formatYearRange(start: number, end?: number): string {
  if (!end) return `${start} – Present`
  return `${start} – ${end}`
}

/** Build a WhatsApp deep link URL */
export function buildWhatsAppUrl(phone: string, message?: string): string {
  const base = `https://wa.me/${phone}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

/** Get the display label for a research area tag */
export function getResearchAreaLabel(tag: string): string {
  const labels: Record<string, string> = {
    'wormhole-physics': 'Wormhole Physics',
    'modified-gravity': 'Modified Gravity',
    'gravitational-lensing': 'Gravitational Lensing',
    cosmology: 'Cosmology',
    'neutron-stars': 'Neutron Stars',
    'spacetime-topology': 'Spacetime Topology',
    'energy-conditions': 'Energy Conditions',
    'thin-shell': 'Thin-Shell Wormholes',
  }
  return labels[tag] ?? tag
}

/** Determine if a URL is external */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://')
}

/** Format a date string (ISO) to a display string */
export function formatDate(iso: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(iso)
  return date.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
    ...options,
  })
}

/** Pluralize a word based on count */
export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`)
}

/** Generate a DOI display string from a URL */
export function extractDoi(doiUrl?: string): string | undefined {
  if (!doiUrl) return undefined
  return doiUrl.replace('https://doi.org/', '')
}

/** Sort publications by year descending */
export function sortByYearDesc<T extends { year: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.year - a.year)
}

/** Group an array by a key */
export function groupBy<T>(array: T[], key: (item: T) => string): Record<string, T[]> {
  return array.reduce(
    (groups, item) => {
      const group = key(item)
      groups[group] = groups[group] ?? []
      groups[group].push(item)
      return groups
    },
    {} as Record<string, T[]>,
  )
}
