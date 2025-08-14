"use client"

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
} from "../components/icons"

export function GridLogosDemo() {
  const icons = [
    { component: Icon02, name: "Icon02" },
    { component: Icon08, name: "Icon08" },
    { component: Icon12, name: "Icon12" },
    { component: Icon18, name: "Icon18" },
    { component: Icon22, name: "Icon22" },
    { component: Icon23, name: "Icon23" },
    { component: Icon26, name: "Icon26" },
    { component: Icon34, name: "Icon34" },
    { component: Icon35, name: "Icon35" },
    { component: Icon36, name: "Icon36" },
    { component: Icon37, name: "Icon37" },
    { component: Icon39, name: "Icon39" },
    { component: Icon44, name: "Icon44" },
    { component: Icon51, name: "Icon51" },
    { component: Icon75, name: "Icon75" },
    { component: Icon85, name: "Icon85" },
    { component: Icon86, name: "Icon86" },
    { component: Icon87, name: "Icon87" },
    { component: Icon93, name: "Icon93" },
    { component: Icon97, name: "Icon97" },
    { component: Icon124, name: "Icon124" },
    { component: Icon137, name: "Icon137" },
    { component: Icon146, name: "Icon146" },
    { component: Icon162, name: "Icon162" },
    { component: Icon199, name: "Icon199" },
    { component: Icon213, name: "Icon213" },
    { component: Icon231, name: "Icon231" },
    { component: Icon259, name: "Icon259" },
    { component: Icon260, name: "Icon260" },
    { component: Icon261, name: "Icon261" },
  ]

  return (
    <div className="mx-auto mt-4 grid w-full grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {icons.map(({ component: IconComponent, name }) => (
        <div
          key={name}
          className="group border-border bg-card hover:border-primary hover:shadow-alt relative cursor-pointer rounded-md border p-4 transition-all duration-300"
        >
          <div className="mb-3 flex items-center justify-center">
            <IconComponent className="group-hover:text-primary transition-colors duration-200" />
          </div>

          <div className="text-center">
            <span className="block font-mono text-xs">{name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
