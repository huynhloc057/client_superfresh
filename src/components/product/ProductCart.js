import React from "react";

const ItemCart = ({ item }) => {
  return (
    <div>
      <div className="mb-8 item-product">
        <div className="flex items-center justify-start mx-0 my-0 row">
          {/* Start Col 1*/}
          <div className="col-1 w-[398px] py-0 px-[15px]">
            <div className="flex list-none product-img">
              {/* Start Product Checkbox */}
              <div className="product-checkbox relative top-[27px]">
                <label
                  className="inline-block list-none cursor-default"
                  htmlFor=""
                >
                  <input
                    className="absolute h-[1px] w-[1px] invisible opacity-0 box-border p-0 overflow-visible text-full leading-[1.5] m-0"
                    type="checkbox"
                  />
                  <span className="checkbox-fake w-[18px] h-[18px] border border-solid border-[#c4c4cf] rounded inline-block align-middle my-0 mr-3 ml-0 relative z-[1] text-[#c4c4cf] bg-transparent cursor-pointer"></span>
                </label>
              </div>
              {/* End Product Checkbox */}

              {/* Start Product Image */}
              <a
                className="product-image inline-block text-[#0b74e5] no-underline bg-transparent"
                href="/"
              >
                <img
                  className="img-container w-[80px] h-[80px] object-contain max-w-full border-none"
                  src={item.img}
                  alt=""
                ></img>
              </a>
              {/* End Product Image */}

              {/* Start Product Content */}
              <div class="product-content width-[calc(100% - 100px)] pl-[10px] relative w-[260px]">
                <a
                  className="product-name text-ellipsis overflow-hidden text-[13px] text-[#242424] mb-[5px] leading-5 no-underline bg-transparent box-border list-none"
                  href="/"
                >
                  {item.title}
                </a>
                <span className="product-title block font-medium uppercase text-[#009900] text-[11px]"></span>
                {!item.bookcare ? (
                  <span className="product-notbookcare block text-[13px] text-[#fd820a] my-[10px] mx-0">
                    Sách không hỗ trợ Bookcare
                  </span>
                ) : (
                  <span class="product-bookcare block text-[#777777] text-[12px] my-[10px] mx-0">
                    Sách có thể bọc bằng
                    <a
                      className="inline-block ml-[3px] text-[#0d5cb6]"
                      href="/"
                    >
                      <img
                        className="max-w-full border-none w-[60px] h-[11px] aspect-[auto_60/11] text-[#0d5cb6] cursor-pointer text-[12px]"
                        src="https://salt.tikicdn.com/ts/upload/27/4d/9c/babbc888efcb183d0f76c2fd5b2f98dc.png"
                        alt="bookcare"
                      />
                    </a>
                  </span>
                )}
              </div>
              {/* Start Product Content */}
            </div>
          </div>
          {/* End Col 1*/}

          {/* Start Col 2*/}
          <div className="col-2 w-[190px] py-0 px-[15px]">
            <span className="product-realprices font-medium text-[#242424] text-[13px] inline-block mr-[5px]">
              {item.price_after}
            </span>
            <del className="product-discountprices text-[#999999] inline-block text-[11px]">
              {item.price_before}
            </del>
          </div>
          {/* End Col 2*/}

          {/* Start Col 3*/}
          <div className="col-3 w-[130px] py-0 px-[15px] list-none box-border">
            <div className="box-border list-none product-qty">
              <div className="style-qty inline-flex flex-nowrap border border-solid border-[#c8c8c8] rounded-[3px] w-[84px] list-none box-border">
                <span className="qty-decrease inline-block border-r border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                    alt="decrease"
                  />
                </span>
                <input
                  type="tel"
                  className="qty-input border-none bg-transparent w-8 text-center text-[13px] appearance-none m-0 outline-none overflow-visible leading-[1.15] py-[1px] px-[2px] list-none"
                  value="1"
                />
                <span className="qty-increase inline-block border-l border-solid border-[#c8c8c8] text-[#999999] cursor-pointer w-6 h-6">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/decrease.svg"
                    alt="decrease"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* End Col 3*/}

          {/* Start Col 4*/}
          <div className="w-[120px] py-0 px-[15px] list-none">
            <span className="product-finalprices text-[#ff424e] text-[13px] font-medium leading-5 block list-none box-border">
              47.800 ₫
            </span>
          </div>
          {/* End Col 4*/}

          {/* Start Col 5*/}
          <div className="w-[50px] text-right box-border list-none">
            <span className="box-border relative inline-block text-right list-none cursor-pointer product-delete">
              <img
                className="w-[17px] h-[17px] max-w-full border-none box-border cursor-pointer"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                alt="deleted"
              />
            </span>
          </div>
          {/* End Col 5*/}
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
