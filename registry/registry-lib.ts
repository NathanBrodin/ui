import { type Registry } from "shadcn/registry"

export const lib: Registry["items"] = [
  {
    name: "utils",
    type: "registry:lib",
    dependencies: ["clsx", "tailwind-merge"],
    files: [
      {
        path: "lib/utils.ts",
        type: "registry:lib",
      },
    ],
  },
  {
    name: "config",
    type: "registry:lib",
    dependencies: [],
    files: [
      {
        path: "lib/config.ts",
        type: "registry:lib",
      },
    ],
  },
]
