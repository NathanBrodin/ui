import { registryItemSchema, type Registry } from "shadcn/registry"
import { z } from "zod"

import { blocks } from "@/registry/registry-blocks"
import { examples } from "@/registry/registry-examples"
import { hooks } from "@/registry/registry-hooks"
import { lib } from "@/registry/registry-lib"
import { themes } from "@/registry/registry-themes"
import { ui } from "@/registry/registry-ui"

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
      files: [],
    },
    ...ui,
    ...blocks,
    ...lib,
    ...hooks,
    ...themes,
    ...examples,
  ]),
} satisfies Registry
