import { registryItemSchema, type Registry } from "shadcn/registry"
import { z } from "zod"

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
      name: "index",
      type: "registry:style",
      dependencies: ["class-variance-authority", "lucide-react"],
      devDependencies: ["tw-animate-css"],
      registryDependencies: ["utils"],
      cssVars: {},
      files: [
        {
          path: "styles/globals.css",
          type: "registry:style",
          target: "app/globals.css",
        },
        {
          path: "assets/fonts/writer.ttf",
          target: "public/fonts/writer.ttf",
          type: "registry:file",
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
