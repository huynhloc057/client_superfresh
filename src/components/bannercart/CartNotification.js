import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setModalOpen } from "../../app/features/cartSlice";

const CartNotification = (modalOpen) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute bottom-[-15px] right-0 p-4 translate-y-full bg-white rounded-[6px] shadow-[#b3b3b3_1px_1px_15px]">
      <div className="absolute bottom-full right-[15%] border-8 border-solid border-t-transparent border-r-transparent border-b-[#ffffff] border-l-transparent"></div>
      <button
        className="cursor-pointer absolute top-[6px] right-[6px] p-1 text-black opacity-30 text-[11px] bg-transparent bg-none"
        onClick={() => dispatch(setModalOpen(!modalOpen))}
      >
        <svg
          className="fill-current h-4 w-[14px] block align-middle"
          aria-hidden="true"
          viewBox="0 0 14 16"
        >
          <path
            fillRule="evenodd"
            d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
          ></path>
        </svg>
      </button>
      <p className="flex items-center m-0 text-[#333333] text-[13px] whitespace-nowrap tracking-normal">
        <svg
          className="mr-1 text-[#4caf50] text-[19px] tracking-normal h-4 w-4"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
        </svg>
        Thêm vào giỏ hàng thành công!
      </p>
      <NavLink
        className="block mt-4 py-[10px] px-0 w-[240px] text-[14px] font-normal text-center whitespace-nowrap bg-[#ff3945] rounded text-white"
        to={"/cart"}
      >
        Xem giỏ hàng và thanh toán
      </NavLink>
    </div>
  );
};

export default CartNotification;
