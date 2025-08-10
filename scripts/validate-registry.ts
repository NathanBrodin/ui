#!/usr/bin/env tsx
import { promises as fs } from "fs"
import path from "path"
import type { Registry } from "shadcn/registry"

interface ValidationIssue {
  file: string
  type:
    | "missing"
    | "path-mismatch"
    | "missing-dependency"
    | "missing-registry-dependency"
  message: string
  expected?: string
  actual?: string
}

interface ComponentDependencies {
  externalDependencies: string[]
  registryDependencies: string[]
}

interface GroupedIssues {
  [key: string]: ValidationIssue[]
}

const projectRoot = path.resolve(process.cwd())

// Load and parse registry-ui.ts
async function loadRegistryItems(): Promise<Registry["items"]> {
  const registryPath = path.join(projectRoot, "registry", "registry-ui.ts")
  const content = await fs.readFile(registryPath, "utf-8")

  // Find the start of the array
  const startMatch = content.match(/export const ui: Registry\["items"\] = \[/)
  if (!startMatch) {
    throw new Error("Could not find registry export start")
  }

  const startIndex = startMatch.index! + startMatch[0].length - 1 // Include the opening [

  // Find the matching closing bracket
  let bracketCount = 0
  let endIndex = -1

  for (let i = startIndex; i < content.length; i++) {
    if (content[i] === "[") bracketCount++
    if (content[i] === "]") bracketCount--
    if (bracketCount === 0) {
      endIndex = i + 1
      break
    }
  }

  if (endIndex === -1) {
    throw new Error("Could not find registry export end")
  }

  try {
    const arrayContent = content.substring(startIndex, endIndex)

    // Clean up TypeScript syntax for JSON parsing
    const cleanedCode = arrayContent
      // Convert unquoted object keys to quoted strings
      .replace(/(\n\s*)(\w+):/g, '$1"$2":')
      // Handle array/object property keys
      .replace(/\{\s*(\w+):/g, '{"$1":')
      // Remove trailing commas
      .replace(/,(\s*[}\]])/g, "$1")
      // Handle template literals and other complex syntax by removing them for now
      .replace(/`[^`]*`/g, '""')
      // Remove comments
      .replace(/\/\/.*$/gm, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Fix malformed registryDependencies like "backgrounds, diamond, separator"
      .replace(/"registryDependencies":\s*"([^"]+)"/g, (match, deps) => {
        const depsArray = deps
          .split(",")
          .map((dep: string) => `"${dep.trim()}"`)
          .join(",")
        return `"registryDependencies": [${depsArray}]`
      })

    const items = eval(`(${cleanedCode})`) as Registry["items"]
    return items
  } catch (error) {
    console.error("Failed to parse registry items:", error)
    console.error("Error details:", (error as Error).message)
    // Return empty array to continue validation and show missing components
    return []
  }
}

// Get all .tsx files in the ui directory
async function getUIFiles(): Promise<string[]> {
  const uiDir = path.join(projectRoot, "registry", "default", "ui")
  const files = await fs.readdir(uiDir)
  return files
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => file.replace(".tsx", ""))
}

// Parse a UI component file to extract dependencies
async function parseComponentDependencies(
  filePath: string
): Promise<ComponentDependencies> {
  const content = await fs.readFile(filePath, "utf-8")
  const lines = content.split("\n")

  const externalDependencies: string[] = []
  const registryDependencies: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()

    // Skip comments and non-import lines
    if (!trimmed.startsWith("import") || trimmed.startsWith("//")) continue

    // Extract import statements
    const importMatch = trimmed.match(/import.*from\s+["']([^"']+)["']/)
    if (!importMatch) continue

    const importPath = importMatch[1]

    // Registry dependencies (importing from other registry components)
    if (importPath.startsWith("@/registry/default/ui/")) {
      const componentName = importPath.replace("@/registry/default/ui/", "")
      registryDependencies.push(componentName)
    }
    // Lib dependencies
    else if (importPath.startsWith("@/lib/")) {
      registryDependencies.push("lib/utils")
    }
    // External dependencies (npm packages)
    else if (
      !importPath.startsWith("@/") &&
      !importPath.startsWith("./") &&
      !importPath.startsWith("../")
    ) {
      // Handle scoped packages like @radix-ui/react-dialog
      externalDependencies.push(importPath)
    }
  }

  return {
    externalDependencies: [...new Set(externalDependencies)],
    registryDependencies: [...new Set(registryDependencies)],
  }
}

// Main validation function
async function validateRegistry(): Promise<ValidationIssue[]> {
  const issues: ValidationIssue[] = []

  console.log("🔍 Loading registry items...")
  const registryItems = await loadRegistryItems()

  console.log("📁 Scanning UI components...")
  const uiFiles = await getUIFiles()

  // Create lookup maps for efficiency
  const registryByName = new Map<string, Registry["items"][0]>()
  for (const item of registryItems) {
    registryByName.set(item.name, item)
  }

  console.log(
    `\n📊 Found ${uiFiles.length} UI files and ${registryItems.length} registry items\n`
  )

  // Check each UI file
  for (const fileName of uiFiles) {
    const registryItem = registryByName.get(fileName)

    // Check if component is registered
    if (!registryItem) {
      issues.push({
        file: fileName,
        type: "missing",
        message: `Component "${fileName}" exists in ui/ but is not declared in registry-ui.ts`,
      })
      continue
    }

    // Check file path
    const expectedPath = `ui/${fileName}.tsx`
    const uiFile = registryItem.files?.find(
      (f) => typeof f === "object" && f.type === "registry:ui"
    )

    if (
      !uiFile ||
      (typeof uiFile === "object" && uiFile.path !== expectedPath)
    ) {
      issues.push({
        file: fileName,
        type: "path-mismatch",
        message: `File path mismatch for "${fileName}"`,
        expected: expectedPath,
        actual: typeof uiFile === "object" ? uiFile.path : "undefined",
      })
    }

    // Parse actual dependencies from the file
    const filePath = path.join(
      projectRoot,
      "registry",
      "default",
      "ui",
      `${fileName}.tsx`
    )
    const actualDeps = await parseComponentDependencies(filePath)

    // Check external dependencies
    const declaredDeps = registryItem.dependencies || []
    for (const actualDep of actualDeps.externalDependencies) {
      // Skip React and some common imports that don't need to be declared
      if (actualDep === "react" || actualDep.startsWith("react/")) continue

      if (!declaredDeps.includes(actualDep)) {
        issues.push({
          file: fileName,
          type: "missing-dependency",
          message: `Missing external dependency: "${actualDep}" is imported but not declared in dependencies`,
        })
      }
    }

    // Check registry dependencies
    const declaredRegistryDeps = registryItem.registryDependencies || []
    for (const actualRegDep of actualDeps.registryDependencies) {
      // Skip lib/utils as it's common and might not always be declared
      if (actualRegDep === "lib/utils") continue

      if (!declaredRegistryDeps.includes(actualRegDep)) {
        issues.push({
          file: fileName,
          type: "missing-registry-dependency",
          message: `Missing registry dependency: "${actualRegDep}" is imported but not declared in registryDependencies`,
        })
      }
    }
  }

  // Check for registry items that don't have corresponding files
  for (const item of registryItems) {
    const uiFile = item.files?.find(
      (f) => typeof f === "object" && f.type === "registry:ui"
    )
    if (uiFile && typeof uiFile === "object") {
      const fileName = uiFile.path.replace("ui/", "").replace(".tsx", "")
      if (!uiFiles.includes(fileName)) {
        issues.push({
          file: item.name,
          type: "missing",
          message: `Registry item "${item.name}" declares file "${uiFile.path}" but file doesn't exist`,
        })
      }
    }
  }

  return issues
}

