export const baseColors = [
  {
    name: "default",
    label: "Default",
  },
  {
    name: "blue",
    label: "Zed",
  },
] as const

export type BaseColor = (typeof baseColors)[number]
