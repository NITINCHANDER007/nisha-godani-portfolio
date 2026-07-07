

import { Link } from 'wouter'
import { useLocation } from 'wouter'
import { AnimatePresence, motion } from 'framer-motion'
import { X, WhatsappLogo, YoutubeLogo } from '@phosphor-icons/react'
import { navigationItems } from '@/data/navigation'
import { personalDetails } from '@/data/personal'
import { mmeDetails } from '@/data/mme'
import { ThemeSwitcher } from '@/components/interactive/ThemeSwitcher'
import { buildWhatsAppUrl } from '@/lib/utils'
import {
  mobileMenuOverlay,
  mobileMenuContainer,
  mobileMenuItems,
  mobileMenuItem,
} from '@/lib/animations'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [pathname] = useLocation()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-bg-dark/70 backdrop-blur-sm md:hidden"
            variants={mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed right-0 top-0 z-[90] flex h-full w-[88%] max-w-sm flex-col bg-bg-dark md:hidden"
            variants={mobileMenuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="font-display text-xl font-semibold text-accent-gold">
                NG
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <motion.nav
              variants={mobileMenuItems}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8"
              aria-label="Mobile primary navigation"
            >
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <motion.div key={item.href} variants={mobileMenuItem}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      aria-current={isActive ? 'page' : undefined}
                      className={`font-display block py-3 text-3xl font-light transition-colors ${
                        isActive ? 'text-accent-gold' : 'text-white/90 hover:text-accent-gold'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                )
              })}
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/gallery"
                  onClick={onClose}
                  className="font-display block py-3 text-3xl font-light text-white/90 transition-colors hover:text-accent-gold"
                >
                  Gallery
                </Link>
              </motion.div>
              <motion.div variants={mobileMenuItem}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="font-display block py-3 text-3xl font-light text-white/90 transition-colors hover:text-accent-gold"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.nav>

            <motion.div
              variants={mobileMenuItem}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3 border-t border-white/10 px-6 py-6"
            >
              <a
                href={buildWhatsAppUrl(mmeDetails.whatsapp, mmeDetails.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[#25D366] py-3.5 text-[15px] font-semibold text-white"
              >
                <WhatsappLogo size={20} weight="fill" />
                Enquire on WhatsApp
              </a>
              <a
                href={personalDetails.socialProfiles.find((p) => p.platform === 'youtube')?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-[var(--radius-base)] border border-white/20 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                <YoutubeLogo size={18} weight="fill" />
                Watch Free Lectures
              </a>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs text-white/50">Theme</span>
                <ThemeSwitcher variant="mobile" />
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
