import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/registry/default/blocks/page-header/page-header"
import { Noise } from "@/registry/default/ui/backgrounds"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <PageHeader />
      <main className="border-grid 3xl:fixed:container mx-3 flex flex-1 flex-col border-x md:mx-8 lg:mx-12">
        {children}
      </main>
      <Noise />
      <div className="bg-nav-background/12 absolute top-0 left-0 z-[-1] h-full w-3 md:w-8 lg:w-12 dark:bg-[hsl(218,_13%,_5%,_0.2)]" />
      <div className="bg-nav-background/12 absolute top-0 right-0 z-[-1] h-full w-3 md:w-8 lg:w-12 dark:bg-[hsl(218,_13%,_5%,_0.2)]" />
      <SiteFooter />
    </div>
  )
}
