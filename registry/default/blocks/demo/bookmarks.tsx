"use client"

import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/registry/default/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card"

type Category = {
  label: string
  value: string
  variant:
    | "purple"
    | "blue"
    | "cyan"
    | "orange"
    | "green"
    | "teal"
    | "fuchsia"
    | "yellow"
    | "gray"
}

const categories: Category[] = [
  {
    label: "Inspirations",
    value: "Inspirations",
    variant: "purple",
  },
  {
    label: "Registries",
    value: "registries",
    variant: "blue",
  },
  {
    label: "Portfolios",
    value: "portfolios",
    variant: "cyan",
  },
  {
    label: "Tools",
    value: "Tools",
    variant: "orange",
  },
  {
    label: "Articles",
    value: "Articles",
    variant: "green",
  },
  {
    label: "Services",
    value: "Services",
    variant: "teal",
  },
  {
    label: "Templates",
    value: "templates",
    variant: "fuchsia",
  },
  {
    label: "My Stuff",
    value: "my-stuff",
    variant: "yellow",
  },
  {
    label: "Others",
    value: "Others",
    variant: "gray",
  },
]

const bookmarks = [
  {
    id: 0,
    title: "Nathan's AI",
    url: "https://chat.brodin.dev",
    categories: ["my-stuff"],
    favicon: "https://chat.brodin.dev/logo.svg",
    author: "Nathan Brodin",
  },
  {
    id: 1,
    title: "Zed — The editor for what's next",
    url: "https://zed.dev/",
    categories: ["Inspirations"],
    favicon: "https://zed.dev/favicon_black_16.png",
    author: "@zeddotdev",
  },
  {
    id: 2,
    title: "The Foundation for your Design System - shadcn/ui",
    url: "https://ui.shadcn.com/",
    categories: ["registries"],
    favicon: "https://ui.shadcn.com/favicon.ico",
    author: "shadcn",
  },
  {
    id: 3,
    title: "Tailwind CSS 11-color Palette Generator and API",
    url: "https://www.tints.dev/",
    categories: ["Tools"],
    favicon: "https://fav.farm/\uD83C\uDFA8",
    author: "@simeonGriggs",
  },
  {
    id: 4,
    title: "My first Open Source PR",
    url: "https://github.com/zed-industries/zed/pull/33902#event-18569118982",
    categories: ["my-stuff"],
    favicon: "https://github.githubassets.com/favicons/favicon.svg",
    author: "Nathan Brodin",
  },
  {
    id: 5,
    title: "Essays | Kyle Gill",
    url: "https://www.kylegill.com/essays",
    categories: ["portfolios", "Articles"],
    favicon:
      "https://www.kylegill.com/favicon-32x32.png?v=e299a46c28af49e177733904ed877418",
    author: "",
  },
]

export function Bookmarks() {
  const getCategoryVariant = (categoryId: string) => {
    const category = categories.find((cat) => cat.value === categoryId)
    return category?.variant || "gray"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bookmarks</CardTitle>
        <CardDescription>Keep track of all your useful links.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full flex-col space-y-2">
          {bookmarks.map((bookmark) => (
            <Link
              key={bookmark.id}
              href={bookmark.url}
              target="_blank"
              className="group hover:border-secondary-foreground/30 hover:bg-grid/50 hover:shadow-alt relative flex min-h-[42px] w-full flex-row items-center justify-between gap-2 rounded border border-transparent p-2"
            >
              <svg className="text-primary/20 pointer-events-none invisible absolute inset-0 [z-index:-1] size-full [mask-image:linear-gradient(to_left,var(--color-primary),_transparent)] opacity-50 select-none group-hover:visible">
                <defs>
                  <pattern
                    id={`pattern-${bookmark.id}`}
                    width="4"
                    height="4"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(45)"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    ></line>
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  fill={`url(#${`pattern-${bookmark.id}`})`}
                ></rect>
              </svg>
              <div className="flex shrink-0 flex-row items-center gap-2">
                <h2 className="decoration-primary-fixed/20 hover:decoration-primary-fixed/80 group-hover:decoration-primary-fixed/80 text-foreground text-[0.9375rem] underline">
                  {bookmark.title}
                </h2>
                <div className="flex -space-x-1.5 hover:space-x-2">
                  {bookmark.favicon && (
                    <Image
                      src={bookmark.favicon}
                      alt=""
                      width={16}
                      height={16}
                      className="size-4 rounded-sm"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                      unoptimized
                    />
                  )}
                </div>
              </div>
              <hr className="border-border/50 flex w-full opacity-60 group-hover:invisible dark:opacity-90" />
              <div className="flex w-fit shrink-0 items-center gap-1">
                {bookmark.categories && bookmark.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {bookmark.categories.map((category, index) => (
                      <Badge
                        key={index}
                        variant={getCategoryVariant(category)}
                        className="h-[18px] text-[0.625rem] leading-6"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}
                {bookmark.author && <span className="opacity-15">|</span>}
                <p className="text-muted-foreground ml-auto font-mono text-xs">
                  {bookmark.author}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
