"use client"

import { useConfig } from "@/hooks/use-config"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

import {
  Icon02,
  Icon08,
  Icon12,
  Icon18,
  Icon22,
  Icon23,
  Icon26,
  Icon34,
  Icon35,
  Icon36,
  Icon37,
  Icon39,
  Icon44,
  Icon51,
  Icon75,
  Icon85,
  Icon86,
  Icon87,
  Icon93,
  Icon97,
  Icon124,
  Icon137,
  Icon146,
  Icon162,
  Icon199,
  Icon213,
  Icon231,
  Icon259,
  Icon260,
  Icon261,
} from "../components/logos"
import { siteConfig } from "../lib/config"

export function GridLogosDemo() {
  const icons = [
    { component: Icon02, name: "icon-02" },
    { component: Icon08, name: "icon-08" },
    { component: Icon12, name: "icon-12" },
    { component: Icon18, name: "icon-18" },
    { component: Icon22, name: "icon-22" },
    { component: Icon23, name: "icon-23" },
    { component: Icon26, name: "icon-26" },
    { component: Icon34, name: "icon-34" },
    { component: Icon35, name: "icon-35" },
    { component: Icon36, name: "icon-36" },
    { component: Icon37, name: "icon-37" },
    { component: Icon39, name: "icon-39" },
    { component: Icon44, name: "icon-44" },
    { component: Icon51, name: "icon-51" },
    { component: Icon75, name: "icon-75" },
    { component: Icon85, name: "icon-85" },
    { component: Icon86, name: "icon-86" },
    { component: Icon87, name: "icon-87" },
    { component: Icon93, name: "icon-93" },
    { component: Icon97, name: "icon-97" },
    { component: Icon124, name: "icon-124" },
    { component: Icon137, name: "icon-137" },
    { component: Icon146, name: "icon-146" },
    { component: Icon162, name: "icon-162" },
    { component: Icon199, name: "icon-199" },
    { component: Icon213, name: "icon-213" },
    { component: Icon231, name: "icon-231" },
    { component: Icon259, name: "icon-259" },
    { component: Icon260, name: "icon-260" },
    { component: Icon261, name: "icon-261" },
  ]

  const [config] = useConfig()
  const { copyToClipboard } = useCopyToClipboard()
  const commandPrefix = config.commandPrefix || "bunx"

  return (
    <div className="mx-auto mt-4 grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {icons.map(({ component: IconComponent, name }) => (
        <div
          key={name}
          className="group border-border bg-card hover:border-primary hover:shadow-alt relative cursor-pointer rounded-md border p-4 transition-all duration-300"
          onClick={() =>
            copyToClipboard(
              `${commandPrefix} shadcn@latest add ${siteConfig.url}/r/${name}.json`
            )
          }
        >
          <div className="mb-3 flex items-center justify-center">
            <IconComponent className="group-hover:text-primary text-foreground transition-colors duration-200" />
          </div>

          <div className="text-center">
            <span className="block font-mono text-xs">{name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
