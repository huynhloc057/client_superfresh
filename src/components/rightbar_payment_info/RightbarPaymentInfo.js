import React from "react";
import { NavLink } from "react-router-dom";

export default function RightbarPaymentInfo() {
  return (
    <div className="mr-32 basis-10/12 " style={{ height: "700px" }}>
      <div className="mt-2 mb-3 text-xl">Thông tin thanh toán</div>
      <div className="bg-white px-5 pt-12 pb-16 h-fit flex justify-center border border-dashed border-[#dcdcdc]">
        <div>
          <div className="flex justify-center">
            <img
              className="w-40"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/mascot_fail.svg"
              alt=""
            ></img>
          </div>
          <p className="my-5 text-[14px] text-slate-500">
            Lưu lại thông tin thanh toán giúp bạn đặt hàng nhanh chóng và dễ
            dàng hơn
          </p>
          <NavLink to="/" className="flex justify-center">
            <button
              className="w-[190] h-9 bg-amber-400 rounded py-2 px-7 text-slate-600 text-[14px]"
              type="button"
            >
              Tiếp tục mua sắm
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
