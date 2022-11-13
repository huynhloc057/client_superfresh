import React from "react";
import IconOrderProfile from "../icons/IconOrderProfile";
import IconUserProfile from "../icons/IconUserProfile";
import IconCupon from "../icons/IconCupon";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import IconPaymentInfo from "../icons/IconPaymentInfo";
import IconLocation from "../icons/IconLocation";

export default function Leftbar({ activeButton }) {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex-col ml-32 basis-3/12" style={{ height: "700px" }}>
      <div className="flex justify-center items-center">
        <img
          className="w-12 h-12"
          style={{ borderRadius: "50%" }}
          src={userInfo?.user?.profilePicture}
          alt="avatar"
        ></img>
        <div className="flex-col mx-2">
          {/* <div className="text-sm">Tài khoản của</div> */}
          <div className="text-lg font-bold ">{userInfo?.user?.name}</div>
        </div>
      </div>
      <ul className="m-3">
        <NavLink to="/profile">
          <li
            className={
              "flex py-1 hover:bg-slate-200" +
              (activeButton === 0 ? " bg-slate-200" : "")
            }
          >
            <IconUserProfile></IconUserProfile>
            <div className="ml-3">Thông tin tài khoản</div>
          </li>
        </NavLink>
        <NavLink to="/order-manage">
          <li
            className={
              "flex py-1 hover:bg-slate-200" +
              (activeButton === 1 ? " bg-slate-200" : "")
            }
          >
            <IconOrderProfile></IconOrderProfile>
            <div className="ml-3">Quản lý đơn hàng</div>
          </li>
        </NavLink>
        <NavLink to="/discount-code">
          <li
            className={
              "flex py-1 hover:bg-slate-200" +
              (activeButton === 2 ? " bg-slate-200" : "")
            }
          >
            <IconCupon></IconCupon>
            <div className="ml-3">Mã giảm giá </div>
          </li>
        </NavLink>
        <NavLink to="/payment-info">
          <li
            className={
              "flex py-1 hover:bg-slate-200" +
              (activeButton === 3 ? " bg-slate-200" : "")
            }
          >
            <IconPaymentInfo></IconPaymentInfo>
            <div className="ml-3">Thông tin thanh toán</div>
          </li>
        </NavLink>
        <NavLink to="/address">
          <li
            className={
              "flex py-1 hover:bg-slate-200" +
              (activeButton === 4 ? " bg-slate-200" : "")
            }
          >
            <IconLocation></IconLocation>
            <div className="ml-3">Sổ địa chỉ</div>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}
