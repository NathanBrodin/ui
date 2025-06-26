import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { CardsDemo } from "@/components/cards"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/registry/default/ui/button"

const title = "Nathan's Component Library"
const description =
  "My own set of components — styled, structured, and fully compatible with shadcn/ui. Built to move fast and stay consistent across all my projects."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{title}</PageHeaderHeading>
        <PageHeaderDescription>{description}</PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <PageNav className="hidden md:flex">
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/default/dashboard-01-light.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/default/dashboard-01-dark.png"
              width={1400}
              height={875}
              alt="Dashboard"
              className="hidden dark:block"
              priority
            />
          </section>
          <section className="theme-container hidden md:block">
            <CardsDemo />
          </section>
        </div>
      </div>
    </div>
  )
}
