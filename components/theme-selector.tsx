"use client"

import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { useThemeConfig } from "@/components/active-theme"
import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

const BASE_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Scaled",
    value: "scaled",
  },
  {
    name: "Mono",
    value: "mono",
  },
]

const COLOR_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Amber",
    value: "amber",
  },
  {
    name: "Rose",
    value: "rose",
  },
]

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setBaseTheme, setColorTheme } = useThemeConfig()

  const getThemeDisplayName = (value: string, themes: typeof BASE_THEMES) => {
    return themes.find((theme) => theme.value === value)?.name || value
  }

  return (
    <div className={cn("flex items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" id="theme-selector" size="sm">
            <span className="font-medium">Theme:</span>
            <span className="font-light">
              {activeTheme.base === "default" && activeTheme.color === "default"
                ? "Default"
                : `${getThemeDisplayName(activeTheme.base, BASE_THEMES)} - ${getThemeDisplayName(activeTheme.color, COLOR_THEMES)}`}
            </span>
            <ChevronDownIcon className="size-3" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>Base Theme</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={activeTheme.base}
              onValueChange={setBaseTheme}
            >
              {BASE_THEMES.map((theme) => (
                <DropdownMenuRadioItem key={theme.value} value={theme.value}>
                  {theme.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={activeTheme.color}
              onValueChange={setColorTheme}
            >
              {COLOR_THEMES.map((theme) => (
                <DropdownMenuRadioItem key={theme.value} value={theme.value}>
                  {theme.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
