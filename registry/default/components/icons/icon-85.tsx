import React from "react"

interface Icon85Props {
  className?: string
  size?: number
}

export const Icon85: React.FC<Icon85Props> = ({
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
      <g clipPath="url(#clip0_2868_186)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100 22.7143C100 10.564 90.1503 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 90.8645 9.84974 100.714 22 100.714H78C90.1503 100.714 100 110.564 100 122.714V177.286C100 189.436 109.85 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 109.135 190.15 99.2856 178 99.2856H122C109.85 99.2856 100 89.4359 100 77.2856V22.7143ZM177.286 100C189.436 100 199.286 90.1503 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C109.135 -5.31105e-07 99.2857 9.84974 99.2857 22V78C99.2857 90.1503 89.436 100 77.2857 100H22.7143C10.564 100 0.714259 109.85 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200H78.7143C90.8645 200 100.714 190.15 100.714 178V122C100.714 109.85 110.564 100 122.714 100H177.286Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_186">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon85
