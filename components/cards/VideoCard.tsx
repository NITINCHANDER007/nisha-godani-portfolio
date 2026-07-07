'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Play } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface VideoCardProps {
  title: string
  thumbnailUrl: string
  videoId?: string
  duration?: string
  className?: string
}

export function VideoCard({ title, thumbnailUrl, videoId, duration, className }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying && videoId) {
    return (
      <div className={cn('relative aspect-video overflow-hidden rounded-[var(--radius-md)] bg-black', className)}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={cn(
        'group relative block aspect-video w-full overflow-hidden rounded-[var(--radius-md)] border border-border bg-bg-card text-left',
        className,
      )}
    >
      <Image
        src={thumbnailUrl}
        alt={title}
        fill
        loading="lazy"
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-bg-dark shadow-lift transition-transform group-hover:scale-110">
          <Play size={22} weight="fill" />
        </span>
      </div>
      {duration && (
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
          {duration}
        </span>
      )}
      <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-sm font-medium text-white">
        {title}
      </p>
    </button>
  )
}
