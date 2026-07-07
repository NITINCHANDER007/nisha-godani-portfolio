import { Link } from 'wouter'
import { CaretRight } from '@phosphor-icons/react/dist/ssr'
import type { BreadcrumbItem } from '@/types'
import { generateBreadcrumbSchema } from '@/lib/schema'
import { SITE_URL } from '@/lib/constants'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const fullItems = [{ label: 'Home', href: '/' }, ...items]
  const schema = generateBreadcrumbSchema(
    fullItems.map((item) => ({
      name: item.label,
      url: `${SITE_URL}${item.href}`,
    })),
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="container-wide pt-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <CaretRight size={12} aria-hidden="true" />}
                {isLast ? (
                  <span aria-current="page" className="text-text-secondary">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="transition-colors hover:text-accent-gold">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
