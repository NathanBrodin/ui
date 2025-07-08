import Link from "next/link"

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

export default function HeroDemo() {
  return (
    <Hero className="-translate-x-[48px]">
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
  )
}
