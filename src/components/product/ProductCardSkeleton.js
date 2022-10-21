import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <div className="flex-1 p-3 bg-white cursor-pointer rounded-xl hover:shadow-sdproduct hover:scale-105">
      <Skeleton height="200px" width="200px"></Skeleton>
      <h3 className="mt-3 mb-1 text-xs leading-5 line-clamp-2 text-textProduct">
        <Skeleton width="200px" height="42px"></Skeleton>
      </h3>

      <div className="flex items-center gap-x-1">
        <Skeleton height="17px" width="200px"></Skeleton>
      </div>
      <div className="flex items-center mt-1 text-textProduct">
        <Skeleton height="25px" width="200px"></Skeleton>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
