import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategory } from "../../app/features/productSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import ProductCardRelated from "../product/ProductCardRelated";

const ProductListRelated = ({ productDetail }) => {
  const categoryId = productDetail?.category?._id;
  const productId = productDetail?._id;
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductByCategory(categoryId));
  }, [categoryId, dispatch]);
  let settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  if (!categoryId) return;
  else
    return (
      <div className="mt-4 border-none outline-none">
        <h2 className="pt-2 pb-2 pl-8 pr-8 m-0 text-xl font-normal leading-8 capitalize">
          Sản phẩm tương tự{" "}
        </h2>
        <Slider {...settings}>
          {products.length > 0 &&
            products.map(
              (item) =>
                item._id !== productId && (
                  <ProductCardRelated
                    key={item._id}
                    id={item._id}
                    thumbnailUrl={item.productPictures[0].img}
                    name={item.name}
                    quantitySell={item.quantitySell}
                    price={item.price}
                    url={item.slug}
                  ></ProductCardRelated>
                )
            )}
        </Slider>
      </div>
    );
};

export default ProductListRelated;
