import { useState, useEffect } from 'react'

const STORAGE_KEY = 'portfolio-theme'
const DARK = 'dark'
const LIGHT = 'light'

const getInitialTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK
}

export const useTheme = () => {
  const [theme, setTheme] = useState(DARK)

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  const toggle = () => {
    const next = theme === DARK ? LIGHT : DARK
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(STORAGE_KEY, next)
  }

  return { theme, toggle, isDark: theme === DARK }
}
