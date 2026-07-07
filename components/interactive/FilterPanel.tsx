'use client'

import { MagnifyingGlass, X } from '@phosphor-icons/react'
import type { PublicationFilters, Publication } from '@/types'
import { getUniqueYears, getUniqueJournals, getUniqueTopics } from '@/lib/publications'
import { getResearchAreaLabel } from '@/lib/utils'
import { Chip } from '@/components/ui/Chip'

interface FilterPanelProps {
  allPublications: Publication[]
  filters: PublicationFilters
  updateFilter: <K extends keyof PublicationFilters>(key: K, value: PublicationFilters[K]) => void
  clearFilters: () => void
  hasActiveFilters: boolean
  totalCount: number
  filteredCount: number
}

export function FilterPanel({
  allPublications,
  filters,
  updateFilter,
  clearFilters,
  hasActiveFilters,
  totalCount,
  filteredCount,
}: FilterPanelProps) {
  const years = getUniqueYears(allPublications)
  const journals = getUniqueJournals(allPublications)
  const topics = getUniqueTopics(allPublications)

  return (
    <div className="sticky top-[60px] z-30 mb-8 -mx-4 border-b border-border bg-bg-primary/95 px-4 py-5 backdrop-blur-md sm:mx-0 sm:rounded-[var(--radius-md)] sm:border sm:px-6 sm:shadow-card">
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="relative">
          <MagnifyingGlass
            size={18}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"
            aria-hidden="true"
          />
          <input
            type="search"
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            placeholder="Search by title, journal, or co-author..."
            aria-label="Search publications"
            className="w-full rounded-[var(--radius-base)] border border-border bg-bg-card py-3 pl-11 pr-4 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          />
        </div>

        {/* Dropdown filters */}
        <div className="flex flex-wrap gap-3">
          <select
            value={filters.year}
            onChange={(e) => updateFilter('year', e.target.value)}
            aria-label="Filter by year"
            className="rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year.toString()}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={filters.journal}
            onChange={(e) => updateFilter('journal', e.target.value)}
            aria-label="Filter by journal"
            className="max-w-[200px] rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          >
            <option value="">All Journals</option>
            {journals.map((journal) => (
              <option key={journal} value={journal}>
                {journal}
              </option>
            ))}
          </select>

          <select
            value={filters.topic}
            onChange={(e) => updateFilter('topic', e.target.value as PublicationFilters['topic'])}
            aria-label="Filter by research topic"
            className="rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          >
            <option value="">All Topics</option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {getResearchAreaLabel(topic)}
              </option>
            ))}
          </select>

          <select
            value={filters.type}
            onChange={(e) => updateFilter('type', e.target.value as PublicationFilters['type'])}
            aria-label="Filter by publication type"
            className="rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          >
            <option value="">All Types</option>
            <option value="journal">Journal Article</option>
            <option value="conference">Conference Paper</option>
          </select>

          <select
            value={filters.sortBy}
            onChange={(e) => updateFilter('sortBy', e.target.value as PublicationFilters['sortBy'])}
            aria-label="Sort publications"
            className="ml-auto rounded-[var(--radius-base)] border border-border bg-bg-card px-3.5 py-2.5 text-sm text-text-secondary outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/30"
          >
            <option value="newest">Most Recent</option>
            <option value="oldest">Oldest First</option>
            <option value="journal">By Journal</option>
          </select>
        </div>

        {/* Active filter chips + results count */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {filters.search && (
              <Chip label={`"${filters.search}"`} onRemove={() => updateFilter('search', '')} />
            )}
            {filters.year && (
              <Chip label={filters.year} onRemove={() => updateFilter('year', '')} />
            )}
            {filters.journal && (
              <Chip label={filters.journal} onRemove={() => updateFilter('journal', '')} />
            )}
            {filters.topic && (
              <Chip
                label={getResearchAreaLabel(filters.topic)}
                onRemove={() => updateFilter('topic', '')}
              />
            )}
            {filters.type && (
              <Chip
                label={filters.type === 'journal' ? 'Journal Article' : 'Conference Paper'}
                onRemove={() => updateFilter('type', '')}
              />
            )}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={clearFilters}
                className="flex items-center gap-1 text-xs font-semibold text-accent-gold hover:underline"
              >
                <X size={12} weight="bold" />
                Clear all
              </button>
            )}
          </div>
          <p className="text-data flex-shrink-0 text-xs text-text-muted" aria-live="polite" aria-atomic="true">
            Showing {filteredCount} of {totalCount} publications
          </p>
        </div>
      </div>
    </div>
  )
}
