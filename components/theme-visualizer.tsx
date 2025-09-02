"use client"

import { ThemeSelector } from "@/registry/default/components/theme-selector"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion"
import { Button } from "@/registry/default/ui/button"

import { Color } from "./color"

export default function ThemeVisualizer() {
  const foundationColors = [
    {
      name: "Main Background",
      cssVar: "--main-background",
      description: "Root page background",
    },
    {
      name: "Background",
      cssVar: "--background",
      description: "Primary background",
    },
    {
      name: "Foreground",
      cssVar: "--foreground",
      description: "Primary text color",
    },
  ]

  const brandColors = [
    {
      name: "Primary",
      cssVar: "--primary",
      description: "Primary brand color",
    },
    {
      name: "Primary Foreground",
      cssVar: "--primary-foreground",
      description: "Text on primary",
    },
    {
      name: "Primary Fixed",
      cssVar: "--primary-fixed",
      description: "Fixed primary color",
    },
    {
      name: "Primary Fixed Foreground",
      cssVar: "--primary-foreground-fixed",
      description: "Text on primary fixed",
    },
  ]

  const semanticColors = [
    {
      name: "Secondary",
      cssVar: "--secondary",
      description: "Secondary elements",
    },
    {
      name: "Secondary Foreground",
      cssVar: "--secondary-foreground",
      description: "Text on secondary",
    },
    { name: "Accent", cssVar: "--accent", description: "Accent elements" },
    {
      name: "Accent Foreground",
      cssVar: "--accent-foreground",
      description: "Text on accent",
    },
  ]

  return (
    <div className="bg-card relative mx-auto mt-4 rounded-lg border p-10 md:-mx-4">
      <ThemeSelector />
      <Accordion
        type="multiple"
        defaultValue={["foundation", "brand", "semantic", "interactive"]}
        className="w-full"
      >
        <AccordionItem value="foundation">
          <AccordionTrigger>
            <div>
              <h3>Foundation Colors</h3>
              <div className="text-muted-foreground text-sm">
                Base background and text colors
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {foundationColors.map((color) => (
                <Color key={color.cssVar} {...color} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="brand">
          <AccordionTrigger>
            <div>
              <h3>Brand Colors</h3>
              <div className="text-muted-foreground text-sm">
                Primary brand colors and variants
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {brandColors.map((color) => (
                <Color key={color.cssVar} {...color} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="semantic">
          <AccordionTrigger>
            <div>
              <h3>Semantic Colors</h3>
              <div className="text-muted-foreground text-sm">
                Colors with specific meaning and purpose
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {semanticColors.map((color) => (
                <Color key={color.cssVar} {...color} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="examples">
          <AccordionTrigger>
            <div>
              <h3>Button Component Examples</h3>
              <div className="text-muted-foreground text-sm">
                See how the theme colors work in actual components
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