// Display summary and statistics
function displaySummary(groupedIssues: GroupedIssues): void {
  console.log("📊 SUMMARY:")
  console.log("=".repeat(50))

  const totalIssues = Object.values(groupedIssues).flat().length
  const componentCount = new Set(
    Object.values(groupedIssues)
      .flat()
      .map((i) => i.file)
  ).size

  console.log(`• Total issues found: ${totalIssues}`)
  console.log(`• Components affected: ${componentCount}`)

  // Most common issues
  const sortedTypes = Object.entries(groupedIssues).sort(
    ([, a], [, b]) => b.length - a.length
  )

  console.log(
    `• Most common issue: ${sortedTypes[0]?.[0]?.replace(/-/g, " ")} (${sortedTypes[0]?.[1]?.length} occurrences)`
  )

  // Quick fixes
  console.log("\n🔧 QUICK FIXES:")

  if (groupedIssues["missing-dependency"]) {
    const missingDeps = new Set(
      groupedIssues["missing-dependency"]
        .map((issue) => issue.message.match(/"([^"]+)" is imported/)?.[1])
        .filter(Boolean)
    )
    console.log(
      `• Common missing dependencies: ${[...missingDeps].slice(0, 5).join(", ")}`
    )
  }

  if (groupedIssues["missing"]) {
    const missingComponents = groupedIssues["missing"]
      .filter((issue) => !issue.message.includes("declares file"))
      .map((issue) => issue.file)
    if (missingComponents.length > 0) {
      console.log(`• Missing components: ${missingComponents.join(", ")}`)
    }
  }

  console.log(
    `\n💡 TIP: Run 'npm run registry:validate' regularly to keep your registry in sync!`
  )
  console.log()
}

