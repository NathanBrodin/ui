import { type Registry } from "shadcn/registry"

export const hooks: Registry["items"] = [
  {
    name: "use-layout",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-layout.tsx",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-mobile",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
  {
    name: "use-meta-color",
    type: "registry:hook",
    dependencies: ["next-themes"],
    files: [
      {
        path: "hooks/use-meta-color.tsx",
        type: "registry:hook",
      },
    ],
  },
]
