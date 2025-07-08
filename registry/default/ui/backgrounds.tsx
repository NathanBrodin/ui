import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const noiseVariants = cva(
  "pointer-events-none absolute inset-0 bg-repeat bg-[size:180px]",
  {
    variants: {
      variant: {
        default: "[z-index:-1] opacity-[0.035] dark:opacity-[0.015]",
        lighter: "z-0 dark:opacity-[0.015]  opacity-[.03]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Noise({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof noiseVariants>) {
  return (
    <div
      style={{
        backgroundImage: "url(backgrounds/noise.png)",
      }}
      className={cn(noiseVariants({ variant, className }))}
      {...props}
    />
  )
}

function Tiles({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 [z-index:-1] size-full [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] fill-blue-500/50 stroke-blue-500/50 opacity-[.30]",
        className
      )}
      style={{
        visibility: "visible",
      }}
    >
      <defs>
        <pattern
          id=":R1oafknq6ja:"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path d="M.5 20V.5H20" fill="none" strokeDasharray="0"></path>
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill="url(#:R1oafknq6ja:)"
      ></rect>
    </svg>
  )
}

export { Noise, noiseVariants, Tiles }
