import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

function ShippingContent() {
  return (
    <div className={clsx("max-w-[79.375rem]", "m-auto", "mt-6", "h-[6.25rem]")}>
      <span className="font-bold text-black">2. Địa chỉ giao hàng</span>
      <br />
      <span>
        Bạn muốn giao hàng đến địa chỉ khác?
        <NavLink to="/shipping-address" className="text-sky-500">
           <span> Thêm địa chỉ giao hàng mới</span>
        </NavLink>
      </span>
    </div>
  );
}

export default ShippingContent;
