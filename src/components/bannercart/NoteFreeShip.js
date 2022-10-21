import React from "react";

const Note = () => {
  return (
    <div className="absolute top-0 left-0 w-[100%] box-border block">
      <div className="box-border">
        <div className="left-[384px] top-[164px] absolute z-[1070] block visible leading-[1.5] text-[12px] bg-transparent opacity-100 rounded-[5px] box-border">
          <div className="box-border block visible leading-[1.5] text-[12px]">
            <div className="left-[50%] top-[-5px] ml-[-6px] border-t-0 border-b-[6px] border-x-[6px] border-b-white absolute w-0 h-0 border-transparent border-solid"></div>
            <div className="text-left no-underline bg-white rounded-[5px] min-h-[34px] border-0 shadow-[#858585_1px_1px_5px_0px] box-border visible leading-[1.5] text-[12px]">
              <div className="bg-white rounded text-[#27272a] w-[432px] box-border text-left visible leading-[1.5] text-[12px]">
                <div className="text-[15px] leading-6 font-medium py-2 px-4 border-b-[1px] border-solid border-[#dddde3] text-center text-[#27272a] visible">
                  <span className="box-border text-[15px] leading-6 font-medium text-center text-[#27272a] visible">
                    Chương trình{" "}
                    <img
                      className="inline-block ml-1 mb-1 max-w-full border-none box-border w-[76px] aspect-[auto_76/12] h-3 text-[15px] leading-6 font-medium text-center text-[#27272a] visible"
                      src="https://salt.tikicdn.com/ts/upload/3d/e3/de/2c71b5485f7335d41cb3c06198035fe3.png"
                      alt="icon"
                    />
                  </span>
                </div>
                <div className="p-4 text-[15px] leading-6 font-normal grid gap-2 box-border text-[#27272a] text-left visible">
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    Chương trình không áp dụng dịch vụ TikiNOW 2-3h
                  </div>
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    <span className="box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                      Chỉ áp dụng với những nhà bán tham gia chương trình và có
                      biểu tượng{" "}
                      <img
                        className=" inline-block ml-1 mb-[3px] max-w-full border-none box-border w-[76px] aspect-[auto_76/12] h-3 text-[15px] leading-6 font-normal text-[#27272a] text-left visible"
                        src="https://salt.tikicdn.com/ts/upload/3d/e3/de/2c71b5485f7335d41cb3c06198035fe3.png"
                        alt="icon"
                      />
                    </span>
                  </div>
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    Miễn phí vận chuyển tối đa 10.000 VND cho giỏ hàng của mỗi
                    nhà bán đạt giá trị từ 149.000 VND đến 299.000 VND
                  </div>
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    Miễn phí vận chuyển tối đa 20.000 VND cho giỏ hàng của mỗi
                    nhà bán đạt giá trị từ 299.000 VND
                  </div>
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    Không giới hạn số lượng nhà bán trong mỗi đơn hàng
                  </div>
                  <div className="flex items-baseline box-border text-[15px] leading-6 font-normal text-[#27272a] text-left visible">
                    <div className="w-[6px] h-[6px] bg-[#dddde3] rounded-[50%] mr-2 shrink-0"></div>
                    Coupon Freeship (nếu có) được áp dụng đồng thời với chương
                    trình.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
