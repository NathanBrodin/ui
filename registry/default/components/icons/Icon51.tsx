import React from "react"

interface Icon51Props {
  className?: string
  size?: number
}

export const Icon51: React.FC<Icon51Props> = ({
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
        <g clipPath="url(#clip0_2868_118)">
          <path
            d="M100 173.738C24.3644 236.944 -36.9438 175.636 26.2621 100C-36.9438 24.3644 24.3644 -36.9438 100 26.2621C175.621 -36.9438 236.944 24.3644 173.738 100C236.944 175.578 175.621 236.944 100 173.738Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2868_118">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Icon51
