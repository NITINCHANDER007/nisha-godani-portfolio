export type ThemeName = 'academic-ivory' | 'deep-navy' | 'dark-research' | 'elegant-light'

export type ThemeConfig = {
  name: ThemeName
  label: string
  description: string
  swatch: string
  isDark: boolean
  previewBg: string
  previewAccent: string
}

export type ThemeContextValue = {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  isDark: boolean
}
