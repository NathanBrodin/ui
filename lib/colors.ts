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
  {
    name: "amber",
    label: "Amber",
    activeColor: {
      light: "oklch(0.67 0.11 118.91)",
      dark: "oklch(0.68 0.06 132.45)",
    },
  },
  {
    name: "rose",
    label: "Rose",
    activeColor: {
      light: "oklch(0.56 0.13 43.00)",
      dark: "oklch(0.56 0.13 43.00)",
    },
  },
] as const

export type BaseColor = (typeof baseColors)[number]
