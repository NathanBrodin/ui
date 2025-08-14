import React from 'react';

interface Icon75Props {
  className?: string;
  size?: number;
}

export const Icon75: React.FC<Icon75Props> = ({
  className = "",
  size = 24
}) => {
  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M200 150H143.75C143.75 125.838 124.162 106.25 100 106.25C75.8375 106.25 56.25 125.838 56.25 150H0C0 94.7715 44.7715 50 100 50C155.228 50 200 94.7715 200 150Z" fill="black"/>
</svg>
    </div>
  );
};

export default Icon75;
