export type VideoEntry = {
  id: string
  title: string
  thumbnailUrl: string
  videoId?: string
  duration?: string
}

// Thumbnails reference the channel's default image until specific video IDs are provided.
export const featuredVideos: VideoEntry[] = [
  {
    id: 'video-1',
    title: 'Number Theory — Divisibility Rules Explained',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/default/maxresdefault.webp',
  },
  {
    id: 'video-2',
    title: 'Engineering Mathematics — Differential Equations Basics',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/default/maxresdefault.webp',
  },
  {
    id: 'video-3',
    title: 'Statistics for Decision Making — Hypothesis Testing',
    thumbnailUrl: 'https://i.ytimg.com/vi_webp/default/maxresdefault.webp',
  },
]
