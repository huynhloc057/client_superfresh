import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setLogout } from "../../app/features/authSlice";
import { setResetCart } from "../../app/features/cartSlice";

const IconAccount = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setResetCart());
    dispatch(setLogout());
  };
  return (
    <>
      <div className="header-account cursor-pointer my-0 mr-0 ml-4 items-center flex text-white text-[12px] relative w-[162px] box-border peer">
        <img
          className="profile-icon w-[32px] h-[32px] mr-[8px] rounded-[2px] tracking-normal max-w-full border-none"
          src={userInfo?.user?.profilePicture}
          alt=""
        />
        <span className="flex flex-col font-normal tracking-normal text-white style-item whitespace-nowrap ">
          <span className="style-nowrap tracking-normal whitespace-nowrap text-ellipsis inline-block overflow-hidden capitalize text-[11px] leading-4">
            Tài Khoản
          </span>
          <span className="account-label flex items-center text-[13px] leading-5 min-w-[120px] tracking-normal">
            <span className="max-w-[104px] whitespace-nowrap text-ellipsis overflow-hidden tracking-normal">
              {userInfo?.user?.name}
            </span>
            <img
              className="w-4 h-4 max-w-full tracking-normal border-none arrowIcon "
              src="https://salt.tikicdn.com/ts/upload/d7/d4/a8/34939af2da1ceeeae9f95b7485784233.png"
              alt=""
            />
          </span>
        </span>

        <div className="style-user tracking-normal hidden border-[1px] border-solid border-[#efefef] w-auto min-w-[196px] z-[15] list-none m-0 py-[10px] px-0 rounded-t-none rounded-b-[3px] shadow-[rgb(0,0,0/18%)_0px_6px_12px_0px] absolute top-[45px] left-[0] translate-x-[-50%]"></div>
      </div>
      <div
        id="dropdown"
        className="absolute z-50 hidden transition-all bg-white divide-y divide-gray-100 rounded shadow peer-hover:flex hover:flex w-44 text-text1 dark:bg-gray-700 top-16 right-[6.5rem] translate-y-1/6"
      >
        <ul
          className="w-full py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          <NavLink
            to={"/profile"}
            className="block px-4 py-2 text-xs hover:bg-blue-300"
          >
            Tài khoản của tôi
          </NavLink>

          <NavLink
            to={"/order-manage"}
            className="block px-4 py-2 text-xs hover:bg-blue-300"
          >
            Thông tin đơn hàng của tôi
          </NavLink>

          <NavLink
            to={"/discount-code"}
            className="block px-4 py-2 text-xs hover:bg-blue-300"
          >
            Mã giảm giá
          </NavLink>

          {userInfo?.user?.role === "admin" && (
            <NavLink
              to={"/admin"}
              className="block px-4 py-2 text-xs hover:bg-blue-300"
            >
              Trang Quản lý
            </NavLink>
          )}

          <span
            className="block px-4 py-2 text-xs cursor-pointer hover:bg-blue-300"
            onClick={handleLogout}
          >
            Thoát tài khoản
          </span>
        </ul>
      </div>
    </>
  );
};

export default IconAccount;
