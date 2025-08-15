import React from "react"

interface Icon260Props {
  className?: string
  size?: number
}

export const Icon260: React.FC<Icon260Props> = ({
  className = "",
  size = 24,
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 201 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M186.422 185.604C167.227 204.799 136.105 204.799 116.909 185.604L100.819 169.513L84.7273 185.604C65.5319 204.799 34.4102 204.799 15.2149 185.604C-3.98047 166.409 -3.98047 135.287 15.2149 116.091L31.3061 100L15.2154 83.9094C-3.97996 64.714 -3.97996 33.5922 15.2154 14.3969C34.4107 -4.79847 65.5325 -4.79847 84.7278 14.3969L100.819 30.4876L116.909 14.3972C136.104 -4.79815 167.226 -4.79815 186.421 14.3972C205.617 33.5925 205.617 64.7143 186.421 83.9097L170.331 100L186.422 116.091C205.617 135.286 205.617 166.408 186.422 185.604Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default Icon260
