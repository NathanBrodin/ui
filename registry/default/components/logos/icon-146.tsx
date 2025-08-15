import React from "react"

interface Icon146Props {
  className?: string
  size?: number
}

export const Icon146: React.FC<Icon146Props> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2868_308)">
        <path
          d="M137.5 0L200 0.000104904V62.5001L62.5 200H0V137.5L137.5 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_308">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon146
