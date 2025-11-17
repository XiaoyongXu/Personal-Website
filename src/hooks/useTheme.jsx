import { useEffect, useState } from 'react'

const THEME_KEY = 'theme'

// Supported theme values: 'midnight' (dark) and 'minimal' (light)
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY)
      if (stored === 'midnight' || stored === 'minimal') return stored
      // legacy support for old values
      if (stored === 'dark') return 'midnight'
      if (stored === 'light') return 'minimal'
    } catch (e) {}
    // default to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'midnight'
    return 'minimal'
  })

  useEffect(() => {
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {}
    const html = document.documentElement
    // remove any previous theme classes
    html.classList.remove('theme-midnight', 'theme-minimal', 'dark')
    if (theme === 'midnight') {
      html.classList.add('theme-midnight')
      // keep legacy 'dark' class for components that still use it
      html.classList.add('dark')
    } else {
      html.classList.add('theme-minimal')
    }
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'midnight' ? 'minimal' : 'midnight'))

  return { theme, setTheme, toggle }
}
