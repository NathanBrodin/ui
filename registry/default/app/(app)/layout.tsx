import { PageFooter } from "@/registry/default/components/page-footer"
import { PageHeader } from "@/registry/default/components/page-header"
import { Noise } from "@/registry/default/ui/backgrounds"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <PageHeader />
      <div className="container-wrapper 3xl:fixed:px-0 flex w-full flex-1 px-3 md:px-8 lg:px-12">
        <main className="3xl:fixed:container border-grid relative mx-auto w-full border-x px-0!">
          {children}
        </main>
      </div>
      <Noise />
      <div className="absolute top-0 left-0 z-[-1] h-full w-3 md:w-8 lg:w-12" />
      <div className="absolute top-0 right-0 z-[-1] h-full w-3 md:w-8 lg:w-12" />
      <PageFooter />
    </div>
  )
}
