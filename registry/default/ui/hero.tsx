import { cn } from "@/lib/utils"
import { Tiles } from "@/registry/default/ui/backgrounds"
import { SectionDivider } from "@/registry/default/ui/separator"

function Hero({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <>
      <section className={cn("border-grid", className)} {...props}>
        <div className="container-wrapper from-primary/2 relative bg-linear-to-t">
          <div className="container flex flex-col items-center gap-2 py-8 text-center md:py-16 lg:py-30 xl:gap-4">
            {children}
          </div>
          <Tiles />
        </div>
      </section>
      <SectionDivider />
    </>
  )
}

function HeroHeading({ className, ...props }: React.ComponentProps<"h1">) {
  return <h1 className={cn("max-w-2xl text-center", className)} {...props} />
}

function HeroDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-foreground max-w-xl text-base tracking-tight text-pretty",
        className
      )}
      {...props}
    />
  )
}

function HeroActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 pt-2",
        className
      )}
      {...props}
    />
  )
}

export { HeroActions, Hero, HeroDescription, HeroHeading }
