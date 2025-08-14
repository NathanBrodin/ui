import React from "react"

interface Icon86Props {
  className?: string
  size?: number
}

export const Icon86: React.FC<Icon86Props> = ({
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
        <g clipPath="url(#clip0_2868_188)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.4046 100.422C8.31777 102.425 0.714259 111.325 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200H78.7143C89.6402 200 98.7058 192.035 100.422 181.595C102.425 191.682 111.325 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 110.36 192.035 101.294 181.596 99.578C191.682 97.5746 199.286 88.6752 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C110.36 -4.77585e-07 101.294 7.96461 99.5781 18.4046C97.5747 8.31778 88.6753 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 89.6401 7.96462 98.7058 18.4046 100.422Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_2868_188">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default Icon86
