"use client"

import * as React from "react"
import { GalleryHorizontalIcon } from "lucide-react"

import { useLayout } from "@/registry/default/components/providers/layout-provider"
import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"

export function LayoutSelector({
  className,
}: React.ComponentProps<typeof Button>) {
  const { layout, setLayout } = useLayout()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        const newLayout = layout === "fixed" ? "full" : "fixed"
        setLayout(newLayout)
      }}
      className={cn("size-8", className)}
      title="Toggle layout"
    >
      <span className="sr-only">Toggle layout</span>
      <GalleryHorizontalIcon />
    </Button>
  )
}
