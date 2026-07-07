import { Skeleton } from '@/components/ui/Skeleton'

export default function GalleryLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading gallery">
      <Skeleton className="mb-4 h-4 w-40" />
      <Skeleton className="mb-3 h-12 w-3/4 max-w-2xl" />
      <Skeleton className="mb-12 h-6 w-1/2 max-w-xl" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
        <Skeleton className="aspect-[3/4] w-full" />
        <div className="flex flex-col gap-5">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24 w-full" />
          ))}
        </div>
      </div>
      <Skeleton className="mb-8 h-8 w-48" />
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-32" />
        ))}
      </div>
    </div>
  )
}
