"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRightIcon, MenuIcon } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer"
import { Separator } from "@/registry/default/ui/separator"

export function MobileNav({
  items,
  className,
}: {
  items: { href: string; label?: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" className={cn("border", className)}>
          <MenuIcon className="text-primary size-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="no-scrollbar overflow-y-auto">
        <DrawerTitle className="hidden">Menu</DrawerTitle>
        <div className="flex flex-col gap-1 overflow-auto p-2.5">
          <div className="mb-4 flex flex-col gap-4">
            <div className="text-primary font-display text-md font-medium">
              Menu
            </div>
            <div className="flex flex-col gap-3">
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
            <Separator />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: LinkProps & {
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn(
        "text-popover-foreground flex items-center justify-start gap-3 text-sm tracking-tight",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="text-primary ml-auto size-4" />
    </Link>
  )
}
