import React, { useState } from "react";
import ListCoupon from "./ListCoupon";
export default function RightBarDiscountCode() {
  const menuSorts = [
    "Tất cả",
    "Tiki",
    "Nhà Bán",
    "Ưu Đãi Thanh Toán",
    "Hết Hiệu Lực",
  ];
  const [activeButton, setActiveButton] = useState("Tất cả");

  return (
    <div className="mr-32 basis-10/12 ">
      <div className="mt-2 mb-3 text-xl">Mã giảm giá</div>

      <div className="grid grid-cols-6 mb-3 cursor-pointer">
        {menuSorts.map((sort) => {
          return (
            <button
              key={sort}
              onClick={() => {
                setActiveButton(sort);
              }}
              className={
                "flex items-center justify-center h-10 " +
                (activeButton === sort
                  ? " border-b-2 border-blue-900 text-blue-900"
                  : "")
              }
            >
              {sort}
            </button>
          );
        })}
      </div>
      <div>
        <ListCoupon active={activeButton}></ListCoupon>
      </div>
    </div>
  );
}
