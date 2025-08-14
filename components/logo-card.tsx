"use client"

import Image from "next/image"
import { CopyIcon, DownloadIcon } from "lucide-react"

import { cn } from "@/registry/default/lib/utils"

export function LogoCard({
  className,
  src,
  alt,
  svgContent,
  name,
  ...props
}: React.ComponentProps<"div"> & {
  src?: string
  alt?: string
  svgContent?: React.ReactNode
  name?: string
}) {
  const isSvg = Boolean(svgContent)
  const displayName = name || alt || "Logo"

  const handleCopySvg = async () => {
    if (svgContent && typeof svgContent === "string") {
      try {
        await navigator.clipboard.writeText(svgContent)
      } catch (err) {
        console.error("Failed to copy SVG:", err)
      }
    }
  }

  const handleDownloadPng = () => {
    if (src) {
      const link = document.createElement("a")
      link.href = src
      link.download = `${displayName.toLowerCase().replace(/\s+/g, "-")}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div
      className={cn(
        "default-border-color flex w-full flex-col items-center justify-center overflow-clip rounded-sm border dark:border-gray-600/20",
        className
      )}
      {...props}
    >
      <div className="bg-accent-blue flex w-full flex-col items-center justify-center gap-4 px-4 py-8 dark:border-gray-400/10 dark:bg-gray-500/5">
        <div className="flex w-[80px]">
          {!src ? (
            <div className="flex h-full w-full items-center justify-center">
              {svgContent}
            </div>
          ) : (
            <Image
              src={src}
              alt={alt || displayName}
              className="h-auto w-full"
            />
          )}
        </div>
      </div>
      <button
        onClick={isSvg ? handleCopySvg : handleDownloadPng}
        className="text-offgray-900 dark:text-offgray-100 flex w-full cursor-pointer items-center justify-center gap-2 border-t bg-gray-50 py-2 text-xs hover:bg-gray-100 dark:border-gray-400/10 dark:bg-gray-500/10 dark:hover:bg-gray-500/20"
      >
        {isSvg ? (
          <>
            <CopyIcon className="h-3 w-3" />
            Copy SVG
          </>
        ) : (
          <>
            <DownloadIcon className="h-3 w-3" />
            Download PNG
          </>
        )}
      </button>
    </div>
  )
}
