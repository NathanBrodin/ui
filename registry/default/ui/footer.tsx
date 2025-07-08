import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Noise } from "@/registry/default/ui/backgrounds"
import { Diamond } from "@/registry/default/ui/diamond"

function Footer({
  githubLink,
  className,
  ...props
}: React.ComponentProps<"footer"> & { githubLink: string }) {
  return (
    <footer
      className={cn(
        "bg-primary-fixed text-primary-foreground-fixed relative",
        className
      )}
      {...props}
    >
      <Noise variant="lighter" />
      <div className="border-grid/30 relative mx-3 flex border-x px-4 py-2 sm:px-6 md:mx-8 lg:mx-12">
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
            href={githubLink}
          >
            GitHub ↗
          </Link>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
