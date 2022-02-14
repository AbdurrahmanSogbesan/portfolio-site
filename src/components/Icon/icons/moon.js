import React from "react";

function moon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 27"
      fill="none"
      cursor="pointer"
      {...props}
    >
      <circle
        cx="13.5"
        cy="13.5"
        r="12"
        fill="white"
        stroke="white"
        stroke-width="3"
      />
    </svg>
  );
}

export default moon;
