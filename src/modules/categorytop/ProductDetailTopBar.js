import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../app/features/productSlice";
import Skeleton from "react-loading-skeleton";
import { IconRight } from "../../components/icons";

const ProductDetailTopBar = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { productDetail } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductDetail(slug));
  }, [slug, dispatch]);
  const { isLoading } = useSelector((state) => state.product);
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
