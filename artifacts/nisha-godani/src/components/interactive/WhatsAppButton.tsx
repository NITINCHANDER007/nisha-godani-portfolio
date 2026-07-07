

import { motion } from 'framer-motion'
import { WhatsappLogo } from '@phosphor-icons/react'
import { buildWhatsAppUrl, cn } from '@/lib/utils'

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline'
  phone: string
  message?: string
  label?: string
  className?: string
}

export function WhatsAppButton({
  variant = 'inline',
  phone,
  message,
  label = 'Chat on WhatsApp',
  className,
}: WhatsAppButtonProps) {
  const href = buildWhatsAppUrl(phone, message)

  if (variant === 'floating') {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp (opens WhatsApp)"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className={cn(
          'fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift md:hidden',
          className,
        )}
      >
        <WhatsappLogo size={28} weight="fill" />
      </motion.a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp (opens in new tab)"
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-[#25D366] px-6 py-3.5 text-[15px] font-semibold text-white transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]',
        className,
      )}
    >
      <WhatsappLogo size={20} weight="fill" />
      {label}
    </a>
  )
}
