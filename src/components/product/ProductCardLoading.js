import React from "react";
import LoadingSkeleton from "../skeleton/LoadingSkeleton";

const ProductCardLoading = () => {
  return (
    <div className="flex-1 p-4 m-4 bg-white cursor-pointer rounded-xl shadow-sdproduct hover:shadow-sdproduct hover:scale-105">
      <LoadingSkeleton paddingTop="100%"></LoadingSkeleton>
      <div className="mt-3 mb-1">
        <LoadingSkeleton width="100%" height="36px"></LoadingSkeleton>
      </div>

      <div className="flex items-center gap-x-1">
        <LoadingSkeleton height="12px" width="80px"></LoadingSkeleton>
        <div className="w-[1px] h-2 bg-slag"></div>
        <LoadingSkeleton height="12px" width="64px"></LoadingSkeleton>
      </div>
      <div className="flex items-center mt-1 text-textProduct">
        {/* <span className="text-base font-semibold"> {nf.format(price)}đ</span> */}
        <LoadingSkeleton height="18px" width="72px"></LoadingSkeleton>
      </div>
    </div>
  );
};

export default ProductCardLoading;
