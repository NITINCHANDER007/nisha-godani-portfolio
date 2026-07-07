import { Skeleton } from '@/components/ui/Skeleton'

export default function AwardsLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading awards page">
      <Skeleton className="mb-4 h-4 w-40" />
      <Skeleton className="mb-12 h-12 w-3/4 max-w-2xl" />
      <Skeleton className="mb-12 h-64 w-full max-w-2xl mx-auto" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </div>
    </div>
  )
}
