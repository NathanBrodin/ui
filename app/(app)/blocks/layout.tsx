import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import { BlocksNav } from "@/components/blocks-nav"
import { PageNav } from "@/components/page-nav"
import { Button } from "@/registry/default/ui/button"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroHeading,
} from "@/registry/default/ui/hero"

const title = "UI Blocks That Just Work"
const description =
  "Composed from my component library, these blocks include common layouts and patterns — ready to copy, tweak, and reuse across your apps. Built on top of shadcn/ui."

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

export default function BlocksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Hero>
        <Announcement />
        <HeroHeading>{title}</HeroHeading>
        <HeroDescription>{description}</HeroDescription>
        <HeroActions>
          <Button asChild>
            <a href="#blocks">Browse Blocks</a>
          </Button>
        </HeroActions>
      </Hero>
      <PageNav id="blocks">
        <BlocksNav />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 md:py-12">
        <div className="container">{children}</div>
      </div>
    </>
  )
}
