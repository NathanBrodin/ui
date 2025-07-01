import * as React from "react"

import { cn } from "@/registry/default/lib/utils"

export interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({ children, className }: TypographyProps) {
  return <h1 className={cn("mb-2", className)}>{children}</h1>
}

export function TypographyH2({ children, className }: TypographyProps) {
  return <h2 className={cn("mb-2", className)}>{children}</h2>
}

export function TypographyH3({ children, className }: TypographyProps) {
  return <h3 className={cn("mt-2.5 mb-1.5", className)}>{children}</h3>
}

export function TypographyH4({ children, className }: TypographyProps) {
  return <h4 className={cn(className)}>{children}</h4>
}

export function TypographyP({ children, className }: TypographyProps) {
  return <p className={cn(className)}>{children}</p>
}

export function TypographyBlockquote({ children, className }: TypographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className)}>
      {children}
    </blockquote>
  )
}

export function TypographyList({ children, className }: TypographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  )
}

export function TypographyInlineCode({ children, className }: TypographyProps) {
  return (
    <code
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
    >
      {children}
    </code>
  )
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-xl", className)}>{children}</p>
  )
}

export function TypographyLarge({ children, className }: TypographyProps) {
  return (
    <div className={cn("text-lg font-semibold", className)}>{children}</div>
  )
}

export function TypographySmall({ children, className }: TypographyProps) {
  return (
    <small className={cn("text-sm leading-none font-medium", className)}>
      {children}
    </small>
  )
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-muted-foreground text-sm", className)}>{children}</p>
  )
}

export interface TypographyTableProps {
  children: React.ReactNode
  className?: string
}

export function TypographyTable({ children, className }: TypographyTableProps) {
  return (
    <div className={cn("my-6 w-full overflow-y-auto", className)}>
      <table className="w-full">{children}</table>
    </div>
  )
}
