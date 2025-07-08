import { Noise } from "@/registry/default/ui/backgrounds"

export default function BackgroundsNoise() {
  return (
    <div className="bg-background relative h-48 w-full overflow-hidden rounded-lg border">
      <Noise />
      <div className="relative z-10 flex h-full flex-col justify-center p-6">
        <div className="space-y-2">
          <h4 className="text-lg font-medium">Content with Noise Background</h4>
          <p className="text-muted-foreground text-sm">
            The noise background provides a subtle texture that enhances the
            visual depth of your interface without overwhelming the content.
          </p>
          <div className="mt-4 flex gap-2">
            <div className="bg-primary h-2 w-12 rounded-full"></div>
            <div className="bg-primary/60 h-2 w-8 rounded-full"></div>
            <div className="bg-primary/30 h-2 w-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
