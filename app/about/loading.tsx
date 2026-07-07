import { Skeleton } from '@/components/ui/Skeleton'

export default function AboutLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading about page">
      <Skeleton className="mb-4 h-4 w-40" />
      <Skeleton className="mb-12 h-12 w-3/4 max-w-2xl" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Skeleton className="h-96" />
        <div className="flex flex-col gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}
