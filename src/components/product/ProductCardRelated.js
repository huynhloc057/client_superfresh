import React from "react";
import { IconStar } from "../icons";

const ProductCardRelated = ({
  thumbnailUrl,
  name,
  quantitySell,
  price,
  id,
  url,
}) => {
  var nf = new Intl.NumberFormat();
  return (
    <a
      href={`/product/${url}`}
      className="block h-full p-3 bg-white border-none cursor-pointer rounded-xl hover:shadow-sdproduct"
    >
      <img src={`${thumbnailUrl}`} alt="" className="object-cover h-[170px]" />
      <h3 className="mt-3 mb-1 text-xs leading-5 line-clamp-2 text-textProduct">
        {name}
      </h3>

      <div className="flex items-center gap-x-1">
        <div className="flex">
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
          <IconStar></IconStar>
        </div>
        <div className="w-[1px] h-2 bg-slag"></div>
      </div>
      <div className="flex items-center mt-1 text-textProduct">
        <span className="text-base font-semibold"> {nf.format(price)}đ</span>
      </div>
    </a>
  );
};

export default ProductCardRelated;
