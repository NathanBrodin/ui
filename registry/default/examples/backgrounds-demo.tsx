import { Noise } from "@/registry/default/ui/backgrounds"

export default function BackgroundsDemo() {
  return (
    <div className="bg-background relative h-64 w-full overflow-hidden rounded-lg border">
      <Noise />
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Noise Background</h3>
          <p className="text-muted-foreground mt-2">
            Subtle texture adds depth without distraction
          </p>
        </div>
      </div>
    </div>
  )
}
