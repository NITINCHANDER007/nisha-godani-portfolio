'use client'

import { useEffect } from 'react'
import { ArrowCounterClockwise, House } from '@phosphor-icons/react'
import { Button } from '@/components/ui/Button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center pt-20">
      <div className="container-narrow flex flex-col items-center text-center">
        <p className="font-display mb-4 text-7xl font-light text-accent-gold">!</p>
        <h1 className="text-heading-2 font-display mb-3 text-text-primary">
          Something went wrong
        </h1>
        <p className="mb-8 max-w-md text-body text-text-secondary">
          An unexpected error occurred while loading this page. Please try again, or
          return to the homepage.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" icon={<ArrowCounterClockwise size={18} />} onClick={() => reset()}>
            Try Again
          </Button>
          <Button variant="secondary" href="/" icon={<House size={18} />}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}
