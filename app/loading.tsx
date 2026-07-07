export default function Loading() {
  return (
    <div
      className="flex min-h-[70vh] w-full items-center justify-center pt-20"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-border border-t-accent-gold" />
        </div>
        <p className="text-caption text-text-muted">Loading</p>
      </div>
    </div>
  )
}
