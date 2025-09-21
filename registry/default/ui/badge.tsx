import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-xs border border-dotted px-1 py-0.5 text-xs font-mono w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "text-primary-fixed bg-grid/50 border-primary [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        purple:
          "border-purple-300 bg-purple-200/10 text-purple-900 dark:border-purple-400/15 dark:bg-purple-800/5 dark:text-purple-200",
        blue: "border-blue-300 bg-blue-200/10 text-blue-900 dark:border-blue-400/15 dark:bg-blue-800/5 dark:text-blue-200",
        cyan: "border-cyan-300 bg-cyan-200/10 text-cyan-900 dark:border-cyan-400/15 dark:bg-cyan-800/5 dark:text-cyan-200",
        orange:
          "border-orange-300 bg-orange-200/10 text-orange-900 dark:border-orange-400/15 dark:bg-orange-800/5 dark:text-orange-200",
        green:
          "border-green-300 bg-green-200/10 text-green-900 dark:border-green-400/15 dark:bg-green-800/5 dark:text-green-200",
        teal: "border-teal-300 bg-teal-200/10 text-teal-900 dark:border-teal-400/15 dark:bg-teal-800/5 dark:text-teal-200",
        fuchsia:
          "border-fuchsia-300 bg-fuchsia-200/10 text-fuchsia-900 dark:border-fuchsia-400/15 dark:bg-fuchsia-800/5 dark:text-fuchsia-200",
        yellow:
          "border-yellow-300 bg-yellow-200/10 text-yellow-900 dark:border-yellow-400/15 dark:bg-yellow-800/5 dark:text-yellow-200",
        gray: "border-gray-300 bg-gray-200/10 text-gray-900 dark:border-gray-400/15 dark:bg-gray-800/5 dark:text-gray-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
