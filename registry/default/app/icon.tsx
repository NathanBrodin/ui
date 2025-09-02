import { ImageResponse } from "next/og"

import AppIcon from "@/registry/default/components/app-icon"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <AppIcon size={32} />,
    // ImageResponse options
    {
      ...size,
    }
  )
}
