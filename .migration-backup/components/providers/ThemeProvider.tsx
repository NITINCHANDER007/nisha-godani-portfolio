'use client'

import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { ThemeName, ThemeContextValue } from '@/types'
import { THEME_STORAGE_KEY, DEFAULT_THEME } from '@/lib/constants'
import { themes } from '@/data/navigation'

export const ThemeContext = createContext<ThemeContextValue | null>(null)

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeName>(DEFAULT_THEME as ThemeName)

  // On mount, read saved theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemeName | null
    if (saved && themes.some((t) => t.name === saved)) {
      setThemeState(saved)
      document.documentElement.dataset.theme = saved
    }
  }, [])

  const setTheme = useCallback((newTheme: ThemeName) => {
    setThemeState(newTheme)
    document.documentElement.dataset.theme = newTheme
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    } catch {
      // localStorage unavailable (SSR / private mode edge cases)
    }
  }, [])

  const isDark =
    theme === 'deep-navy' || theme === 'dark-research'

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Inline script injected into <head> to apply saved theme BEFORE hydration.
 * Prevents flash of wrong theme on initial load.
 * Must be a plain function (not a module) for synchronous execution.
 */
export function ThemeScript() {
  const script = `
(function() {
  try {
    var saved = localStorage.getItem('${THEME_STORAGE_KEY}');
    var valid = ['academic-ivory', 'deep-navy', 'dark-research', 'elegant-light'];
    if (saved && valid.indexOf(saved) !== -1) {
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = '${DEFAULT_THEME}';
    }
  } catch(e) {
    document.documentElement.dataset.theme = '${DEFAULT_THEME}';
  }
})();
  `.trim()

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
