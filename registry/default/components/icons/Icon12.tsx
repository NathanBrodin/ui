import React from 'react';

interface Icon12Props {
  className?: string;
  size?: number;
}

export const Icon12: React.FC<Icon12Props> = ({
  className = "",
  size = 24
}) => {
  return (
    <div className={className}>
      <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M200 50V4.37114e-06L100 0V49.9803C99.9893 22.3751 77.6077 4.37114e-06 50 4.37114e-06H2.18557e-06V100H50C22.3858 100 -1.20706e-06 122.386 0 150L2.18557e-06 200H100V150C100 177.614 122.386 200 150 200H200V100H150.02C177.625 99.9893 200 77.6077 200 50Z" fill="black"/>
</svg>
    </div>
  );
};

export default Icon12;
