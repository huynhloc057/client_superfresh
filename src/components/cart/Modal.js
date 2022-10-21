import React from "react";

const Modal = () => {
  return (
    <div className="react-modal hidden">
      <div className="react-modal--open fixed inset-0 bg-[#27272ab3] z-[999]">
        <div className="react-modal__content absolute top-[50%] right-[40px] bottom-auto left-[50%] border border-solid border-[#cccccc] bg-white overflow-auto rounded-[8px] outline-none p-4 w-[311px] translate-x-[-50%] translate-y-[-50%]">
          <div className="dialog">
            <div className="dialog-content text-[#38383d] mb-6 flex">
              <div className="w-5 h-5 mr-2 shrink-0">
                <img src="/iconwarning.png" alt="" />
              </div>
              <div className="dialog_text">
                <div className="dialog-content__title text-[16px] leading-6 font-medium mb-2">
                  Xoá sản phẩm
                </div>
                <div className="dialog-content__message text-5 text-[#515158]">
                  Bạn có muốn xóa sản phẩm đang chọn?
                </div>
              </div>
            </div>
            <div className="dialog-control flex align-center text-[14px] leading-5 font-medium justify-end">
              <div className="dialog-control__confirm border border-solid border-[#0b74e5] text-[#0b74e5] mr-2 py-2 px-4 rounded h-9 cursor-pointer box-border">
                Xác Nhận
              </div>
              <div className="dialog-control__cancel bg-[#0b74e5] text-white py-2 px-4 h-9 cursor-pointer box-border">
                Huỷ
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
