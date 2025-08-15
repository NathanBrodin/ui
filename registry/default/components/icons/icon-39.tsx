import React from "react"

interface Icon39Props {
  className?: string
  size?: number
}

export const Icon39: React.FC<Icon39Props> = ({
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
      <g clipPath="url(#clip0_2868_94)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.2621 100C-36.9438 175.636 24.3644 236.944 100 173.738C175.621 236.944 236.944 175.578 173.738 100C236.944 24.3644 175.621 -36.9438 100 26.2621C24.3644 -36.9438 -36.9438 24.3644 26.2621 100ZM100 137C120.435 137 137 120.435 137 100C137 79.5655 120.435 63 100 63C79.5655 63 63 79.5655 63 100C63 120.435 79.5655 137 100 137Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_94">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon39