// Format and display results
function displayResults(issues: ValidationIssue[]): void {
  if (issues.length === 0) {
    console.log("✅ All UI components are correctly declared in the registry!")
    return
  }

  console.log(`⚠️  Found ${issues.length} validation issues:\n`)

  // Group issues by type
  const grouped = issues.reduce<GroupedIssues>((acc, issue) => {
    if (!acc[issue.type]) acc[issue.type] = []
    acc[issue.type].push(issue)
    return acc
  }, {})

  // Display each group with suggestions
  for (const [type, typeIssues] of Object.entries(grouped)) {
    const emoji: Record<string, string> = {
      missing: "❌",
      "path-mismatch": "📁",
      "missing-dependency": "📦",
      "missing-registry-dependency": "🔗",
    }

    console.log(
      `${emoji[type] || "⚠️"} ${type.toUpperCase()} (${typeIssues.length} issues):`
    )

    for (const issue of typeIssues) {
      console.log(`  • ${issue.file}: ${issue.message}`)
      if (issue.expected && issue.actual) {
        console.log(`    Expected: ${issue.expected}`)
        console.log(`    Actual: ${issue.actual}`)
      }

      // Add suggestions based on issue type
      if (type === "missing" && !issue.message.includes("declares file")) {
        console.log(
          `    💡 Suggestion: Add "${issue.file}" component to registry-ui.ts`
        )
      } else if (type === "missing-dependency") {
        const dep = issue.message.match(/"([^"]+)" is imported/)?.[1]
        if (dep) {
          console.log(`    💡 Suggestion: Add "${dep}" to dependencies array`)
        }
      } else if (type === "missing-registry-dependency") {
        const dep = issue.message.match(/"([^"]+)" is imported/)?.[1]
        if (dep) {
          console.log(
            `    💡 Suggestion: Add "${dep}" to registryDependencies array`
          )
        }
      }
    }
    console.log()
  }

  // Display summary
  displaySummary(grouped)
}

// Main execution
async function main(): Promise<void> {
  console.log("🚀 Starting registry validation...\n")

  try {
    const issues = await validateRegistry()
    displayResults(issues)

    // Show success message or exit with error
    if (issues.length > 0) {
      console.log(
        `❌ Validation completed with ${issues.length} issues that need attention.`
      )
      process.exit(1)
    } else {
      console.log(
        "🎉 Registry validation passed! All components are properly configured."
      )
    }
  } catch (error) {
    console.error("❌ Validation failed:", error)
    console.error("\nThis might be due to:")
    console.error("• Syntax errors in registry-ui.ts")
    console.error("• Missing registry-ui.ts file")
    console.error("• Corrupted component files")
    process.exit(1)
  }
}

// Export for potential use as a module
export { validateRegistry, type ValidationIssue }

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
