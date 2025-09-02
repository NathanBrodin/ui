import * as React from "react"
import Link from "next/link"

import { siteConfig } from "@/registry/default/lib/config"
import { cn } from "@/registry/default/lib/utils"
import { Noise } from "@/registry/default/ui/backgrounds"
import { Diamond } from "@/registry/default/ui/diamond"

export function PageFooter({
  className,
  ...props
}: React.ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "bg-primary-fixed text-primary-foreground-fixed relative",
        className
      )}
      {...props}
    >
      <Noise variant="lighter" />
      <div className="container-wrapper 3xl:fixed:px-0 px-3 md:px-8 lg:px-12">
        <div className="3xl:fixed:container border-grid/30 relative flex gap-2 border-x px-4 py-2 sm:px-6">
          <Diamond top left />
          <Diamond top right />
          <div className="flex w-full items-center justify-between text-xs leading-5">
            <p className="">
              Built by{" "}
              <Link
                className="underline decoration-white/20 underline-offset-2 hover:decoration-white"
                href="https://brodin.dev"
              >
                Nathan Brodin
              </Link>{" "}
              © 2025
            </p>
            <Link
              className="underline decoration-white/20 underline-offset-2 hover:decoration-white"
              href={siteConfig.links.github}
            >
              GitHub ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
