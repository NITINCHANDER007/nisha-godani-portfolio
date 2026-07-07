'use client'

import { motion } from 'framer-motion'
import { YoutubeLogo, Play } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { fadeUp } from '@/lib/animations'

export function YouTubeChannelBlock() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-[var(--radius-lg)] border border-border bg-bg-card p-8 text-center shadow-card sm:p-12"
    >
      <SectionEyebrow label="Free Lectures" color="gold" className="justify-center" />

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#FF0000]/10">
        <YoutubeLogo size={40} weight="fill" className="text-[#FF0000]" />
      </div>

      <h2 className="text-heading-2 font-display mb-3 text-text-primary">
        {mmeDetails.youtube.channelName}
      </h2>
      <p className="text-data mb-3 text-sm text-text-muted">{mmeDetails.youtube.handle}</p>
      <p className="mx-auto mb-8 max-w-lg text-body text-text-secondary">
        {mmeDetails.youtube.description}
      </p>

      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button
          href={mmeDetails.youtube.url}
          variant="youtube"
          icon={<YoutubeLogo size={18} weight="fill" />}
        >
          Visit Channel
        </Button>
        <Button
          href={mmeDetails.youtube.url}
          variant="ghost"
          icon={<Play size={16} weight="fill" />}
        >
          Watch Free Lectures
        </Button>
      </div>
    </motion.div>
  )
}
