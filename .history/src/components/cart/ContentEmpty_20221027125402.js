import React from "react";
import { NavLink } from "react-router-dom";
import emptycart from "../../image/emptycart.png";

const ContentEmpty = () => {
  return (
    <div className="content-empty flex flex-nowrap justify-between basis-full box-border leading-[1.15] text-[14px]">
      <div className="content-left grow-[1] shrink-[1] basis-[910px]">
        <div className="empty-cart mt-0 mb-[100px] mx-0 relative z-[1]">
          <div className="w-full px-5 py-10 text-center bg-white rounded empty">
            <img
              className="empty-img w-[190px] max-w-full border-none text-center inline-block"
              src={emptycart}
              alt=""
            />
            <p className="empty-note mt-[15px] mb-[30px] mx-0 text-center">
              Không có sản phẩm nào trong giỏ hàng của bạn.
            </p>
            <NavLink
              to="/"
              exact={true}
              className="nav-link empty-btn bg-[#008641] text-[#4a4a4a] font-medium py-[10px] px-[55px] inline-block rounded no-underline text-center hover:bg-[#008641]"
            >
              Tiếp tục mua sắm
            </NavLink>
          </div>
        </div>
      </div>
      <div className="content-right grow-[1] shrink-[1] basis-[calc(100%-925px)] ml-5 hidden"></div>
    </div>
  );
};

export default ContentEmpty;
