"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

import { Diamond } from "./diamond"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

function Divider() {
  return (
    <section className="-mx-3 flex items-center justify-center md:-mx-12">
      <hr className="border-grid w-full border-t" />
    </section>
  )
}

function SectionDivider() {
  return (
    <>
      <Divider />
      <section className="relative h-4 w-full px-4 sm:px-6">
        <Diamond top left />
        <Diamond top right />
        <Diamond bottom left />
        <Diamond bottom right />
        <svg className="text-primary/20 pointer-events-none absolute inset-0 [z-index:-1] size-full opacity-30 select-none dark:opacity-60">
          <defs>
            <pattern
              id=":R1pefknq6ja:"
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="4"
                stroke="currentColor"
                strokeWidth="1.5"
              ></line>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:R1pefknq6ja:)"></rect>
        </svg>
      </section>
      <Divider />
    </>
  )
}

export { Separator, Divider, SectionDivider }
