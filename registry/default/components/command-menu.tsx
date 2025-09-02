"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type DialogProps } from "@radix-ui/react-dialog"
import { ArrowRightIcon, CornerDownLeftIcon, SearchIcon } from "lucide-react"

import { useIsMac } from "@/registry/default/hooks/use-is-mac"
import { useMutationObserver } from "@/registry/default/hooks/use-mutation-observer"
import { cn } from "@/registry/default/lib/utils"
import { Button } from "@/registry/default/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandFooter,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/default/ui/command"
import { Kbd } from "@/registry/default/ui/kbd"

export function CommandMenu({
  navItems,
  ...props
}: DialogProps & {
  navItems?: { href: string; label?: string }[]
}) {
  const router = useRouter()
  const isMac = useIsMac()
  const [open, setOpen] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<"page" | null>(null)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="secondary"
        className={cn(
          "bg-card text-card-foreground/60 relative h-8 w-full justify-start font-normal shadow-none"
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <SearchIcon />
        <Kbd>{isMac ? "⌘" : "Ctrl"} K</Kbd>
      </Button>
      <CommandDialog
        title="Search documentation..."
        description="Search for a command to run..."
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {navItems ? (
            <CommandGroup heading="Pages">
              {navItems.map((item) => (
                <CommandMenuItem
                  key={item.href}
                  value={`Navigation ${item.label}`}
                  keywords={[
                    "nav",
                    "navigation",
                    item.label?.toLowerCase() ?? item.href.toLowerCase(),
                  ]}
                  onHighlight={() => {
                    setSelectedType("page")
                  }}
                  onSelect={() => {
                    runCommand(() => router.push(item.href))
                  }}
                >
                  <ArrowRightIcon />
                  {item.label}
                </CommandMenuItem>
              ))}
            </CommandGroup>
          ) : null}
        </CommandList>
        <CommandFooter>
          <div className="flex min-w-0 shrink-0 items-center gap-2">
            <Kbd>
              <CornerDownLeftIcon />
            </Kbd>{" "}
            <span className="">
              {selectedType === "page" || selectedType === "component"
                ? "Go to Page"
                : null}
            </span>
          </div>
        </CommandFooter>
      </CommandDialog>
    </>
  )
}

function CommandMenuItem({
  children,
  className,
  onHighlight,
  ...props
}: React.ComponentProps<typeof CommandItem> & {
  onHighlight?: () => void
  "data-selected"?: string
  "aria-selected"?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.()
      }
    })
  })

  return (
    <CommandItem ref={ref} className={cn(className)} {...props}>
      {children}
    </CommandItem>
  )
}
