import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { CommandMenu } from "@/components/command-menu"
import { GitHubLink } from "@/components/github-link"
import { SiteConfig } from "@/components/site-config"
import { ThemeSelector } from "@/components/theme-selector"
import { Icons } from "@/registry/default/components/icons"
import { Separator } from "@/registry/default/ui/separator"

import { AppIcon } from "./components/app-icon"
import { Header } from "./components/header"
import { MainNav } from "./components/main-nav"
import { MobileNav } from "./components/mobile-nav"
import { Toolbar } from "./components/toolbar"

export function PageHeader() {
  const pageTree = source.pageTree

  return (
    <Header>
      <AppIcon>
        <Icons.logo className="size-5" />
      </AppIcon>
      <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
      <Toolbar>
        <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
          <CommandMenu tree={pageTree} navItems={siteConfig.navItems} />
        </div>
        <Separator orientation="vertical" className="ml-2 hidden lg:block" />
        <GitHubLink />
        <Separator orientation="vertical" className="3xl:flex hidden" />
        <SiteConfig className="3xl:flex hidden" />
        <Separator orientation="vertical" />
        <ThemeSelector variant="small" />
      </Toolbar>
      <MobileNav
        tree={pageTree}
        items={siteConfig.navItems}
        className="flex justify-end lg:hidden"
      />
    </Header>
  )
}
