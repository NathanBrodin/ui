import ThemeVisualizer from "@/components/theme-visualizer"

export const dynamic = "force-static"
export const revalidate = false

export default async function ThemesPage() {
  return <ThemeVisualizer />
}
