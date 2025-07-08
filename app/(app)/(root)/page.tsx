import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Demo } from "@/registry/default/blocks/demo"
import { Button } from "@/registry/default/ui/button"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroHeading,
} from "@/registry/default/ui/hero"

const title = "Nathan's Component Library"
const description =
  "My own set of components. Built to move fast and stay consistent across all my projects. Fully compatible with shadcn/ui"

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
      <Hero>
        <HeroHeading>{title}</HeroHeading>
        <HeroDescription>{description}</HeroDescription>
        <HeroActions>
          <Button asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blocks">Browse Blocks</Link>
          </Button>
        </HeroActions>
      </Hero>
      <PageNav className="hidden md:flex">
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="border-border/50 -mx-4 w-[160vw] overflow-hidden rounded-lg border md:hidden md:w-[150vw]">
            <Image
              src="/r/styles/default/demo-light.png"
              width={1400}
              height={875}
              alt="Demo of this library's components"
              className="block dark:hidden"
              priority
            />
            <Image
              src="/r/styles/default/demo-dark.png"
              width={1400}
              height={875}
              alt="Demo of this library's components"
              className="hidden dark:block"
              priority
            />
          </section>
          <section className="theme-container hidden md:block">
            <Demo />
          </section>
        </div>
      </div>
    </div>
  )
}
