import { Skeleton } from '@/components/ui/Skeleton'

export default function PublicationsLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading publications">
      <Skeleton className="mb-4 h-4 w-40" />
      <Skeleton className="mb-3 h-12 w-3/4 max-w-2xl" />
      <Skeleton className="mb-10 h-6 w-1/2 max-w-xl" />
      <Skeleton className="mb-8 h-16 w-full" />
      <div className="flex flex-col gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-32 w-full" />
        ))}
      </div>
    </div>
  )
}
