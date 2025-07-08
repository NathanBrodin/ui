import { ReactNode } from "react"

import { Diamond } from "@/registry/default/ui/diamond"

export function Header({ children }: { children: ReactNode }) {
  return (
    <header className="border-grid bg-nav-background sticky top-0 z-50 w-full border-b">
      <div className="container-wrapper 3xl:fixed:px-0 px-3 md:px-8 lg:px-12">
        <div className="3xl:fixed:container border-grid relative flex h-(--header-height) items-center gap-2 border-x px-2 **:data-[slot=separator]:!h-4 md:px-6">
          <Diamond left bottom />
          <Diamond right bottom />
          {children}
        </div>
      </div>
    </header>
  )
}
