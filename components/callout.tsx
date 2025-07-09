import { cn } from "@/lib/utils"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/default/ui/alert"

export function Callout({
  title,
  children,
  icon,
  className,
  ...props
}: React.ComponentProps<typeof Alert> & { icon?: React.ReactNode }) {
  return (
    <Alert
      className={cn(
        "bg-card text-card-foreground mt-6 w-auto border-none md:-mx-4",
        className
      )}
      {...props}
    >
      {icon}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="text-card-foreground/80">
        {children}
      </AlertDescription>
    </Alert>
  )
}
