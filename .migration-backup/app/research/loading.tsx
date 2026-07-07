import { Skeleton } from '@/components/ui/Skeleton'

export default function ResearchLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading research page">
      <Skeleton className="mb-4 h-4 w-40" />
      <Skeleton className="mb-3 h-12 w-3/4 max-w-2xl" />
      <Skeleton className="mb-12 h-6 w-1/2 max-w-xl" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-48" />
        ))}
      </div>
    </div>
  )
}
