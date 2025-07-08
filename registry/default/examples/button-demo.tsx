import { GithubIcon, StarIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button>
        <StarIcon />
        Get started
      </Button>
      <Button variant="outline">
        <GithubIcon />
        View Source
      </Button>
    </div>
  )
}
