import React from "react"

interface Icon34Props {
  className?: string
  size?: number
}

export const Icon34: React.FC<Icon34Props> = ({
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
      <g clipPath="url(#clip0_2868_84)">
        <path
          d="M99.6399 68.4822C99.6399 -65.4272 141.001 28.3605 107.521 86.3526C141.001 28.3605 242.909 17.2838 126.935 84.2438C242.909 17.2838 182.373 99.9947 115.402 99.9947C182.351 99.9947 242.909 182.706 126.935 115.756C242.909 182.706 141.001 171.629 107.521 113.637C141.001 171.629 99.6399 265.427 99.6399 131.507C99.6399 265.427 58.3333 171.629 91.759 113.637C58.2898 171.629 -43.6179 182.706 72.3558 115.756C-43.6179 182.706 16.918 99.9947 83.889 99.9947C16.9288 99.9947 -43.6179 17.2838 72.3558 84.2438C-43.6179 17.2838 58.2898 28.3605 91.759 86.3526C58.2898 28.3605 99.6399 -65.4272 99.6399 68.4822Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_84">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon34
