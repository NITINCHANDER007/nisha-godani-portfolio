import type { ThemeConfig } from '@/types'

export const navigationItems = [
  { label: 'Research', href: '/research' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Publications', href: '/publications' },
  { label: 'Make Maths Easy', href: '/make-maths-easy' },
  { label: 'About', href: '/about' },
] as const

export const themes: ThemeConfig[] = [
  {
    name: 'academic-ivory',
    label: 'Academic Ivory',
    description: 'Classic academic warmth — the prestige of a printed journal',
    swatch: '#F4F1E9',
    isDark: false,
    previewBg: '#F4F1E9',
    previewAccent: '#C9A84C',
  },
  {
    name: 'deep-navy',
    label: 'Deep Navy',
    description: 'Cosmic depth — the universe of research after dark',
    swatch: '#0A0F1E',
    isDark: true,
    previewBg: '#0A0F1E',
    previewAccent: '#C9A84C',
  },
  {
    name: 'dark-research',
    label: 'Dark Research',
    description: 'Maximum legibility for data-intensive exploration',
    swatch: '#0D1117',
    isDark: true,
    previewBg: '#0D1117',
    previewAccent: '#2DD4BF',
  },
  {
    name: 'elegant-light',
    label: 'Elegant Light',
    description: 'White-gallery precision — for formal academic review',
    swatch: '#FFFFFF',
    isDark: false,
    previewBg: '#FFFFFF',
    previewAccent: '#1E3A5F',
  },
]

export const defaultSeoMetadata = {
  siteName: 'Dr. Nisha Godani',
  title: 'Dr. Nisha Godani | Mathematician · Researcher · Educator',
  description:
    'Assistant Professor of Mathematics at Medi-Caps University, Indore. PhD researcher in wormhole physics and modified gravity with 49+ international publications and 1,453+ citations. NET AIR 40, GATE AIR 90. Founder of Make Maths Easy Classes.',
  keywords: [
    'Dr Nisha Godani',
    'Nisha Godani mathematician',
    'Medi-Caps University mathematics',
    'wormhole physics India',
    'modified gravity research',
    'Make Maths Easy Classes Indore',
    'maths coaching Indore PhD',
    'GATE maths coaching Indore',
    'NET maths tutor Indore',
    'mathematics professor Indore',
    'f(R) gravity wormholes',
    'gravitational lensing wormholes',
  ],
  ogImage: '/images/og-image.jpg',
}
