import React from "react";

const CouponShop = () => {
  return (
    <div className="flex flex-wrap">
      <div className="overflow-hidden mr-3 pointer-events-none opacity-50 cursor-not-allowed box-border">
        <div className="border-[1px] border-solid border-[#0d5cb6] rounded h-6 bg-white box-border">
          <i className="float-left ml-[-6px] mt-[6px] w-[10px] h-[10px] border-[1px] border-solid border-[#0d5cb6] rounded-[50%] bg-white box-border"></i>
          <i className="float-right mr-[-6px] mt-[6px] w-[10px] h-[10px] border-[1px] border-solid border-[#0d5cb6] rounded-[50%] bg-white"></i>
          <div className="py-0 px-3 flex items-center h-full text-[#0d5cb6] text-[13px] leading-5 font-normal box-border">
            Giao trong ngày
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponShop;
