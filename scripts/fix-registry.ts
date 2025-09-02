#!/usr/bin/env tsx
import { promises as fs } from "fs"
import path from "path"
import * as readline from "readline"

import { type Registry } from "@/lib/schema"

interface Fix {
  type: "add-component" | "add-dependency" | "add-registry-dependency"
  component: string
  dependency?: string
  dependencies?: ComponentDependencies
}

interface ComponentDependencies {
  externalDependencies: string[]
  registryDependencies: string[]
}

interface FixOptions {
  dryRun?: boolean
  autoConfirm?: boolean
}

// Common dependencies that are often missing but can be auto-added
const COMMON_DEPS: Record<string, string> = {
  "lucide-react": "lucide-react",
  "class-variance-authority": "class-variance-authority",
  "react-day-picker": "react-day-picker",
  "@radix-ui/react-slot": "@radix-ui/react-slot",
}

const projectRoot = path.resolve(process.cwd())

// Load registry content as string for manipulation
async function loadRegistryContent(): Promise<string> {
  const registryPath = path.join(projectRoot, "registry", "registry-ui.ts")
  return await fs.readFile(registryPath, "utf-8")
}

// Parse component dependencies from file
async function parseComponentDependencies(
  filePath: string
): Promise<ComponentDependencies> {
  const content = await fs.readFile(filePath, "utf-8")
  const lines = content.split("\n")

  const externalDependencies: string[] = []
  const registryDependencies: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed.startsWith("import") || trimmed.startsWith("//")) continue

    const importMatch = trimmed.match(/import.*from\s+["']([^"']+)["']/)
    if (!importMatch) continue

    const importPath = importMatch[1]

    if (importPath.startsWith("@/registry/default/ui/")) {
      const componentName = importPath.replace("@/registry/default/ui/", "")
      registryDependencies.push(componentName)
    } else if (importPath.startsWith("@/lib/")) {
      registryDependencies.push("lib/utils")
    } else if (
      !importPath.startsWith("@/") &&
      !importPath.startsWith("./") &&
      !importPath.startsWith("../") &&
      importPath !== "react" &&
      !importPath.startsWith("react/")
    ) {
      externalDependencies.push(importPath)
    }
  }

  return {
    externalDependencies: [...new Set(externalDependencies)],
    registryDependencies: [...new Set(registryDependencies)],
  }
}

// Get all UI files
async function getUIFiles(): Promise<string[]> {
  const uiDir = path.join(projectRoot, "registry", "default", "ui")
  const files = await fs.readdir(uiDir)
  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(".tsx", ""))
}

// Generate a basic registry entry for a component
function generateRegistryEntry(
  componentName: string,
  dependencies: ComponentDependencies
): Registry["items"][0] {
  const { externalDependencies, registryDependencies } = dependencies

  const entry: Registry["items"][0] = {
    name: componentName,
    type: "registry:ui",
    files: [
      {
        path: `ui/${componentName}.tsx`,
        type: "registry:ui",
      },
    ],
  }

  if (externalDependencies.length > 0) {
    entry.dependencies = externalDependencies.map(
      (dep) => COMMON_DEPS[dep] || dep
    )
  }

  if (registryDependencies.filter((dep) => dep !== "lib/utils").length > 0) {
    entry.registryDependencies = registryDependencies.filter(
      (dep) => dep !== "lib/utils"
    )
  }

  return entry
}

// Add missing dependencies to existing registry entry
function addMissingDependencies(
  registryContent: string,
  componentName: string,
  missingDeps: string[]
): string {
  // Find the component entry in the content
  const componentRegex = new RegExp(
    `(\\{[^}]*name:\\s*"${componentName}"[^}]*)(dependencies:\\s*\\[[^\\]]*\\])([^}]*\\})`,
    "s"
  )

  const match = registryContent.match(componentRegex)
  if (match) {
    const [fullMatch, before, depsArray, after] = match
    const currentDeps =
      depsArray.match(/"([^"]+)"/g)?.map((d) => d.replace(/"/g, "")) || []

    const newDeps = [...new Set([...currentDeps, ...missingDeps])]
      .map((dep) => `"${COMMON_DEPS[dep] || dep}"`)
      .join(", ")

    const newDepsArray = `dependencies: [${newDeps}]`
    const replacement = `${before}${newDepsArray}${after}`

    return registryContent.replace(fullMatch, replacement)
  }

  // If no existing dependencies array, add one
  const noDepsRegex = new RegExp(
    `(\\{[^}]*name:\\s*"${componentName}"[^}]*type:\\s*"[^"]+",?)([^}]*\\})`,
    "s"
  )

  const noDepsMatch = registryContent.match(noDepsRegex)
  if (noDepsMatch) {
    const [fullMatch, before, after] = noDepsMatch
    const depsString = missingDeps
      .map((dep) => `"${COMMON_DEPS[dep] || dep}"`)
      .join(", ")
    const replacement = `${before}
    dependencies: [${depsString}],${after}`

    return registryContent.replace(fullMatch, replacement)
  }

  return registryContent
}

