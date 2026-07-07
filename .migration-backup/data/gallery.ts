export type GalleryImage = {
  id: string
  src: string
  alt: string
  category: 'classroom' | 'conference' | 'award' | 'portrait'
}

// Placeholder structure — populated as physical photos are collected.
// Uses the verified portrait as the only confirmed image asset.
export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-portrait',
    src: '/images/portrait.jpg',
    alt: 'Dr. Nisha Godani, Assistant Professor of Mathematics',
    category: 'portrait',
  },
]
