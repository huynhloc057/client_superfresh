import IconSearchOrder from "../icons/IconSearchOrder";
import OrderList from "../orderlist/Orderlist";
import { useState } from "react";

export default function RightbarOrderManage() {
  const menuSorts = [
    "Tất cả đơn hàng",
    "Chờ thanh toán",
    "Đang xử lý",
    "Đang vận chuyển",
    "Đã giao",
    "Đã hủy",
  ];
  const [activeButton, setActiveButton] = useState("Tất cả đơn hàng");

  return (
    <div className="mr-32 basis-10/12  " style={{ height: "auto" }}>
      <div className="mt-2 mb-3 text-xl">Quản lý đơn hàng</div>
      {/* Sort-Section */}

      <div className="grid grid-cols-6 bg-white cursor-pointer">
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

      {/* Search-Section */}
      <div className="flex px-4 py-2 my-2 bg-white border rounded-md h-9 border-slate-400">
        <IconSearchOrder></IconSearchOrder>
        <input
          className="w-9/12 mx-3 focus:outline-none"
          type=""
          name=""
          placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
          maxLength={128}
        ></input>
        <div className="flex justify-between w-3/12">
          <span></span>
          <div className="pl-3 text-blue-500 border-l cursor-pointer border-slate-400">
            Tìm kiếm đơn hàng
          </div>
        </div>
      </div>

      {/* Order-Detail-Section */}
      <OrderList></OrderList>
    </div>
  );
}
