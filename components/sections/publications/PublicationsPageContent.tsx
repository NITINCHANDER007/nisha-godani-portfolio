'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import type { Publication } from '@/types'
import { publications } from '@/data/publications'
import { usePublicationFilter } from '@/hooks/usePublicationFilter'
import { PublicationStatsBanner } from '@/components/sections/publications/PublicationStats'
import { FilterPanel } from '@/components/interactive/FilterPanel'
import { PublicationList } from '@/components/sections/publications/PublicationList'
import { Skeleton } from '@/components/ui/Skeleton'

const CitationModal = dynamic(
  () => import('@/components/interactive/CitationModal').then((m) => ({ default: m.CitationModal })),
  { loading: () => <Skeleton className="fixed inset-0 z-50 m-auto h-64 max-w-2xl" /> },
)

export function PublicationsPageContent() {
  const searchParams = useSearchParams()
  const { filters, filtered, updateFilter, clearFilters, hasActiveFilters, totalCount, filteredCount } =
    usePublicationFilter(publications)
  const [citePublication, setCitePublication] = useState<Publication | null>(null)

  // Support deep-linking from Research page (?topic=wormhole-physics or ?search=...)
  useEffect(() => {
    const topicParam = searchParams.get('topic')
    const searchParam = searchParams.get('search')
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
      <CitationModal publication={citePublication} onClose={() => setCitePublication(null)} />
    </>
  )
}
