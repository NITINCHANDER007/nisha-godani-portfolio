import { Skeleton } from '@/components/ui/Skeleton'

export default function ContactLoading() {
  return (
    <div className="container-wide pt-32 pb-20" role="status" aria-label="Loading contact page">
      <Skeleton className="mx-auto mb-3 h-10 w-1/2 max-w-md" />
      <Skeleton className="mx-auto mb-12 h-5 w-1/3 max-w-sm" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Skeleton className="h-80" />
        <Skeleton className="h-80" />
      </div>
    </div>
  )
}
