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

export { Noise, noiseVariants }
