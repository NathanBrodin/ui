import { ImageResponse } from "next/og"

import { Icons } from "@/components/icons"

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <Icons.logo size={32} />,
    // ImageResponse options
    {
      ...size,
    }
  )
}
