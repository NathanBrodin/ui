"use client"

import { Badge } from "@/registry/default/ui/badge"
import { Button } from "@/registry/default/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

import { Color } from "./color"

export default function ThemeVisualizer() {
  const primaryColors = [
    {
      name: "Background",
      cssVar: "--background",
      description: "Default page background",
    },
    {
      name: "Foreground",
      cssVar: "--foreground",
      description: "Default text color",
    },
    { name: "Card", cssVar: "--card", description: "Card backgrounds" },
    {
      name: "Card Foreground",
      cssVar: "--card-foreground",
      description: "Text on cards",
    },
    {
      name: "Popover",
      cssVar: "--popover",
      description: "Popover backgrounds",
    },
    {
      name: "Popover Foreground",
      cssVar: "--popover-foreground",
      description: "Text in popovers",
    },
  ]

  const semanticColors = [
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
      name: "Secondary",
      cssVar: "--secondary",
      description: "Secondary elements",
    },
    {
      name: "Secondary Foreground",
      cssVar: "--secondary-foreground",
      description: "Text on secondary",
    },
    { name: "Muted", cssVar: "--muted", description: "Subtle backgrounds" },
    {
      name: "Muted Foreground",
      cssVar: "--muted-foreground",
      description: "Muted text",
    },
    { name: "Accent", cssVar: "--accent", description: "Accent elements" },
    {
      name: "Accent Foreground",
      cssVar: "--accent-foreground",
      description: "Text on accent",
    },
  ]

  const feedbackColors = [
    {
      name: "Destructive",
      cssVar: "--destructive",
      description: "Error states",
    },
  ]

  const borderColors = [
    { name: "Border", cssVar: "--border", description: "Default borders" },
    { name: "Input", cssVar: "--input", description: "Input borders" },
    { name: "Ring", cssVar: "--ring", description: "Focus rings" },
  ]

  const chartColors = [
    { name: "Chart 1", cssVar: "--chart-1", description: "First chart color" },
    { name: "Chart 2", cssVar: "--chart-2", description: "Second chart color" },
    { name: "Chart 3", cssVar: "--chart-3", description: "Third chart color" },
    { name: "Chart 4", cssVar: "--chart-4", description: "Fourth chart color" },
    { name: "Chart 5", cssVar: "--chart-5", description: "Fifth chart color" },
  ]

  return (
    <div className="mx-auto space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Primary Colors</CardTitle>
          <CardDescription>
            Base colors for backgrounds, surfaces, and text
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {primaryColors.map((color) => (
              <Color key={color.cssVar} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Semantic Colors</CardTitle>
          <CardDescription>
            Colors with specific semantic meaning for UI elements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {semanticColors.map((color) => (
              <Color key={color.cssVar} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Feedback Colors</CardTitle>
          <CardDescription>
            Colors for error states and user feedback
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {feedbackColors.map((color) => (
              <Color key={color.cssVar} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Border & Ring Colors</CardTitle>
          <CardDescription>
            Colors for borders, inputs, and focus indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {borderColors.map((color) => (
              <Color key={color.cssVar} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chart Colors</CardTitle>
          <CardDescription>
            Predefined colors for data visualization components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {chartColors.map((color) => (
              <Color key={color.cssVar} {...color} />
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Component Examples</CardTitle>
          <CardDescription>
            See how the theme colors work in actual components and color
            combinations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-medium">Buttons</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Badges</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">
              Background & Foreground Combinations
            </h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-background text-foreground rounded-lg border p-4">
                <p className="font-medium">Background + Foreground</p>
                <p className="text-sm opacity-80">Default page colors</p>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-4">
                <p className="font-medium">Primary + Primary Foreground</p>
                <p className="text-sm opacity-80">Brand colors</p>
              </div>
              <div className="bg-secondary text-secondary-foreground rounded-lg p-4">
                <p className="font-medium">Secondary + Secondary Foreground</p>
                <p className="text-sm opacity-80">Secondary elements</p>
              </div>
              <div className="bg-muted text-muted-foreground rounded-lg p-4">
                <p className="font-medium">Muted + Muted Foreground</p>
                <p className="text-sm opacity-80">Subtle backgrounds</p>
              </div>
              <div className="bg-accent text-accent-foreground rounded-lg p-4">
                <p className="font-medium">Accent + Accent Foreground</p>
                <p className="text-sm opacity-80">Accent elements</p>
              </div>
              <div className="bg-destructive rounded-lg p-4 text-white">
                <p className="font-medium">
                  Destructive + Destructive Foreground
                </p>
                <p className="text-sm opacity-80">Error states</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Card Variations</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Default Card</CardTitle>
                  <CardDescription>Uses card background colors</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Card content with muted text.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-accent text-accent-foreground">
                <CardHeader>
                  <CardTitle>Accent Card</CardTitle>
                  <CardDescription className="text-accent-foreground/70">
                    Accent background variant
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent-foreground/80">
                    Accent themed content.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle>Secondary Card</CardTitle>
                  <CardDescription className="text-secondary-foreground/70">
                    Secondary background variant
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-secondary-foreground/80">
                    Secondary themed content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium">Border & Ring Examples</h4>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div
                className="rounded-lg border-2 p-4"
                style={{ borderColor: "var(--border)" }}
              >
                <p className="font-medium">Border Color</p>
                <p className="text-muted-foreground text-sm">
                  Default border styling
                </p>
              </div>
              <div
                className="rounded-lg border-2 p-4"
                style={{ borderColor: "var(--input)" }}
              >
                <p className="font-medium">Input Border</p>
                <p className="text-muted-foreground text-sm">
                  Input field borders
                </p>
              </div>
              <div
                className="rounded-lg border-2 p-4 ring-2 ring-offset-2"
                style={
                  {
                    borderColor: "var(--border)",
                    "--tw-ring-color": "var(--ring)",
                  } as React.CSSProperties
                }
              >
                <p className="font-medium">Focus Ring</p>
                <p className="text-muted-foreground text-sm">
                  Focus state indicator
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
