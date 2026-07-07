export type PageSeoData = {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonical: string
  type?: 'website' | 'profile' | 'article'
}

export type BreadcrumbItem = {
  label: string
  href: string
}
