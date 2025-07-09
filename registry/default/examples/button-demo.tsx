import {
  DownloadIcon,
  EyeIcon,
  LinkIcon,
  PlayIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"

export default function ButtonDemo() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      <Button>
        <PlayIcon />
        Get Started
      </Button>
      <Button variant="destructive">
        <TrashIcon />
        Delete
      </Button>
      <Button variant="outline">
        <DownloadIcon />
        Download
      </Button>
      <Button variant="secondary">
        <SettingsIcon />
        Settings
      </Button>
      <Button variant="ghost">
        <EyeIcon />
        Preview
      </Button>
      <Button variant="link">
        <LinkIcon />
        Learn More
      </Button>
    </div>
  )
}
