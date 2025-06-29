"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"

const DEFAULT_BASE_THEME = "default"
const DEFAULT_COLOR_THEME = "default"

type ThemeConfig = {
  base: string
  color: string
}

type ThemeContextType = {
  activeTheme: ThemeConfig
  setActiveTheme: (theme: ThemeConfig) => void
  setBaseTheme: (base: string) => void
  setColorTheme: (color: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode
  initialTheme?: ThemeConfig
}) {
  const [activeTheme, setActiveTheme] = useState<ThemeConfig>(() => {
    if (initialTheme) return initialTheme

    // Try to load from localStorage
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("theme-config")
        if (stored) {
          const parsed = JSON.parse(stored)
          if (parsed.base && parsed.color) {
            return parsed
          }
        }
      } catch (error) {
        console.warn("Failed to parse stored theme config:", error)
      }
    }

    return { base: DEFAULT_BASE_THEME, color: DEFAULT_COLOR_THEME }
  })

  const setBaseTheme = (base: string) => {
    setActiveTheme((prev) => {
      const newTheme = { ...prev, base }
      if (typeof window !== "undefined") {
        localStorage.setItem("theme-config", JSON.stringify(newTheme))
      }
      return newTheme
    })
  }

  const setColorTheme = (color: string) => {
    setActiveTheme((prev) => {
      const newTheme = { ...prev, color }
      if (typeof window !== "undefined") {
        localStorage.setItem("theme-config", JSON.stringify(newTheme))
      }
      return newTheme
    })
  }

  useEffect(() => {
    // Remove all existing theme classes
    Array.from(document.body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => {
        document.body.classList.remove(className)
      })

    // Apply base theme
    if (activeTheme.base !== "default") {
      document.body.classList.add(`theme-${activeTheme.base}`)
    }

    // Apply color theme
    if (activeTheme.color !== "default") {
      document.body.classList.add(`theme-${activeTheme.color}`)
    }
  }, [activeTheme])

  // Save to localStorage whenever activeTheme changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme-config", JSON.stringify(activeTheme))
    }
  }, [activeTheme])

  return (
    <ThemeContext.Provider
      value={{ activeTheme, setActiveTheme, setBaseTheme, setColorTheme }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeConfig() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeConfig must be used within an ActiveThemeProvider")
  }
  return context
}
