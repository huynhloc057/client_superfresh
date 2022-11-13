import React, { useEffect } from "react";
import OrderItem from "../orderitem/Orderitem";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUser } from "../../app/features/paymentSlice";
import { CURRENCY } from "../payment/payment_content/constraint";

export default function OrderList() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { itemsOrder } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrdersByUser());
  }, [userInfo, dispatch]);

  return (
    <div className="h-auto overflow-auto flex flex-col min-h-[calc(100vh-110px)] mb-6">
      {/* List items */}
      {Array.isArray(itemsOrder)
        ? itemsOrder?.map((item, index) => (
            <div className="bg-white rounded text-[13px] mb-5 p-4">
              <div className="border-b-[1px] border-solid border-[#ebebf0] pb-3 text-green-600 text-[14px] font-medium leading-5">
                <img
                  className="block w-[18px] h-[18px] float-left my-0 mr-[6px] ml-[6px]"
                  src="https://diaoc5sao.vn/wp-content/uploads/2019/10/Tick-mark-icon-png-66191.png"
                  alt=""
                />
                <span>Giao hàng thành công</span>
                {/* <div className="float-right italic opacity-[0.4] font-normal text-black">
                  {Intl.DateTimeFormat("vn-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }).format(item.createdAt)}
                </div> */}
              </div>

              <div className="cursor-pointer">
                <div>
                  {/* item */}
                  {item.items?.map((order) => (
                    <OrderItem order={order}></OrderItem>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end w-full mt-3">
                <div className="text-[17px] flex mb-3 box-border">
                  <div className="font-light text-[#808089] mr-2 box-border">
                    Tổng tiền:
                  </div>
                  <div className="font-normal text-[#38383d] box-border">
                    {`${item.totalAmount.toLocaleString(CURRENCY)} ₫`}
                  </div>
                </div>
                <div className="box-border flex justify-between">
                  <div className="py-3 px-2 h-[36px] rounded border-[1px] border-solid border-[#0b74e5] text-[14px] font-normal leading-[1.4] text-[#0b74e5] flex justify-center items-center cursor-pointer ml-2">
                    Xem chi tiết
                  </div>
                  <div className="text-white bg-[#0b74e5] py-3 px-2 h-[36px] rounded border-[1px] border-solid border-[#0b74e5] text-[14px] font-normal leading-[1.4] flex justify-center items-center cursor-pointer ml-2">
                    Thanh toán lại
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
