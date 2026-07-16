

import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { List } from '@phosphor-icons/react'
import { navigationItems } from '@/data/navigation'
import { NavbarLink } from './NavbarLink'
import { MobileMenu } from './MobileMenu'
import { Button } from '@/components/ui/Button'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isOpen, open, close } = useMobileMenu()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed left-0 top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'border-b backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent',
        )}
        style={
          isScrolled
            ? {
                backgroundColor: 'var(--navbar-bg-scrolled)',
                borderColor: 'var(--navbar-border-scrolled)',
              }
            : undefined
        }
      >
        <nav
          aria-label="Main navigation"
          className={cn(
            'container-wide flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-[60px]' : 'h-20',
          )}
        >
          <Link
            href="/"
            className="font-display flex-shrink-0 text-2xl font-semibold tracking-tight text-accent-gold transition-opacity hover:opacity-80"
            aria-label="Dr. Nisha Godani — Home"
          >
            Home
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <NavbarLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <Button href="/contact" variant="secondary" size="sm">
                Contact
              </Button>
            </div>

            <button
              type="button"
              onClick={open}
              aria-label="Open menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-bg-secondary md:hidden"
            >
              <List size={22} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu isOpen={isOpen} onClose={close} />
    </>
  )
}
