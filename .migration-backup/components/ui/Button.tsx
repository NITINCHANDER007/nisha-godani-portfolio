'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import { cn, isExternalUrl } from '@/lib/utils'
import type { ReactNode, ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-body font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-gold text-bg-dark hover:bg-accent-gold-hover hover:scale-[1.02] active:scale-[0.98] rounded-[var(--radius-base)] shadow-sm',
        secondary:
          'bg-transparent border-[1.5px] border-current/40 text-text-primary hover:border-current hover:bg-current/5 rounded-[var(--radius-base)]',
        ghost:
          'bg-transparent text-accent-gold hover:text-accent-gold-hover underline-offset-4 decoration-1 hover:underline px-0',
        whatsapp:
          'bg-[#25D366] text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] rounded-[var(--radius-md)] shadow-sm',
        youtube:
          'bg-[#FF0000] text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] rounded-[var(--radius-base)] shadow-sm',
      },
      size: {
        sm: 'text-sm px-4 py-2',
        md: 'text-[15px] px-6 py-3.5',
        lg: 'text-base px-8 py-4',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  href?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

export function Button({
  href,
  variant,
  size,
  fullWidth,
  icon,
  iconPosition = 'left',
  children,
  className,
  onClick,
  ariaLabel,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className)

  const content = (
    <>
      {icon && iconPosition === 'left' && <span aria-hidden="true">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span aria-hidden="true">{icon}</span>}
    </>
  )

  if (href) {
    if (isExternalUrl(href)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel ? `${ariaLabel} (opens in new tab)` : undefined}
        >
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick} aria-label={ariaLabel} {...rest}>
      {content}
    </button>
  )
}
