import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductCardLoading from "./ProductCardLoading";

const productPerRow = 20;
const ProductList = ({ products, isLoading }) => {
  const [next, setNext] = useState(productPerRow);
  const handleLoadMoreProduct = () => {
    setNext(next + productPerRow);
  };

  return (
    <div className="flex w-full bg-white my-12">
      <div className="flex flex-col w-full mx-24 border-t border-dashed border-[#dcdcdc] pt-8">
        <div className="pt-[10px] px-0 pb-[30px] text-center">
          <div className="m-0 p-0">
            <h2 className="text-[24px] leading-[1.3] m-0 font-bold uppercase">
              TẤT CẢ SẢN PHẨM
            </h2>
          </div>
        </div>
        <div className="grid w-full gap-1 bg-white md:grid-cols-4 xl:grid-cols-5 ">
          {products && !isLoading ? (
            products
              ?.slice(0, next)
              .map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  thumbnailUrl={item.productPictures[0]?.img}
                  name={item.name}
                  quantitySell={item.quantity}
                  price={item.price}
                  url={item.slug}
                ></ProductCard>
              ))
          ) : (
            <>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
              <ProductCardLoading></ProductCardLoading>
            </>
          )}
        </div>
        {next < products?.length && (
          <div className="flex flex-col items-center justify-center bg-white">
            <button
              className="h-8 px-2 mt-5 mb-4 text-sm font-semibold leading-4 text-center border rounded outline-none hover:text-white hover:bg-[#008641] bg-white hover:border-[#008641] text-[#008641] w-60"
              onClick={handleLoadMoreProduct}
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