// Add missing registry dependencies
function addMissingRegistryDependencies(
  registryContent: string,
  componentName: string,
  missingDeps: string[]
): string {
  // Similar logic to addMissingDependencies but for registryDependencies
  const componentRegex = new RegExp(
    `(\\{[^}]*name:\\s*"${componentName}"[^}]*)(registryDependencies:\\s*\\[[^\\]]*\\])([^}]*\\})`,
    "s"
  )

  const match = registryContent.match(componentRegex)
  if (match) {
    const [fullMatch, before, depsArray, after] = match
    const currentDeps =
      depsArray.match(/"([^"]+)"/g)?.map((d) => d.replace(/"/g, "")) || []

    const newDeps = [...new Set([...currentDeps, ...missingDeps])]
      .map((dep) => `"${dep}"`)
      .join(", ")

    const newDepsArray = `registryDependencies: [${newDeps}]`
    const replacement = `${before}${newDepsArray}${after}`

    return registryContent.replace(fullMatch, replacement)
  }

  // Add new registryDependencies array
  const noDepsRegex = new RegExp(
    `(\\{[^}]*name:\\s*"${componentName}"[^}]*(?:dependencies:\\s*\\[[^\\]]*\\],?[^}]*)?)(files:)`,
    "s"
  )

  const noDepsMatch = registryContent.match(noDepsRegex)
  if (noDepsMatch) {
    const [fullMatch, before, filesStart] = noDepsMatch
    const depsString = missingDeps.map((dep) => `"${dep}"`).join(", ")
    const replacement = `${before}registryDependencies: [${depsString}],
    ${filesStart}`

    return registryContent.replace(fullMatch, replacement)
  }

  return registryContent
}

// Add missing component to registry
function addMissingComponent(
  registryContent: string,
  componentName: string,
  dependencies: ComponentDependencies
): string {
  const entry = generateRegistryEntry(componentName, dependencies)
  const entryString = JSON.stringify(entry, null, 2)
    .replace(/"([^"]+)":/g, "$1:") // Remove quotes from keys
    .replace(/^/gm, "  ") // Add indentation

  // Find the end of the array and insert before the closing bracket
  const insertPosition = registryContent.lastIndexOf("]")
  if (insertPosition === -1) {
    throw new Error("Could not find array end in registry file")
  }

  const before = registryContent.substring(0, insertPosition)
  const after = registryContent.substring(insertPosition)

  // Add comma if there are existing items
  const needsComma = before.trim().endsWith("}")
  const comma = needsComma ? "," : ""

  return `${before}${comma}
${entryString}${after}`
}

// Prompt user for confirmation
function askForConfirmation(): Promise<boolean> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    rl.question("\nProceed with fixes? (y/N): ", (answer: string) => {
      rl.close()
      resolve(answer.toLowerCase() === "y")
    })
  })
}

