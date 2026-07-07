'use client'

import { useState, useMemo } from 'react'
import type { Publication, PublicationFilters } from '@/types'
import { filterPublications } from '@/lib/publications'

const defaultFilters: PublicationFilters = {
  search: '',
  year: '',
  journal: '',
  topic: '',
  type: '',
  sortBy: 'newest',
}

export function usePublicationFilter(allPublications: Publication[]) {
  const [filters, setFilters] = useState<PublicationFilters>(defaultFilters)

  const filtered = useMemo(
    () => filterPublications(allPublications, filters),
    [allPublications, filters],
  )

  const updateFilter = <K extends keyof PublicationFilters>(
    key: K,
    value: PublicationFilters[K],
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => setFilters(defaultFilters)

  const hasActiveFilters =
    filters.search !== '' ||
    filters.year !== '' ||
    filters.journal !== '' ||
    filters.topic !== '' ||
    filters.type !== ''

  return {
    filters,
    filtered,
    updateFilter,
    clearFilters,
    hasActiveFilters,
    totalCount: allPublications.length,
    filteredCount: filtered.length,
  }
}
