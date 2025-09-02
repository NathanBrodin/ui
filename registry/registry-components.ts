export const components = [
  {
    name: "active-theme-provider",
    type: "registry:component",
    files: [
      {
        path: "components/providers/active-theme-provider.tsx",
        type: "registry:component",
        target: "components/providers/active-theme-provider.tsx",
      },
    ],
  },
  {
    name: "theme-provider",
    type: "registry:component",
    files: [
      {
        path: "components/providers/theme-provider.tsx",
        type: "registry:component",
        target: "components/providers/theme-provider.tsx",
      },
    ],
  },
  {
    name: "theme-provider",
    type: "registry:component",
    files: [
      {
        path: "components/providers/theme-provider.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "layout-provider",
    type: "registry:component",
    files: [
      {
        path: "components/providers/layout-provider.tsx",
        type: "registry:component",
        target: "components/providers/layout-provider.tsx",
      },
    ],
  },
  {
    name: "page-header",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "@brodin-ui/config",
      "@brodin-ui/app-icon",
      "@brodin-ui/command-menu",
      "@brodin-ui/layout-selector",
      "@brodin-ui/theme-selector",
      "@brodin-ui/diamond",
      "@brodin-ui/button",
      "@brodin-ui/separator",
      "@brodin-ui/drawer",
    ],
    files: [
      {
        path: "components/page-header/index.tsx",
        type: "registry:component",
        target: "components/page-header/index.tsx",
      },
      {
        path: "components/page-header/header.tsx",
        type: "registry:component",
        target: "components/page-header/header.tsx",
      },
      {
        path: "components/page-header/main-nav.tsx",
        type: "registry:component",
        target: "components/page-header/main-nav.tsx",
      },
      {
        path: "components/page-header/mobile-nav.tsx",
        type: "registry:component",
        target: "components/page-header/mobile-nav.tsx",
      },
      {
        path: "components/page-header/toolbar.tsx",
        type: "registry:component",
        target: "components/page-header/toolbar.tsx",
      },
    ],
  },
  {
    name: "page-footer",
    type: "registry:component",
    registryDependencies: [
      "@brodin-ui/config",
      "@brodin-ui/diamond",
      "@brodin-ui/backgrounds",
    ],
    files: [
      {
        path: "components/page-footer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "app-icon",
    type: "registry:component",
    files: [
      {
        path: "components/app-icon.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "command-menu",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "@brodin-ui/use-is-mac",
      "@brodin-ui/use-mutation-observer",
      "@brodin-ui/button",
      "@brodin-ui/command",
      "@brodin-ui/kbd",
    ],
    files: [
      {
        path: "components/command-menu.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "layout-selector",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["@brodin-ui/layout-provider", "@brodin-ui/button"],
    files: [
      {
        path: "components/layout-selector.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "theme-selector",
    type: "registry:component",
    dependencies: ["next-themes"],
    registryDependencies: [
      "@brodin-ui/active-theme-provider",
      "@brodin-ui/use-meta-colors",
      "@brodin-ui/button",
      "@brodin-ui/dropdown-menu",
    ],
    files: [
      {
        path: "components/theme-selector.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-02",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-02.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-08",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-08.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-12",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-12.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-18",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-18.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-22",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-22.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-23",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-23.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-26",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-26.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-34",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-34.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-35",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-35.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-36",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-36.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-37",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-37.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-39",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-39.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-44",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-44.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-51",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-51.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-75",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-75.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-85",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-85.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-86",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-86.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-87",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-87.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-93",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-93.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-97",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-97.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-124",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-124.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-137",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-137.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-146",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-146.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-162",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-162.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-199",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-199.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-213",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-213.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-231",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-231.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-259",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-259.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-260",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-260.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "icon-261",
    type: "registry:component",
    files: [
      {
        path: "components/logos/icon-261.tsx",
        type: "registry:component",
      },
    ],
  },
]
