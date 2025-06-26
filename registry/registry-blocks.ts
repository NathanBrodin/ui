import { type Registry } from "shadcn/registry"

export const blocks: Registry["items"] = [
  {
    name: "login-05",
    description: "A simple email-only login page.",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/login-05/page.tsx",
        target: "app/login/page.tsx",
        type: "registry:page",
      },
      {
        path: "blocks/login-05/components/login-form.tsx",
        type: "registry:component",
      },
    ],
    categories: ["authentication", "login"],
  },
  {
    name: "page-main",
    description: "Temporary",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/page-main/page.tsx",
        target: "app/page-main/page.tsx",
        type: "registry:page",
      },
    ],
    categories: ["page-layout"],
  },
]
