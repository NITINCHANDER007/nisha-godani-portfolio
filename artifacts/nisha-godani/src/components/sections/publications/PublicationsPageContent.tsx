import React, { useState, useEffect, Suspense } from 'react'
import { useSearch } from 'wouter'
import type { Publication } from '@/types'
import { publications } from '@/data/publications'
import { usePublicationFilter } from '@/hooks/usePublicationFilter'
import { PublicationStatsBanner } from '@/components/sections/publications/PublicationStats'
import { FilterPanel } from '@/components/interactive/FilterPanel'
import { PublicationList } from '@/components/sections/publications/PublicationList'
import { Skeleton } from '@/components/ui/Skeleton'

const CitationModal = React.lazy(
  () => import('@/components/interactive/CitationModal').then((m) => ({ default: m.CitationModal })),
)

export function PublicationsPageContent() {
  const search = useSearch()
  const params = new URLSearchParams(search)
  const { filters, filtered, updateFilter, clearFilters, hasActiveFilters, totalCount, filteredCount } =
    usePublicationFilter(publications)
  const [citePublication, setCitePublication] = useState<Publication | null>(null)

  // Support deep-linking from Research page (?topic=wormhole-physics or ?search=...)
  useEffect(() => {
    const topicParam = params.get('topic')
    const searchParam = params.get('search')
    if (topicParam) updateFilter('topic', topicParam as Publication['researchAreas'][number])
    if (searchParam) updateFilter('search', searchParam)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <PublicationStatsBanner />
      <FilterPanel
        allPublications={publications}
        filters={filters}
        updateFilter={updateFilter}
        clearFilters={clearFilters}
        hasActiveFilters={hasActiveFilters}
        totalCount={totalCount}
        filteredCount={filteredCount}
      />
      <PublicationList
        publications={filtered}
        sortBy={filters.sortBy}
        onCiteOpen={setCitePublication}
      />
      <Suspense fallback={<Skeleton className="fixed inset-0 z-50 m-auto h-64 max-w-2xl" />}>
        <CitationModal publication={citePublication} onClose={() => setCitePublication(null)} />
      </Suspense>
    </>
  )
}
