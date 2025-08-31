import { ImageResponse } from "next/og"

import { Icon162 } from "@/registry/default/components/logos"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <Icon162 size={32} />,
    // ImageResponse options
    {
      ...size,
    }
  )
}
