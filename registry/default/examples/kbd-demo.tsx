import { Kbd } from "@/registry/default/ui/kbd"

export default function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Kbd>⌘ K</Kbd>
        <Kbd>⌥ C</Kbd>
        <Kbd>⇧ E</Kbd>
        <Kbd>⌃ L</Kbd>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Kbd>F1</Kbd>
        <Kbd>F2</Kbd>
        <Kbd>F12</Kbd>
        <Kbd>Esc</Kbd>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Kbd>←</Kbd>
        <Kbd>↑</Kbd>
        <Kbd>→</Kbd>
        <Kbd>↓</Kbd>
      </div>

      <div className="text-center">
        <p className="text-muted-foreground flex gap-1 text-sm">
          Press <Kbd>⌘ K</Kbd> to open the command palette
        </p>
      </div>
    </div>
  )
}
