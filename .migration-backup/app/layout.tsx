import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider, ThemeScript } from '@/components/providers/ThemeProvider'
import { ReducedMotionProvider } from '@/components/providers/ReducedMotionProvider'
import { MotionProvider } from '@/components/providers/MotionProvider'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { SkipToContent } from '@/components/ui/SkipToContent'
import { JsonLd } from '@/components/layout/JsonLd'
import { ScrollToTop } from '@/components/interactive/ScrollToTop'
import { generatePersonSchema } from '@/lib/schema'
import { homeMetadata } from '@/lib/metadata'

const cormorant = Cormorant_Garamond({
  weight: ['300', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
})

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const jetbrainsMono = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
})

export const metadata: Metadata = {
  ...homeMetadata(),
  manifest: '/icons/manifest.json',
  icons: {
    icon: [
      { url: '/icons/favicon.ico' },
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F4F1E9' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1E' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = generatePersonSchema()

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <JsonLd data={personSchema} />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ReducedMotionProvider>
          <ThemeProvider>
            <MotionProvider>
              <SkipToContent />
              <ScrollProgress />
              <Navbar />
              {children}
              <Footer />
              <ScrollToTop />
            </MotionProvider>
          </ThemeProvider>
        </ReducedMotionProvider>
      </body>
    </html>
  )
}
