import React from "react";

const ButtonSearch = ({ children }) => {
  return (
    <button className="w-[120px] flex items-center text-xs font-medium flex-shrink-0 justify-center bg-secondary text-white rounded h-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      {children}
    </button>
  );
};

export default ButtonSearch;