// Main fix function
async function fixRegistry(options: FixOptions = {}): Promise<void> {
  const { dryRun = false, autoConfirm = false } = options

  console.log("🔧 Starting registry auto-fix...\n")

  let registryContent = await loadRegistryContent()
  const uiFiles = await getUIFiles()

  // Parse existing registry to find what's already declared
  const existingComponents = new Set<string>()
  const componentMatches = registryContent.matchAll(/name:\s*"([^"]+)"/g)
  for (const match of componentMatches) {
    existingComponents.add(match[1])
  }

  let fixesApplied = 0
  const fixes: Fix[] = []

  // Fix 1: Add missing components
  console.log("🔍 Checking for missing components...")
  for (const fileName of uiFiles) {
    if (!existingComponents.has(fileName)) {
      const filePath = path.join(
        projectRoot,
        "registry",
        "default",
        "ui",
        `${fileName}.tsx`
      )
      const dependencies = await parseComponentDependencies(filePath)

      fixes.push({
        type: "add-component",
        component: fileName,
        dependencies,
      })

      console.log(`  ➕ Will add missing component: ${fileName}`)
    }
  }

  // Fix 2: Add missing dependencies to existing components
  console.log("\n🔍 Checking for missing dependencies...")
  for (const fileName of uiFiles) {
    if (existingComponents.has(fileName)) {
      const filePath = path.join(
        projectRoot,
        "registry",
        "default",
        "ui",
        `${fileName}.tsx`
      )
      const actualDeps = await parseComponentDependencies(filePath)

      // Check for missing external dependencies
      for (const dep of actualDeps.externalDependencies) {
        if (COMMON_DEPS[dep] && !registryContent.includes(`"${dep}"`)) {
          fixes.push({
            type: "add-dependency",
            component: fileName,
            dependency: dep,
          })
          console.log(
            `  📦 Will add missing dependency "${dep}" to ${fileName}`
          )
        }
      }

      // Check for missing registry dependencies
      for (const dep of actualDeps.registryDependencies) {
        if (dep !== "lib/utils" && !registryContent.includes(`"${dep}"`)) {
          fixes.push({
            type: "add-registry-dependency",
            component: fileName,
            dependency: dep,
          })
          console.log(
            `  🔗 Will add missing registry dependency "${dep}" to ${fileName}`
          )
        }
      }
    }
  }

  if (fixes.length === 0) {
    console.log("✅ No fixable issues found!")
    return
  }

  console.log(`\n📊 Found ${fixes.length} issues that can be auto-fixed.`)

  // Confirm fixes
  let shouldProceed = autoConfirm
  if (!autoConfirm && !dryRun) {
    shouldProceed = await askForConfirmation()
    if (!shouldProceed) {
      console.log("❌ Fixes cancelled.")
      return
    }
  }

  if (dryRun) {
    console.log("\n🔍 DRY RUN - No changes will be made")
    return
  }

  if (shouldProceed) {
    console.log("\n🚀 Applying fixes...")

    for (const fix of fixes) {
      try {
        switch (fix.type) {
          case "add-component":
            if (fix.dependencies) {
              registryContent = addMissingComponent(
                registryContent,
                fix.component,
                fix.dependencies
              )
              console.log(`  ✅ Added component: ${fix.component}`)
              fixesApplied++
            }
            break

          case "add-dependency":
            if (fix.dependency) {
              registryContent = addMissingDependencies(
                registryContent,
                fix.component,
                [fix.dependency]
              )
              console.log(
                `  ✅ Added dependency "${fix.dependency}" to ${fix.component}`
              )
              fixesApplied++
            }
            break

          case "add-registry-dependency":
            if (fix.dependency) {
              registryContent = addMissingRegistryDependencies(
                registryContent,
                fix.component,
                [fix.dependency]
              )
              console.log(
                `  ✅ Added registry dependency "${fix.dependency}" to ${fix.component}`
              )
              fixesApplied++
            }
            break
        }
      } catch (error) {
        console.error(
          `  ❌ Failed to apply fix for ${fix.component}: ${(error as Error).message}`
        )
      }
    }

    if (fixesApplied > 0) {
      const registryPath = path.join(projectRoot, "registry", "registry-ui.ts")
      await fs.writeFile(registryPath, registryContent)
      console.log(`\n🎉 Applied ${fixesApplied} fixes to registry-ui.ts`)
      console.log("💡 Run 'npm run registry:validate' to verify the fixes.")
    }
  }
}

// CLI interface
async function main(): Promise<void> {
  const args = process.argv.slice(2)
  const options: FixOptions = {
    dryRun: args.includes("--dry-run") || args.includes("-d"),
    autoConfirm: args.includes("--yes") || args.includes("-y"),
  }

  if (args.includes("--help") || args.includes("-h")) {
    console.log(`
🔧 Registry Auto-Fix Tool

Usage: tsx scripts/fix-registry.ts [options]

Options:
  --dry-run, -d    Show what would be fixed without making changes
  --yes, -y        Auto-confirm all fixes without prompting
  --help, -h       Show this help message

Examples:
  tsx scripts/fix-registry.ts                # Interactive mode
  tsx scripts/fix-registry.ts --dry-run      # Preview fixes
  tsx scripts/fix-registry.ts --yes          # Auto-fix everything

Note: Changes are made directly to registry-ui.ts - use version control for safety.
`)
    return
  }

  try {
    await fixRegistry(options)
  } catch (error) {
    console.error("❌ Fix failed:", error)
    process.exit(1)
  }
}

// Export for potential use as a module
export { fixRegistry, type Fix, type FixOptions }

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
