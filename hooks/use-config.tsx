import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

type Config = {
  style: "default"
  packageManager: "npm" | "yarn" | "pnpm" | "bun"
  installationType: "cli" | "manual"
}

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  packageManager: "bun",
  installationType: "cli",
})

export function useConfig() {
  const [config, setConfig] = useAtom(configAtom)

  const commandPrefix = (() => {
    switch (config.packageManager) {
      case "npm":
        return "npx"
      case "yarn":
        return "yarn"
      case "pnpm":
        return "pnpm dlx"
      case "bun":
        return "bunx"
      default:
        return "npx"
    }
  })()

  return [{ ...config, commandPrefix }, setConfig] as const
}
