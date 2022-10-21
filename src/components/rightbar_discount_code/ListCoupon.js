import React, { useState, useEffect } from "react";
import { coupons } from "./dataCoupon";
export default function ListCoupon({ active }) {
  const [arrTemp, setArrTemp] = useState([]);
  useEffect(() => {
    if (active === "Tất cả") {
      setArrTemp([
        coupons[0],
        coupons[1],
        coupons[2],
        coupons[3],
        coupons[4],
        coupons[5],
      ]);
    } else if (active === "Tiki") {
      setArrTemp([coupons[0], coupons[5]]);
    } else if (active === "Nhà Bán") {
      setArrTemp();
    } else if (active === "Ưu Đãi Thanh Toán") {
      setArrTemp([coupons[1], coupons[2], coupons[4]]);
    } else if (active === "Hết Hiệu Lực") {
      setArrTemp([coupons[3]]);
    }
  }, [active]);
  return (
    <div className="grid gap-4 grid-cols-2">
      {arrTemp === undefined
        ? " "
        : arrTemp.map((item, index) => (
            <div key={index} className="flex ">
              <div className="relative box-border my-3 w-full ">
                <div className="relative w-full z-[2] flex  box-border">
                  <div
                    className="relative opacity-[1] width-full h-[132px] box-border"
                    type="full"
                  >
                    <svg
                      className="w-full h-[132px] box-border overflow-hidden"
                      style={{
                        filter: "drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 427 132"
                    >
                      <g className="box-border" fill="none" fillRule="evenodd">
                        <g className="box-border">
                          <g className="box-border">
                            <g className="box-border">
                              <g className="box-border">
                                <g className="box-border">
                                  <g
                                    className="box-border"
                                    transform="translate(-3160 -2828) translate(3118 80) translate(42 2487) translate(0 140) translate(0 85) translate(0 36)"
                                  >
                                    <path
                                      className="box-border"
                                      stroke="#017FFF"
                                      fill="#FFF"
                                      d="M419 0c4.418 0 8 3.582 8 8v116c0 4.418-3.582 8-8 8H140.5c0-4.419-3.582-8-8-8s-8 3.581-8 8H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h116.5c0 4.418 3.582 8 8 8s8-3.582 8-8H392z"
                                    ></path>
                                    <g
                                      className="box-border"
                                      stroke="#017FFF"
                                      strokeDasharray="2 4"
                                      strokeLinecap="square"
                                      mask="url(#14s2l20tnb)"
                                    >
                                      <path
                                        className="box-border"
                                        d="M0.5 0L0.5 114"
                                        transform="translate(132 11)"
                                      ></path>
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex box-border">
                      <div className="min-w-[132px] w-[132px] h-[132px] p-2 flex flex-col items-center self-center justify-center box-border">
                        <div className="relative w-[116px] h-[116px] box-border">
                          <div className="w-full pb-[calc(100%)] relative box-border">
                            <img
                              className="object-contain rounded-[8px] absolute top-0 left-0 w-full h-full opacity-[1] ease-in-out max-w-full border-none box-border"
                              src={item.url}
                              alt={item.price}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col p-3 w-[calc(100%-132px)] box-border">
                        <div className="flex mb-[2px] overflow-hidden max-w-[calc((100%-20px)-8px)] box-border">
                          <div className="whitespace-nowrap h-5 rounded-[2px] bg-[#f0f8ff] text-[#017fff] text-[13px] font-normal leading-5 tracking-normal text-center px-1 inline-block box-border">
                            KH mới
                          </div>
                        </div>
                        <button className="absolute top-3 right-3 translate-x-[8px] translate-y-[-8px] block bg-transparent outline-none border-none p-2 cursor-pointer leading-[0px] normal-case overflow-visible text-[100%] m-0">
                          <img
                            className="cursor-pointer max-w-full border-none box-border"
                            src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23017FFF%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                            alt="info-icon"
                          />
                        </button>
                        <div className="pr-7 box-border">
                          <h4 className="overflow-hidden text-ellipsis tracking-normal m-0 p-0 text-[17px] font-medium leading-[24px] max-h-[24px] text-[#242424] box-border">
                            {/* {`Hoàn ${item.price.toLocaleString(CURRENCY)}đ`} */}
                          </h4>
                          <p className="overflow-hidden text-ellipsis tracking-normal m-0 p-0 text-[13px] font-normal leading-[20px] text-[#787878] box-border">
                            {item.description}
                          </p>
                        </div>
                        <div className="mt-[auto] flex items-end box-border">
                          <p className="pr-2 overflow-hidden text-ellipsis tracking-normal m-0 p-0 text-[13px] font-normal leading-[20px] max-h-5 text-[#787878] box-border">
                            {`HSD: ${item.HSD}`}
                          </p>
                          <button
                            className="whitespace-nowrap ml-[auto] font-medium tracking-normal cursor-pointer text-center rounded-[4px] outline-none text-[15px] leading-6 py-[2px] px-[12px] text-white bg-[#017fff] border-nFone overflow-visible m-0 box-border"
                            //   onClick={() => {
                            //     handleChoose(index);
                            //   }}
                          >
                            {/* {`${index === indexChoose ? "Bỏ chọn" : "Áp dụng"}`} */}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
