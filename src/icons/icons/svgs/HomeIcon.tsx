import * as React from 'react';

function SvgHomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 2.21l6.25 5.93v6.11H1.75V7.92L8 2.21zM8.01.5L.5 7.37v8.13h15V7.6L8.01.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgHomeIcon;
