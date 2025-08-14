import React from 'react';

interface Icon137Props {
  className?: string;
  size?: number;
}

export const Icon137: React.FC<Icon137Props> = ({
  className = "",
  size = 24
}) => {
  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M177.778 66.6667C184.815 35.1852 162.223 14.0741 130 22.963C112.223 -5.55553 81.8523 -5.55553 65.1857 22.2222C33.7042 15.5556 12.9635 37.7778 21.482 69.6296C-6.66617 87.0371 -6.66618 117.407 20.7412 134.074C13.7042 165.556 36.2968 186.667 68.519 177.778C86.2968 206.296 116.667 206.296 133.334 178.519C164.815 185.185 185.556 162.963 177.038 131.111C205.186 113.704 204.815 83.3334 177.778 66.6667Z" fill="black"/>
</svg>
    </div>
  );
};

export default Icon137;
