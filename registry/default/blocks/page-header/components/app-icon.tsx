import { ReactNode } from "react"
import Link from "next/link"

import { Button } from "@/registry/default/ui/button"

export function AppIcon({ children }: { children: ReactNode }) {
  return (
    <Button asChild variant="ghost" size="icon" className="flex size-8">
      <Link href="/" className="[&_svg]:text-primary">
        {children}
      </Link>
    </Button>
  )
}
