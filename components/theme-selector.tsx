"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { baseColors } from "@/lib/colors"
import { useThemeConfig } from "@/registry/default/components/active-theme"
import { useMetaColor } from "@/registry/default/hooks/use-meta-color"
import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export function ThemeSelector({
  variant,
  className,
}: {
  variant?: "small"
  className?: string
}) {
  const { activeTheme, setActiveTheme } = useThemeConfig()
  const { setTheme, resolvedTheme: theme } = useTheme()
  const { setMetaColor, metaColor } = useMetaColor()

  React.useEffect(() => {
    setMetaColor(metaColor)
  }, [metaColor, setMetaColor])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {variant !== "small" ? (
          <Button variant="outline" className={cn("capitalize", className)}>
            Theme: {theme} {activeTheme}
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className="group/toggle size-8"
            title="Toggle theme"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4.5"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M12 3l0 18" />
              <path d="M12 9l4.65 -4.65" />
              <path d="M12 14.3l7.37 -7.37" />
              <path d="M12 19.6l8.85 -8.85" />
            </svg>
            <span className="sr-only">Toggle theme</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuLabel>Mode</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Theme</DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={activeTheme}
          onValueChange={setActiveTheme}
        >
          {baseColors.map((color) => (
            <DropdownMenuRadioItem key={color.name} value={color.name}>
              {color.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
