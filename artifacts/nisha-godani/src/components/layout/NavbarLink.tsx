

import { Link } from 'wouter'
import { useLocation } from 'wouter'
import { cn } from '@/lib/utils'

interface NavbarLinkProps {
  href: string
  label: string
}

export function NavbarLink({ href, label }: NavbarLinkProps) {
  const [pathname] = useLocation()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group relative py-2 text-[15px] font-medium transition-colors',
        isActive ? 'text-accent-gold' : 'text-text-secondary hover:text-text-primary',
      )}
    >
      {label}
      <span
        aria-hidden="true"
        className={cn(
          'absolute bottom-0 left-0 h-[1.5px] bg-accent-gold transition-all duration-200 ease-out',
          isActive ? 'w-full' : 'w-0 group-hover:w-full',
        )}
      />
    </Link>
  )
}
