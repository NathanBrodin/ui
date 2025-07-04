import { Kbd } from "@/registry/default/ui/kbd"
import { Separator } from "@/registry/default/ui/separator"

export default function KbdShortcuts() {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Keyboard Shortcuts</h3>
        <p className="text-muted-foreground text-sm">
          Common keyboard shortcuts for your application
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm">Open command palette</span>
          <div className="flex items-center gap-1">
            <Kbd>⌘ K</Kbd>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Quick search</span>
          <div className="flex items-center gap-1">
            <Kbd>⌘ S</Kbd>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm">Toggle sidebar</span>
          <div className="flex items-center gap-1">
            <Kbd>⌘ B</Kbd>
          </div>
        </div>

        <Separator />
      </div>
    </div>
  )
}
