import React, {createContext, useContext, useEffect, useState} from 'react'
import type {Theme} from '@/types'
import '@/assets/fonts/lufga/lufga-font.css'

import '@/styles/variables.scss'
import '@/styles/theme-utils.scss'
import '@/styles/utils.scss'
import light from "@/theme/modes/light";
import dark from "@/theme/modes/dark";
import {tokens} from "@/theme/tokens";

// Sample tokens (replace with import if needed)


const themes: Record<Theme, Record<string, string>> = {light, dark}

const toCSSVarName = (key: string) =>
  `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`

const injectTheme = (themeObj: Record<string, string>) => {
  const root = document.documentElement
  Object.entries(themeObj).forEach(([key, value]) => {
    root.style.setProperty(toCSSVarName(key), value)
  })
}

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
                                                                         children,
                                                                       }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    injectTheme({...themes[theme], ...tokens})
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="body-bg">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
