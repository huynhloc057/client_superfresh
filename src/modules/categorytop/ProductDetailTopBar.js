import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { IconRight } from "../../components/icons";

const ProductDetailTopBar = () => {
  const { productDetail, isLoading } = useSelector((state) => state.product);

  if (Object.keys(productDetail).length === 0) {
    return null;
  }

  return (
    <div className="flex items-center text-sm mx-[89px] text-textProduct border-b border-dashed border-[#dcdcdc]">
      <NavLink
        to={"/"}
        className="flex items-center h-10 font-light hover:underline whitespace-nowrap"
      >
        Trang chủ{" "}
      </NavLink>
      <span className="mx-2">
        <IconRight></IconRight>
      </span>
      {isLoading ? (
        <Skeleton width="96px" height="30px"></Skeleton>
      ) : (
        <span className="flex items-center h-10 font-light whitespace-nowrap">
          {productDetail?.name}
        </span>
      )}
    </div>
  );
};

export default ProductDetailTopBar;
