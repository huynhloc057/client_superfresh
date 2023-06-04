import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCardRelated from "./ProductCardRelated";

const NewestProductList = ({ products }) => {
  let settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 7,
    slidesToScroll: 5,
  };
  // if (Object.keys(products).length === 0) {
  //   return null;
  // }
  return (
    <div className="mx-20 mt-4 border-none outline-none">
      <h2 className="text-[24px] leading-[1.3] m-0 font-bold uppercase">
        Sản phẩm mới nhất{" "}
      </h2>
      <Slider {...settings}>
        {products &&
          products.map((item) => (
            <ProductCardRelated
              key={item._id}
              id={item._id}
              thumbnailUrl={item?.productPictures[0]?.img}
              name={item.name}
              quantitySell={item.quantitySell}
              price={item.price}
              url={item.slug}
            ></ProductCardRelated>
          ))}
      </Slider>
    </div>
  );
};

export default NewestProductList;
