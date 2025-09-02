import Link from "next/link"

import { Button } from "@/registry/default/ui/button"
import {
  Hero,
  HeroActions,
  HeroDescription,
  HeroHeading,
} from "@/registry/default/ui/hero"

export default function Home() {
  return (
    <>
      <Hero>
        <HeroHeading>Nathan&apos;s Template</HeroHeading>
        <HeroDescription>
          Starter app with the brodin/ui component library
        </HeroDescription>
        <HeroActions>
          <Button asChild>
            <Link href="/somewhere">Get Started</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="https://ui.brodin.dev/docs">Read the docs</Link>
          </Button>
        </HeroActions>
      </Hero>
      <section>Content of the page</section>
    </>
  )
}
