import React, { useEffect, useState } from "react";
import { coupons } from "./dataCoupon";
import { CURRENCY } from "../payment/payment_content/constraint";
import { useSelector } from "react-redux";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const CouponRight = ({ handleChoose, chooseCoupon }) => {
  const { indexChoose } = useSelector((state) => state.cart);
  const [itemChoose, setItemChoose] = useState(coupons[0]);
  useEffect(() => {
    setItemChoose(coupons[indexChoose + 1]);
  }, [indexChoose]);
  return (
    <div className="relative box-border">
      <div className="max-w-full relative z-[2] w-[286px] box-border">
        <div className="relative opacity-[1] w-full h-[60px] box-border">
          <svg
            className="w-full h-[60px] box-border"
            style={{
              filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 286 60"
          >
            <g className="box-border" fill="none" fillRule="evenodd">
              <g className="box-border">
                <g
                  className="box-border"
                  stroke={`${chooseCoupon ? "#017FFF" : ""}`}
                >
                  <g className="box-border">
                    <g className="box-border">
                      <g
                        className="box-border"
                        transform="translate(-3160 -2828) translate(3118 80) translate(42 2487) translate(0 140) translate(0 85) translate(0 36)"
                      >
                        <path
                          className="box-border"
                          fill={`${
                            chooseCoupon ? "rgb(229, 242, 255)" : "#FFF"
                          }`}
                          d="M278 0c4.418 0 8 3.582 8 8v44c0 4.418-3.582 8-8 8H64.5c0-2.21-1.79-4-4-4s-4 1.79-4 4H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h48.5c0 2.21 1.79 4 4 4s4-1.79 4-4H278z"
                          transform="translate(-544 -2912) translate(80 2252) translate(0 460) translate(464) translate(0 200)"
                        ></path>
                        <g
                          className="box-border"
                          stroke="#EEE"
                          strokeDasharray="2 4"
                          strokeLinecap="square"
                        >
                          <path
                            className="box-border"
                            d="M0.5 0L0.5 48"
                            transform="translate(-544 -2912) translate(80 2252) translate(0 460) translate(464) translate(0 200) translate(60 8)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex box-border">
            <div className="min-w-[60px] w-[60px] p-2 flex flex-col items-center self-center justify-center box-border">
              <div className="relative w-[44px] h-[44px] box-border">
                <div className="w-full pb-[calc(100%)] relative box-border">
                  <img
                    className="object-contain rounded-[8px] absolute top-0 left=0 w-full h-full opacity-[1] transition-opacity max-w-full border-none box-border"
                    src={itemChoose?.url}
                    alt={itemChoose?.price}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center py-2 pr-3 pl-2 w-[calc(100%-60px)] box-border">
              <h4 className="text-[13px] leading-5 max-h-5 mr-1 overflow-hidden text-ellipsis tracking-normal m-0 p-0 font-medium text-[#242424] box-border">
                {`Hoàn ${itemChoose?.price.toLocaleString(CURRENCY)}đ`}
              </h4>
              <div className="flex item-center shrink-0 ml-[auto] box-border">
                <button className="ml-[-8px] block bg-transparent outline-none border-none p-2 cursor-pointer leading-[0px] overflow-visible box-border">
                  <img
                    className="w-4 h-4 cursor-pointer max-w-full border-none box-border"
                    src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23017FFF%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                    alt="info-icon"
                  />
                </button>
                <button
                  className="whitespace-nowrap text-[13px] leading-5 ml-[auto] font-medium tracking-normal cursor-pointer text-center rounded outline-none text-white bg-[#017fff] border-none py-[2px] px-3 overflow-visible box-border"
                  onClick={handleChoose}
                >
                  {chooseCoupon ? "Bỏ chọn" : "Áp Dụng"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withErrorBoundary(CouponRight, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
