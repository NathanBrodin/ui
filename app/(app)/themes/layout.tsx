import { Metadata } from "next"

import { Announcement } from "@/components/announcement"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/registry/default/ui/button"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroHeading,
} from "@/registry/default/ui/hero"

const title = "Design Tokens"
const description =
  "A set of CSS variables that power the look and feel of the entire library — from primary colors to surfaces and text. Built for consistency and easy theming."

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
            <a href="#themes">Browse Themes</a>
          </Button>
        </HeroActions>
      </Hero>
      <PageNav id="themes">
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="theme-container container">{children}</div>
      </div>
    </>
  )
}
