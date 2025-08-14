import React from "react"

interface Icon87Props {
  className?: string
  size?: number
}

export const Icon87: React.FC<Icon87Props> = ({
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
        <g clipPath="url(#clip0_2868_190)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 22C100 9.84974 90.1503 0 78 0H22C9.84974 0 0 9.84972 0 22V78.7194C0 90.8697 9.84974 100.719 22 100.719H78C90.1503 100.719 100 110.569 100 122.719V178C100 190.15 109.85 200 122 200H178C190.15 200 200 190.15 200 178V121.28C200 109.13 190.15 99.2805 178 99.2805H122C109.85 99.2805 100 89.4308 100 77.2805V22Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2868_190">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Icon87
