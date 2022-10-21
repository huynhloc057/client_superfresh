import React, { useState } from "react";

const Quantity = ({ item }) => {
  let [num, setNum] = useState(1);
  let incNum = () => {
    if (num < item.qty) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  return (
    <div className="col-3 w-[130px] py-0 px-[15px] list-none box-border">
      <div className="product-qty list-none box-border">
        <div className="style-qty inline-flex flex-nowrap border border-solid border-[#c8c8c8] rounded-[3px] w-[84px] list-none box-border">
          <button
            className="qty-decrease inline-block border-r border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6"
            type="button"
            onClick={decNum}
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
              alt="decrease"
            />
          </button>
          <input
            type="text"
            className="qty-input border-none bg-transparent w-8 text-center text-[13px] appearance-none m-0 outline-none overflow-visible leading-[1.15] py-[1px] px-[2px] list-none"
            value={num}
            onChange={handleChange}
          />
          <button
            className="qty-increase inline-block border-l border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6"
            type="button"
            onClick={incNum}
          >
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/increase.svg"
              alt="decrease"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
