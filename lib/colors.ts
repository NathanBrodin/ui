export const baseColors = [
  {
    name: "default",
    label: "Default",
    activeColor: {
      light: "oklch(0.59 0.2 355.89)",
      dark: "oklch(0.59 0.2 355.89)",
    },
  },
  {
    name: "blue",
    label: "Zed",
    activeColor: {
      light: "oklch(0.59 0.2 355.89)",
      dark: "oklch(0.59 0.2 355.89)",
    },
  },
] as const

export type BaseColor = (typeof baseColors)[number]
