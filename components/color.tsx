import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { cn } from "@/registry/default/lib/utils"

export function Color({
  cssVar,
  description,
}: {
  name: string
  cssVar: string
  description?: string
}) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 1000 })

  return (
    <div className="border-border flex items-center gap-1 rounded-sm border">
      <div
        className={cn(
          "border-border group relative h-full w-14 cursor-copy rounded-l-xs border-r transition-all",
          isCopied && "ring-1 ring-green-400 dark:ring-green-800"
        )}
        style={{
          backgroundColor: cssVar.startsWith("--") ? `var(${cssVar})` : cssVar,
        }}
        onClick={() => copyToClipboard(cssVar)}
      />
      <div className="space-y-1 p-1">
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
