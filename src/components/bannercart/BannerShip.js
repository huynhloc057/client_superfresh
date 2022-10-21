import React, { useState } from "react";
import NoteFreeShip from "./NoteFreeShip";

const BannerShip = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className="style-banner text-[13px] leading-5 py-2 px-4 inline-flex items-center border border-solid bg-[#f0f8ff] border-[#c2e1ff] rounded-lg box-border my-2 mx-0">
      {/* Start Info Banner Message*/}
      <span className="banner-message mr-[6px] box-border text-[13px] leading-5">
        <span className="box-border text-[13px] leading-5 inline-flex items-center">
          Miễn phí vận chuyển đơn từ 149K của mỗi nhà bán có logo
          <img
            className="ml-1 max-w-full border-none box-border w-[76px] aspect-[auto_76/12] h-3 text-[13px] leading-5"
            src="https://salt.tikicdn.com/ts/upload/3d/e3/de/2c71b5485f7335d41cb3c06198035fe3.png"
            alt="icon"
          />
        </span>
      </span>
      {/* Start Info Banner Message*/}

      {/* Start Info Banner More*/}
      <div className="banner-more ml-[14px] cursor-pointer flex items-center">
        <svg
          className="w-[14px] h-[14px] box-border cursor-pointer text-[13px] leading-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <path
            d="M12.75 11.25C12.75 10.8358 12.4142 10.5 12 10.5C11.5858 10.5 11.25 10.8358 11.25 11.25V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V11.25Z"
            fill="#808089"
          ></path>
          <path
            d="M12.75 8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25C11.25 7.83579 11.5858 7.5 12 7.5C12.4142 7.5 12.75 7.83579 12.75 8.25Z"
            fill="#808089"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12Z"
            fill="#808089"
          ></path>
        </svg>
        {hover ? <NoteFreeShip></NoteFreeShip> : ""}
      </div>
      {/* End Info Banner More*/}
    </div>
  );
};

export default BannerShip;
