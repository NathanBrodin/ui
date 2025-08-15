import React from "react"

interface Icon35Props {
  className?: string
  size?: number
}

export const Icon35: React.FC<Icon35Props> = ({
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
      <g clipPath="url(#clip0_2868_86)">
        <path
          d="M99.55 18.9087C99.55 -35.1254 133.314 41.4697 119.832 64.8658C133.338 41.4697 216.566 32.4143 169.762 59.4373C216.566 32.4143 167.114 100.002 140.102 100.002C167.114 100.002 216.566 167.553 169.762 140.566C216.566 167.589 133.338 158.534 119.832 135.138C133.338 158.534 99.55 235.129 99.55 181.095C99.55 235.129 65.7742 158.534 79.2678 135.138C65.7622 158.534 -17.4663 167.589 29.3378 140.566C-17.4663 167.589 31.9864 100.002 59.0094 100.002C31.9864 100.002 -17.4663 32.4501 29.3378 59.4373C-17.4663 32.4143 65.7622 41.4697 79.2678 64.8658C65.7742 41.4458 99.55 -35.1254 99.55 18.9087Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2868_86">
          <rect width="200" height="200" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Icon35
