import Link from "next/link"

import { siteConfig } from "@/lib/config"
import AppIcon from "@/registry/default/components/app-icon"
import { CommandMenu } from "@/registry/default/components/command-menu"
import { LayoutSelector } from "@/registry/default/components/layout-selector"
import { ThemeSelector } from "@/registry/default/components/theme-selector"
import { Button } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"

import { GitHubLink } from "../github-link"
import { Header } from "./header"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { Toolbar } from "./toolbar"

export function PageHeader() {
  return (
    <Header>
      <Button asChild variant="ghost" size="icon" className="flex size-8">
        <Link href="/" className="[&_svg]:text-primary">
          <AppIcon className="size-5" />
        </Link>
      </Button>
      <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
      <Toolbar>
        <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
          <CommandMenu navItems={siteConfig.navItems} />
        </div>
        <Separator orientation="vertical" className="3xl:flex hidden" />
        <GitHubLink />
        <Separator orientation="vertical" className="3xl:flex hidden" />
        <LayoutSelector className="3xl:flex hidden" />
        <Separator orientation="vertical" />
        <ThemeSelector variant="small" />
      </Toolbar>
      <MobileNav
        items={siteConfig.navItems}
        className="flex justify-end lg:hidden"
      />
    </Header>
  )
}
