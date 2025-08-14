import React from "react"

interface Icon44Props {
  className?: string
  size?: number
}

export const Icon44: React.FC<Icon44Props> = ({
  className = "",
  size = 24,
}) => {
  return (
    <div className={className}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2868_104)">
          <path
            d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2868_104">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Icon44
