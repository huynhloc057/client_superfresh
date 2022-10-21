import React, { useEffect, useState } from "react";
import { coupons } from "./dataCoupon";
import { CURRENCY } from "../payment/payment_content/constraint";
import { useDispatch, useSelector } from "react-redux";
import { setIndexChoose } from "../../app/features/cartSlice";

const ModalCoupon = (props) => {
  const dispatch = useDispatch();
  const { currentTotal, indexChoose } = useSelector((state) => state.cart);
  const [arrTemp, setArrTemp] = useState([]);
  const [choose, setChoose] = useState(Array(coupons.length - 1).fill(false));
  const handleChoose = (position) => {
    const updatedChooseState = choose.map((item, index) =>
      index === position ? !item : false
    );
    const check = updatedChooseState.every((item) => item === false);
    const indexChoose = check ? -1 : updatedChooseState.indexOf(true);
    dispatch(setIndexChoose(indexChoose));
    setChoose(updatedChooseState);
  };

  useEffect(() => {
    if (currentTotal >= 1000000) {
      setArrTemp([coupons[1], coupons[2], coupons[3], coupons[4], coupons[5]]);
    } else if (currentTotal >= 500000) {
      setArrTemp([coupons[1], coupons[2], coupons[3], coupons[4]]);
    } else if (currentTotal >= 400000) {
      setArrTemp([coupons[1], coupons[2], coupons[3]]);
    } else if (currentTotal >= 200000) {
      setArrTemp([coupons[1], coupons[2]]);
    } else if (currentTotal >= 150000) {
      setArrTemp([coupons[1]]);
    }
  }, [currentTotal]);

  return (
    <div className="box-border" open={props.open} onClose={props.handleClose}>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-[#27272ab3] z-[999] box-border">
        <div className="absolute left-[50%] translate-x-[-50%] p-0 border-none rounded-[8px] overflow-y-hidden w-[480px] min-h-[500px] outline-[0px] bg-white top-[20px] bottom-[20px] transition-all box-border">
          <div className="pb-[85px] pt-4 px-0 h-full flex flex-col box-border">
            <div className="flex text-[16px] font-medium leading-6 justify-between text-[#38383d] mt-0 mx-4 mb-4 box-border">
              <div className="box-border block text-[16px] font-medium leading-6 text-[#38383d]">
                Tiki Khuyến Mãi
              </div>
              <svg
                className="cursor-pointer box-border w-6 h-6 text-[16px] font-medium leading-6 text-[#38383d]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={props.handleClose}
              >
                <path
                  className="box-border cursor-pointer text-[16px] font-medium leading-6 text-[#38383d]"
                  d="M17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033Z"
                  fill="#38383D"
                ></path>
              </svg>
            </div>
            <div className="my-0 mx-4 block rounded-[4px] box-border">
              <div className="w-[calc(100%-97px)] inline-block align-top mr-2 relative box-border">
                <svg
                  className="absolute top-2 left-3 box-border w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="box-border"
                    d="M10.2803 14.7803L14.7803 10.2803C15.0732 9.98744 15.0732 9.51256 14.7803 9.21967C14.4874 8.92678 14.0126 8.92678 13.7197 9.21967L9.21967 13.7197C8.92678 14.0126 8.92678 14.4874 9.21967 14.7803C9.51256 15.0732 9.98744 15.0732 10.2803 14.7803Z"
                    fill="#808089"
                  ></path>
                  <path
                    className="box-border"
                    d="M10.125 10.5C10.7463 10.5 11.25 9.99632 11.25 9.375C11.25 8.75368 10.7463 8.25 10.125 8.25C9.50368 8.25 9 8.75368 9 9.375C9 9.99632 9.50368 10.5 10.125 10.5Z"
                    fill="#808089"
                  ></path>
                  <path
                    className="box-border"
                    d="M15 14.625C15 15.2463 14.4963 15.75 13.875 15.75C13.2537 15.75 12.75 15.2463 12.75 14.625C12.75 14.0037 13.2537 13.5 13.875 13.5C14.4963 13.5 15 14.0037 15 14.625Z"
                    fill="#808089"
                  ></path>
                  <path
                    className="box-border"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25C3.33579 5.25 3 5.58579 3 6V9.75C3 10.1642 3.33579 10.5 3.75 10.5C4.61079 10.5 5.25 11.1392 5.25 12C5.25 12.8608 4.61079 13.5 3.75 13.5C3.33579 13.5 3 13.8358 3 14.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V14.25C21 13.8358 20.6642 13.5 20.25 13.5C19.3892 13.5 18.75 12.8608 18.75 12C18.75 11.1392 19.3892 10.5 20.25 10.5C20.6642 10.5 21 10.1642 21 9.75V6C21 5.58579 20.6642 5.25 20.25 5.25H3.75ZM4.5 9.08983V6.75H19.5V9.08983C18.1882 9.41265 17.25 10.5709 17.25 12C17.25 13.4291 18.1882 14.5874 19.5 14.9102V17.25H4.5V14.9102C5.81181 14.5874 6.75 13.4291 6.75 12C6.75 10.5709 5.81181 9.41265 4.5 9.08983Z"
                    fill="#808089"
                  ></path>
                </svg>
                <input
                  className="rounded-[4px] shadow-none border-[1px] border-solid border-[#c4c4cf] h-9 w-full text-[#242424] text-[14px] leading-5 py-2 pr-3 pl-[44px] outline-0 overflow-visible box-border"
                  type="text"
                  placeholder="Nhập mã giảm giá"
                />
              </div>
              {/* <div className="pointer-events-none bg-[#ebebf0] border-[1px] border-solid border-[#ebebf0] text-[#c4c4cf] text-[14px] font-medium leading-5 outline-0 rounded opacity-[1px] w-[89px] h-9 inline-flex items-center justify-center cursor-pointer align-top box-border"> */}
              <div className="text-[14px] font-medium leading-5 text-white outline-0 bg-[#0b74e5] rounded opacity-[1] w-[89px] h-9 inline-flex items-center justify-center cursor-pointer align-top box-border">
                Áp dụng
              </div>
            </div>
            <div className="overflow-y-scroll py-0 px-4 mt-8 grid gap-4 box-border">
              <div className="box-border">
                <div className="bg-white my-0 mx-[-5px] box-border">
                  <div className="flex justify-between items-center py-0 px-[5px] box-border">
                    <div className="text-[16px] font-normal leading-6 text-[#38383d] box-border">
                      Mã Giảm Giá
                    </div>
                    <div className="text-[12px] font-light leading-4 text-[#808089] box-border">
                      Áp dụng tối đa: 1
                    </div>
                  </div>
                  <div className="max-h-[400px] grid gap-3 py-2 px-[5px] box-border">
                    {arrTemp.map((item, index) => (
                      <div key={index} className="relative box-border">
                        <div className="w-full relative z-[2] flex box-border">
                          <div
                            className="relative opacity-[1] width-full h-[132px] box-border"
                            type="full"
                          >
                            <svg
                              className="w-full h-[132px] box-border overflow-hidden"
                              style={{
                                filter:
                                  "drop-shadow(rgba(0, 0, 0, 0.15) 0px 1px 3px)",
                              }}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 427 132"
                            >
                              <g
                                className="box-border"
                                fill="none"
                                fillRule="evenodd"
                              >
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
                                              stroke={`${
                                                index === indexChoose
                                                  ? "#017FFF"
                                                  : ""
                                              }`}
                                              fill={`${
                                                index === indexChoose
                                                  ? "#E5F2FF"
                                                  : "#FFF"
                                              }`}
                                              d="M419 0c4.418 0 8 3.582 8 8v116c0 4.418-3.582 8-8 8H140.5c0-4.419-3.582-8-8-8s-8 3.581-8 8H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8h116.5c0 4.418 3.582 8 8 8s8-3.582 8-8H392z"
                                            ></path>
                                            <g
                                              className="box-border"
                                              stroke={`${
                                                index === indexChoose
                                                  ? "#017FFF"
                                                  : "#EEE"
                                              }`}
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
                                    {`Hoàn ${item.price.toLocaleString(
                                      CURRENCY
                                    )}đ`}
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
                                    onClick={() => {
                                      handleChoose(index);
                                    }}
                                  >
                                    {`${
                                      index === indexChoose
                                        ? "Bỏ chọn"
                                        : "Áp dụng"
                                    }`}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute w-full bottom-0 py-3 px-4 border-t-[1px] border-solid border-[#ebebf0] z-[3] bg-white box-border">
              <button
                className="text-[16px] leading-[24px] font-medium text-white bg-[#0b74e5] h-11 w-full flex items-center justify-center outline-0 border-none rounded-[4px]"
                onClick={props.handleClose}
              >
                Xong
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCoupon;
