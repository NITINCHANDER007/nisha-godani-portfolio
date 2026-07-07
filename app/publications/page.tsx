import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Breadcrumb } from '@/components/layout/Breadcrumb'
import { JsonLd } from '@/components/layout/JsonLd'
import { PublicationsPageContent } from '@/components/sections/publications/PublicationsPageContent'
import { Skeleton } from '@/components/ui/Skeleton'
import { publications, publicationStats } from '@/data/publications'
import { publicationsMetadata } from '@/lib/metadata'
import { generatePublicationsPageSchema } from '@/lib/schema'

export const metadata: Metadata = publicationsMetadata()

export default function PublicationsPage() {
  const schema = generatePublicationsPageSchema(publications)

  return (
    <PageWrapper>
      <JsonLd data={schema} />
      <Breadcrumb items={[{ label: 'Publications', href: '/publications' }]} />
      <div className="container-wide py-16">
        <p className="text-caption mb-3 text-accent-teal">Publication Archive</p>
        <h1 className="text-heading-1 font-display mb-3 text-text-primary">
          {publicationStats.totalJournal} Publications. 1,453 Citations. Every Paper,
          Here.
        </h1>
        <p className="mb-10 max-w-2xl text-body-lg text-text-secondary">
          A complete, searchable archive of every journal article and conference paper
          published across a decade of research in wormhole physics, modified gravity,
          and spacetime topology.
        </p>

        <Suspense
          fallback={
            <div className="space-y-4">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-16 w-full" />
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-32 w-full" />
              ))}
            </div>
          }
        >
          <PublicationsPageContent />
        </Suspense>
      </div>
    </PageWrapper>
  )
}
