import { Check, Clipboard } from "lucide-react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export function Color({
  name,
  cssVar,
  description,
}: {
  name: string
  cssVar: string
  description?: string
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 0 })

  return (
    <div>
      <div
        className="border-border group relative h-16 w-full cursor-pointer rounded-lg border-1 [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:h-3.5 [&>svg]:w-3.5 [&>svg]:opacity-0 [&>svg]:transition-opacity"
        style={{
          backgroundColor: cssVar.startsWith("--") ? `var(${cssVar})` : cssVar,
        }}
        onClick={() => copyToClipboard(cssVar)}
      >
        {isCopied ? (
          <Check className="h-4 w-4 text-white drop-shadow-lg group-hover:opacity-100" />
        ) : (
          <Clipboard className="h-4 w-4 text-white drop-shadow-lg group-hover:opacity-100" />
        )}
      </div>
      <div className="mt-2 space-y-1">
        <p className="text-sm font-medium">{name}</p>
        <code className="text-muted-foreground bg-muted rounded px-1 py-0.5 text-xs">
          {cssVar}
        </code>
        {description && (
          <p className="text-muted-foreground text-xs">{description}</p>
        )}
      </div>
    </div>
  )
}
