'use client'

import { useState } from 'react'
import Image from 'next/image'
import { personalDetails } from '@/data/personal'
import { cn } from '@/lib/utils'

interface PortraitImageProps {
  /** 'circle' wraps in a circular container. 'fill' fills its parent (parent must be relative+sized). */
  variant?: 'circle' | 'fill'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  priority?: boolean
  sizes?: string
}

const sizeMap = {
  sm: 'h-48 w-48',
  md: 'h-64 w-64 sm:h-80 sm:w-80',
  lg: 'h-72 w-72 sm:h-80 sm:w-80',
}

export function PortraitImage({
  variant = 'circle',
  size = 'md',
  className,
  priority = false,
  sizes = '(max-width: 640px) 240px, (max-width: 1024px) 300px, 340px',
}: PortraitImageProps) {
  const [imgError, setImgError] = useState(false)

  const fallback = (
    <div className="flex h-full w-full items-center justify-center bg-bg-dark-secondary">
      <span
        className="font-display text-4xl font-semibold text-accent-gold"
        aria-label="Dr. Nisha Godani initials"
      >
        NG
      </span>
    </div>
  )

  if (variant === 'fill') {
    return imgError ? (
      fallback
    ) : (
      <Image
        src={personalDetails.portrait.src}
        alt={personalDetails.portrait.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-cover', className)}
        onError={() => setImgError(true)}
      />
    )
  }

  // Circle variant
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full',
        sizeMap[size],
        className,
      )}
    >
      {imgError ? (
        fallback
      ) : (
        <Image
          src={personalDetails.portrait.src}
          alt={personalDetails.portrait.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  )
}
