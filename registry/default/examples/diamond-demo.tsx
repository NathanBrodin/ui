import { Diamond } from "@/registry/default/ui/diamond"

export default function DiamondDemo() {
  return (
    <div className="w-full space-y-8 p-4">
      <div className="border-grid relative h-32 w-full border">
        <Diamond top left />
        <Diamond top right />
        <Diamond bottom left />
        <Diamond bottom right />
      </div>
    </div>
  )
}
