import { Skeleton } from '@/components/ui/Skeleton'

export default function MmeLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading Make Maths Easy page">
      <Skeleton className="mb-6 h-14 w-3/4 max-w-xl" />
      <Skeleton className="mb-10 h-6 w-1/2 max-w-lg" />
      <div className="mb-12 flex flex-wrap gap-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-32" />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-36" />
        ))}
      </div>
    </div>
  )
}
