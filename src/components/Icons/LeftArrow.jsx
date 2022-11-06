import React from 'react';

const LeftArrow = () => {
  return (
    <>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#406BBF"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16l-4-4m0 0l4-4m-4 4h18"
        />
      </svg>
    </>
  );
};

export default LeftArrow;
