import React, { useState } from "react";

import ProductCard from "./ProductCard";

const productPerRow = 12;
const ProductListCatalog = ({ products }) => {
  const [next, setNext] = useState(productPerRow);
  const handleLoadMoreProduct = () => {
    setNext(next + productPerRow);
  };
  console.log(products)
  return (
    <div className="flex flex-col w-full mb-4">
      <div className="grid w-full md:grid-cols-4 xl:grid-cols-5 gap-1 mt-3 bg-white">
        {products &&
          products
            ?.slice(0, next)
            .map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                thumbnailUrl={item.productPictures[0].img}
                name={item.name}
                quantitySell={item.quantity}
                price={item.price}
                url={item.slug}
              ></ProductCard>
            ))}
      </div>
      {next < products?.length && (
        <div className="flex flex-col items-center justify-center bg-white">
          <button
            className="h-8 px-2 mt-5 mb-4 text-sm font-semibold leading-4 text-center border rounded outline-none text-btnView border-btnView hover:bg-btnView hover:text-white w-60"
            onClick={handleLoadMoreProduct}
          >
            Xem thêm
          </button>
        </div>
      )}
    </div>

    // </div>
  );
};

export default ProductListCatalog;
