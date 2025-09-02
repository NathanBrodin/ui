import { z } from "zod"

import { registryItemSchema, type Registry } from "@/lib/schema"
import { blocks } from "@/registry/registry-blocks"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { lib } from "@/registry/registry-lib"
import { ui } from "@/registry/registry-ui"

import { components } from "./registry-components"

export const registry = {
  name: "brodin/ui",
  homepage: "https://ui.brodin.dev",
  items: z.array(registryItemSchema).parse([
    {
      name: "design-system",
      type: "registry:style",
      dependencies: [
        "@ianvs/prettier-plugin-sort-imports",
        "prettier",
        "prettier-plugin-tailwindcss",
      ],
      files: [
        {
          path: "app/globals.css",
          type: "registry:file",
          target: "app/globals.css",
        },
        {
          path: "utils/prettier.config.cjs",
          type: "registry:file",
          target: "~/prettier.config.cjs",
        },
        {
          path: "assets/iAWriterMonoV.ttf",
          type: "registry:file",
          target: "public/fonts/iAWriterMonoV.ttf",
        },
        {
          path: "assets/iAWriterQuattroV.ttf",
          type: "registry:file",
          target: "public/fonts/iAWriterQuattroV.ttf",
        },
      ],
    },
    {
      name: "app",
      type: "registry:page",
      registryDependencies: [
        "@brodin-ui/design-system",
        "@brodin-ui/config",
        "@brodin-ui/active-theme-provider",
        "@brodin-ui/layout-provider",
        "@brodin-ui/theme-provider",
        "@brodin-ui/use-meta-colors",
        "@brodin-ui/sonner",
        "@brodin-ui/app-icon",
        "@brodin-ui/page-footer",
        "@brodin-ui/page-header",
        "@brodin-ui/backgrounds",
        "@brodin-ui/button",
        "@brodin-ui/hero",
      ],
      files: [
        {
          path: "app/layout.tsx",
          type: "registry:page",
          target: "app/layout.tsx",
        },
        {
          path: "app/icon.tsx",
          type: "registry:component",
          target: "app/icon.tsx",
        },
        {
          path: "app/(app)/layout.tsx",
          type: "registry:page",
          target: "app/(app)/layout.tsx",
        },
        {
          path: "app/(app)/page.tsx",
          type: "registry:page",
          target: "app/(app)/page.tsx",
        },
      ],
    },
    ...ui,
    ...components,
    ...blocks,
    ...lib,
    ...hooks,
    ...examples,
  ]),
} satisfies Registry
