import { ReactNode } from "react"

export function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
      {children}
    </div>
  )
}
