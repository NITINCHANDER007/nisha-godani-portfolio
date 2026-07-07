'use client'

import { motion } from 'framer-motion'
import { YoutubeLogo } from '@phosphor-icons/react'
import { mmeDetails } from '@/data/mme'
import { featuredVideos } from '@/data/videos'
import { SectionWrapper } from '@/components/layout/SectionWrapper'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { Button } from '@/components/ui/Button'
import { staggerContainer, fadeUp } from '@/lib/animations'

export function YouTubeSection() {
  return (
    <SectionWrapper background="dark" ariaLabelledBy="youtube-heading">
      <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <SectionEyebrow label="Free Mathematics Content" color="teal" />
          <h2 id="youtube-heading" className="text-heading-1 font-display text-text-inverse">
            My Math — Open Access Mathematics
          </h2>
          <p className="mt-3 text-body text-text-inverse/60">
            {mmeDetails.youtube.handle} · {mmeDetails.youtube.description}
          </p>
        </div>
        <Button
          href={mmeDetails.youtube.url}
          variant="youtube"
          icon={<YoutubeLogo size={20} weight="fill" />}
          className="flex-shrink-0"
        >
          Subscribe
        </Button>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {featuredVideos.map((video) => (
          <motion.div key={video.id} variants={fadeUp}>
            <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[var(--radius-md)] border border-white/10 bg-bg-dark-secondary p-6 text-center">
              <YoutubeLogo size={36} weight="fill" className="mb-3 text-[#FF0000]" />
              <p className="text-sm font-medium text-text-inverse/80">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-10 flex justify-center">
        <Button href={mmeDetails.youtube.url} variant="ghost" className="text-text-inverse">
          Watch all lectures free →
        </Button>
      </div>
    </SectionWrapper>
  )
}
