import React from "react"

interface Icon26Props {
  className?: string
  size?: number
}

export const Icon26: React.FC<Icon26Props> = ({
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
      <g clipPath="url(#clip0_2868_68)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_68">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon26
