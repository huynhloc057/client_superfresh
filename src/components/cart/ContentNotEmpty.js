import React, { useEffect, useState } from "react";
import RightCart from "../bannercart/RightCart";
import ItemCart from "../cart/ItemCart";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckedItems,
  setCurrentTotal,
  setPaymentItems,
  setResetCart,
} from "../../app/features/cartSlice";
import Swal from "sweetalert2";
import CouponBottom from "../bannercart/CouponBottom";
import CouponShop from "../bannercart/CouponShop";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const ContentNotEmpty = () => {
  const { cartItems, totalAmount, checkedItems, currentTotal, quantity } =
    useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(currentTotal);
  const [checkedState, setCheckedState] = useState([...checkedItems]);
  const [checkedAll, setCheckedAll] = useState(
    checkedState.every((item) => item === true) ? true : false
  );
  useEffect(() => {
    setCheckedState([...checkedItems]);
  }, [checkedItems]);

  useEffect(() => {
    setCheckedAll(checkedItems.every((item) => item === true) ? true : false);
  }, [quantity, checkedItems]);

  // Handle change
  const handleAllChange = () => {
    setCheckedAll(!checkedAll);
    if (checkedAll) {
      setCheckedState(Array(cartItems.length).fill(false));
      setTotal(0);
    } else {
      setCheckedState(Array(cartItems.length).fill(true));
      setTotal(totalAmount);
    }
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + cartItems[index].price * cartItems[index].quantityChoose;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);
  };
  var countChecked = checkedState.filter((value) => value === true).length;
  useEffect(() => {
    dispatch(setCheckedItems(checkedState));
    dispatch(setCurrentTotal(total));
    checkedState.every((item) => item === true)
      ? setCheckedAll(true)
      : setCheckedAll(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (checkedState[i] === true) {
        temp.push(cartItems[i]);
      }
    }
    // console.log(arrTemp);
    dispatch(setPaymentItems(temp));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkedState, quantity]);
  // Show Alert
  const showAlert = () => {
    Swal.fire({
      title: "Xóa tất cả sản phẩm",
      text: "Bạn có muốn xóa tất cả các sản phẩm?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setResetCart());
        Swal.fire("Đã xóa thành công", "", "success");
      }
    });
  };

  return (
    <div className="flex justify-between main-content flex-nowrap basis-full">
      {/* Start Left Content*/}
      <div className="left-content grow-0 shrink-[1] basis-[910px]">
        <div className="left_container">
          {/* Start Left Heading*/}
          <div className="left-heading bg-white py-[9px] px-4 rounded text-[#242424] font-normal text-[13px] mb-3 sticky top-5 z-[99] grid grid-cols-[398px_190px_130px_130px_30px] items-center border border-dashed border-[#dcdcdc]">
            {/* <div className="bg-white w-full h-[21px] absolute left-0 top-[-21px] right-0 "></div> */}
            <label className="style-checkbox inline-block ml-[-1px]" htmlFor="">
              <input
                id="allSelect"
                className="w-[18px] h-[18px] border border-solid border-[#c4c4cf] rounded inline-block align-middle my-0 mr-3 ml-0 relative z-[1] text-[#c4c4cf] bg-transparent cursor-pointer"
                type="checkbox"
                checked={checkedAll}
                onChange={handleAllChange}
              />
              <label htmlFor=""></label>
              <span className="label text-[14px] leading-5 inline-block align-middle cursor-default">
                {`Tất cả (${cartItems.length} sản phẩm)`}
              </span>
            </label>
            <span className="text-[#242424] font-normal text-[13px]">
              Đơn giá
            </span>
            <span className="text-[#242424] font-normal text-[13px]">
              Số lượng
            </span>
            <span className="text-[#242424] font-normal text-[13px]">
              Thành tiền
            </span>
            <button
              className="remove-all inline-block relative cursor-pointer rounded bg-white text-[#242424] z-[2] text-right"
              onClick={showAlert}
            >
              <img
                className="w-[18px] h-[18px] max-w-full border-none ml-[7px]"
                src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/trash.svg"
                alt="deleted"
              />
            </button>
            {/* <div className="bg-[#f5f5fa] w-full h-[10px] absolute left-0 bottom-[-10px] right-0"></div> */}
          </div>
          {/* End Left Heading*/}

          <div className="pt-8 bg-white rounded border border-dashed border-[#dcdcdc]">
            <div className="h-auto overflow-auto infinite-scroll-component">
              <div className="bg-white rounded mb-[10px]">
                {/* Start Style Intend*/}
                <div className="style-intend">
                  {/* Start Item*/}
                  {cartItems.map((item, index) => (
                    <ItemCart
                      cartItems={cartItems}
                      key={`${item._id}_${item.name}`}
                      _id={item._id}
                      name={item.name}
                      totalCurrent={total}
                      value={item.name}
                      checkedState={checkedState}
                      checked={checkedState}
                      index={index}
                      handleChange={handleOnChange}
                      {...item}
                    ></ItemCart>
                  ))}
                  {/* End Item*/}
                </div>
                {/* End Style Intend*/}

                {/* Start Style Seller Discount*/}
                <div className="seller-discount py-4 px-5 flex align-center border-t border-dashed border-[#dcdcdc]">
                  <div className="inline-flex wrapper align-center">
                    <div className="description text-[#242424] text-[15px] font-normal leading-6 mr-3 whitespace-nowrap">
                      Shop Khuyến Mãi
                    </div>
                    {currentTotal >= Number(100000) ? (
                      <CouponBottom></CouponBottom>
                    ) : (
                      ""
                    )}
                    {currentTotal >= Number(1000000) ? (
                      <CouponShop></CouponShop>
                    ) : (
                      ""
                    )}
                    <span className="seller-coupon-note text-[14px] text-[#787878] inline-block">
                      {/* Vui lòng chọn sản phẩm trước */}
                    </span>
                  </div>
                </div>
                {/* End Style Seller Discount*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Left Content */}

      {/* Start Right Content */}
      <div className="right-content grow shrink basis-[calc(100% - 925px)] ml-5 block">
        {/* Start Card Right */}
        <RightCart
          total={total}
          count={countChecked}
          checkedState={checkedState}
        ></RightCart>
        {/* End Card Right */}
      </div>
      {/* End Right Content */}
    </div>
  );
};
export default withErrorBoundary(ContentNotEmpty, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
