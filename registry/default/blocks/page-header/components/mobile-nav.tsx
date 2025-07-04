"use client"

import * as React from "react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/navigation"
import { ChevronRightIcon, MenuIcon } from "lucide-react"

import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/default/ui/drawer"
import { Separator } from "@/registry/default/ui/separator"

export function MobileNav({
  tree,
  items,
  className,
}: {
  tree: typeof source.pageTree
  items: { href: string; label: string }[]
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "extend-touch-target flex size-8 touch-manipulation items-center justify-center rounded-md border !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent",
            className
          )}
        >
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
              <MobileLink href="/" onOpenChange={setOpen}>
                Home
              </MobileLink>
              {items.map((item, index) => (
                <MobileLink key={index} href={item.href} onOpenChange={setOpen}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
            <Separator />
          </div>
          <div className="flex flex-col gap-4">
            {tree?.children?.map((group, index) => {
              if (group.type === "folder") {
                return (
                  <div key={index} className="flex flex-col gap-4">
                    <div className="text-primary font-display text-md font-medium">
                      {group.name}
                    </div>
                    <div className="flex flex-col gap-3">
                      {group.children.map((item) => {
                        if (item.type === "page") {
                          return (
                            <MobileLink
                              key={`${item.url}-${index}`}
                              href={item.url}
                              onOpenChange={setOpen}
                            >
                              {item.name}
                            </MobileLink>
                          )
                        }
                      })}
                    </div>
                    <Separator />
                  </div>
                )
              }
            })}
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
