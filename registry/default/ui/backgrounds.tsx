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
        backgroundImage: "url(./backgrounds/noise.png)",
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
        "fill-primary/30 stroke-primary/30 pointer-events-none absolute inset-0 [z-index:-1] size-full [mask-image:linear-gradient(to_top,_#ffffffad,_transparent)] opacity-[.30]",
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

function Atari() {
  return (
    <svg
      viewBox="0 0 800 800"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [z-index:-1] w-full scale-y-[-1] [mask-image:linear-gradient(to_bottom,_#ffffffad,_transparent)]"
    >
      <rect width="100%" height="100%" fill="transparent"></rect>
      <path
        d="M 400 0 C 100 576.4, 100 576.4, -200 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 130 576.4, 130 576.4, -140 880"
        stroke="#FF0000"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 160 576.4, 160 576.4, -80 880"
        stroke="#FFD700"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 190 576.4, 190 576.4, -20 880"
        stroke="#00AA55"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 220 576.4, 220 576.4, 40 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 250 576.4, 250 576.4, 100 880"
        stroke="#FF0000"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 280 576.4, 280 576.4, 160 880"
        stroke="#FFD700"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 310 576.4, 310 576.4, 220 880"
        stroke="#00AA55"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 340 576.4, 340 576.4, 280 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 370 576.4, 370 576.4, 340 880"
        stroke="#FF0000"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 400 576.4, 400 576.4, 400 880"
        stroke="#FFD700"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 430 576.4, 430 576.4, 460 880"
        stroke="#00AA55"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 460 576.4, 460 576.4, 520 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 490 576.4, 490 576.4, 580 880"
        stroke="#FF0000"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 520 576.4, 520 576.4, 640 880"
        stroke="#FFD700"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 550 576.4, 550 576.4, 700 880"
        stroke="#00AA55"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 580 576.4, 580 576.4, 760 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 610 576.4, 610 576.4, 820 880"
        stroke="#FF0000"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 640 576.4, 640 576.4, 880 880"
        stroke="#FFD700"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 670 576.4, 670 576.4, 940 880"
        stroke="#00AA55"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
      <path
        d="M 400 0 C 700 576.4, 700 576.4, 1000 880"
        stroke="#0075e0"
        strokeWidth="24"
        fill="none"
        opacity="1"
        pathLength="1"
        strokeDashoffset="0px"
        strokeDasharray="1px 1px"
      ></path>
    </svg>
  )
}

export { Noise, noiseVariants, Tiles, Atari }
