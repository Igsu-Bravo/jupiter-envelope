import React from 'react';

const Wave = (): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="540"
      viewBox="0 0 20 30"
      id="wave"
      fill="#0cb386"
      d=""
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="scale"
          dur="1s"
          values="1; 1.02; 1"
          restart="whenNotActive"
          repeatCount="1"
          additive="sum"
          fill="freeze"
          begin="1s;op.end+3s"
          // TODO: Figure out how to restart the animation
        ></animateTransform>
        <path d="M19.803 13.207l-.829 1.093-1.554-3.826a.47.47 0 00-.437-.306.47.47 0 00-.444.321l-1.356 3.664-1.872-8.759A.468.468 0 0012.849 5a.474.474 0 00-.473.424l-1.629 10.581-1.658-6.968a.47.47 0 00-.916-.033L6.72 13.757l-1.07-2.53a.463.463 0 00-.821-.09l-1.257 1.805-.087.058H.5a.5.5 0 000 1h3.284a.465.465 0 00.386-.206l.948-1.353 1.24 2.929a.464.464 0 00.433.299c.211 0 .39-.138.455-.35l1.324-4.332 1.814 7.629c.068.283.282.384.46.384a.474.474 0 00.473-.425L12.922 8.15l1.673 7.83a.478.478 0 00.467.395c.202 0 .366-.12.441-.321l1.5-4.049 1.426 3.51a.46.46 0 00.82.1l1.146-1.583.087-.046h3.026a.493.493 0 000-.986h-3.322a.466.466 0 00-.383.207z" />
      </g>
    </svg>
  );
};

export default Wave;
