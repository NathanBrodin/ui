"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { type DialogProps } from "@radix-ui/react-dialog"
import { IconArrowRight } from "@tabler/icons-react"
import { CornerDownLeftIcon, SearchIcon, SquareDashedIcon } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import { useIsMac } from "@/hooks/use-is-mac"
import { useMutationObserver } from "@/hooks/use-mutation-observer"
import { copyToClipboard } from "@/components/copy-button"
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

import "@/registry/default/ui/dialog"

import { Kbd } from "@/registry/default/ui/kbd"
import { Separator } from "@/registry/default/ui/separator"

export function CommandMenu({
  tree,
  blocks,
  ...props
}: DialogProps & {
  tree: typeof source.pageTree
  blocks?: { name: string; description: string; categories: string[] }[]
}) {
  const router = useRouter()
  const isMac = useIsMac()
  const [config] = useConfig()
  const [open, setOpen] = React.useState(false)
  const [selectedType, setSelectedType] = React.useState<
    "page" | "component" | "block" | null
  >(null)
  const [copyPayload, setCopyPayload] = React.useState("")
  const packageManager = config.packageManager || "bun"

  const handlePageHighlight = React.useCallback(
    (isComponent: boolean, item: { url: string; name?: React.ReactNode }) => {
      if (isComponent) {
        const componentName = item.url.split("/").pop()
        setSelectedType("component")
        setCopyPayload(
          `${packageManager} dlx shadcn@latest add ${siteConfig.url}/r/${componentName}.json`
        )
      } else {
        setSelectedType("page")
        setCopyPayload("")
      }
    },
    [packageManager, setSelectedType, setCopyPayload]
  )

  const handleBlockHighlight = React.useCallback(
    (block: { name: string; description: string; categories: string[] }) => {
      setSelectedType("block")
      setCopyPayload(`${packageManager} dlx shadcn@latest add ${block.name}`)
    },
    [setSelectedType, setCopyPayload, packageManager]
  )

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

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

      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        runCommand(() => {
          if (selectedType === "block") {
            copyToClipboard(copyPayload)
          }

          if (selectedType === "page" || selectedType === "component") {
            copyToClipboard(copyPayload)
          }
        })
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [copyPayload, runCommand, selectedType, packageManager])

  return (
    <>
      <Button
        variant="secondary"
        className={cn(
          "bg-surface text-surface-foreground/60 relative h-8 w-full justify-start font-normal shadow-none"
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
          {tree.children.map((group) => (
            <CommandGroup key={group.$id} heading={group.name}>
              {group.type === "folder" &&
                group.children.map((item) => {
                  if (item.type === "page") {
                    const isComponent = item.url.includes("/components/")

                    return (
                      <CommandMenuItem
                        key={item.url}
                        value={
                          item.name?.toString()
                            ? `${group.name} ${item.name}`
                            : ""
                        }
                        keywords={isComponent ? ["component"] : undefined}
                        onHighlight={() =>
                          handlePageHighlight(isComponent, item)
                        }
                        onSelect={() => {
                          runCommand(() => router.push(item.url))
                        }}
                      >
                        {isComponent ? (
                          <div className="border-muted-foreground aspect-square size-4 rounded-full border border-dashed" />
                        ) : (
                          <IconArrowRight />
                        )}
                        {item.name}
                      </CommandMenuItem>
                    )
                  }
                  return null
                })}
            </CommandGroup>
          ))}
          {blocks?.length ? (
            <CommandGroup heading="Blocks">
              {blocks.map((block) => (
                <CommandMenuItem
                  key={block.name}
                  value={block.name}
                  onHighlight={() => {
                    handleBlockHighlight(block)
                  }}
                  keywords={[
                    "block",
                    block.name,
                    block.description,
                    ...block.categories,
                  ]}
                  onSelect={() => {
                    runCommand(() =>
                      router.push(
                        `/blocks/${block.categories[0]}#${block.name}`
                      )
                    )
                  }}
                >
                  <SquareDashedIcon />
                  {block.description}
                  <span className="text-muted-foreground ml-auto font-mono text-xs font-normal tabular-nums">
                    {block.name}
                  </span>
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
          {copyPayload && (
            <>
              <Separator orientation="vertical" className="!h-4" />
              <div className="flex min-w-0 items-center gap-1">
                <Kbd className="shrink-0">{isMac ? "⌘" : "Ctrl"} C</Kbd>
                <span className="truncate">{copyPayload}</span>
              </div>
            </>
          )}
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
