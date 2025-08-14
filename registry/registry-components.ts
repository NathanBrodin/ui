import { type Registry } from "shadcn/registry"

export const components: Registry["items"] = [
  {
    name: "active-theme",
    type: "registry:component",
    files: [
      {
        path: "components/active-theme.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "theme-provider",
    type: "registry:component",
    files: [
      {
        path: "components/theme-provider.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-02",
    type: "registry:component",
    files: [
      {
        path: "components/icons/Icon02.tsx",
        type: "registry:component",
      },
    ],
  },
]
