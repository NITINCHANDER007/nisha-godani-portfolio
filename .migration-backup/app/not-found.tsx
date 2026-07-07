import Link from 'next/link'
import type { Metadata } from 'next'
import { House, GraduationCap } from '@phosphor-icons/react/dist/ssr'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page Not Found | Dr. Nisha Godani',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] w-full items-center justify-center pt-20">
      <div className="container-narrow flex flex-col items-center text-center">
        <p className="font-display mb-2 text-8xl font-light text-accent-gold">404</p>
        <h1 className="text-heading-2 font-display mb-3 text-text-primary">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="mb-8 max-w-md text-body text-text-secondary">
          The page you&apos;re looking for may have been moved or doesn&apos;t exist.
          Explore Dr. Godani&apos;s research, publications, or Make Maths Easy classes
          instead.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" href="/" icon={<House size={18} />}>
            Back to Home
          </Button>
          <Button
            variant="secondary"
            href="/publications"
            icon={<GraduationCap size={18} />}
          >
            View Publications
          </Button>
        </div>
      </div>
    </main>
  )
}
