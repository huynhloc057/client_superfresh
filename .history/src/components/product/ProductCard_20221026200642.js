import React from "react";
import { NavLink } from "react-router-dom";
import { IconStar } from "../icons";

const ProductCard = ({ thumbnailUrl, name, quantitySell, price, id, url }) => {
  var nf = new Intl.NumberFormat();
  return (
    <NavLink
      key={id}
      to={`/product/${url}`}
      className="flex-1 p-4 m-4 bg-white cursor-pointer rounded-xl shadow-sdproduct hover:shadow-sdproduct hover:scale-105"
    >
      <img src={`${thumbnailUrl}`} alt="" className="object-cover h-[60%] w-full" />
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
        <span className="text-xs text-textSell">Đã bán {quantitySell}</span>
      </div>
      <div className="flex items-center mt-1 text-textProduct">
        <span className="text-base font-semibold"> {nf.format(price)}đ</span>
      </div>
    </NavLink>
  );
};

export default ProductCard;
