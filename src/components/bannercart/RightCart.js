import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  setModalOpen,
  setCurrentTotal,
  setVoucher,
} from "../../app/features/cartSlice";
import exclamation from "../../image/exclamation.png";
import coupon from "../../image/coupon.png";
import ModalCoupon from "./ModalCoupon";
import CouponRight from "./CouponRight";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { CURRENCY } from "../payment/payment_content/constraint";
import "react-toastify/dist/ReactToastify.css";
import { coupons } from "./dataCoupon";

const RightCart = ({ total, count, modalOpen }) => {
  const [open, setOpen] = useState(false);
  const { currentTotal, quantity, cartItems, checkedItems } = useSelector(
    (state) => state.cart
  );
  const { address } = useSelector((state) => state?.address);
  const dispatch = useDispatch();

  // Choose coupon
  const [chooseCoupon, setChooseCoupon] = useState(false);
  const handleChoose = () => {
    // if (!chooseCoupon)
    //   toast.success('Mã khuyến mãi "Giảm 19K" được áp dụng thành công', {
    //     position: "top-right",
    //     autoClose: 500,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    setChooseCoupon(!chooseCoupon);
  };

  // Set discount
  useEffect(() => {
    dispatch(setModalOpen(!modalOpen));
  }, []);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < cartItems.length; i++) {
      if (checkedItems[i] === true) {
        temp += cartItems[i]?.price * cartItems[i]?.quantity;
      }
    }
    dispatch(setCurrentTotal(temp));
  }, [quantity]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const navigate = useNavigate();
  // Xu ly handle click
  const handleClick = (e) => {
    e.preventDefault();
    if (count === 0) {
      Swal.fire({
        icon: "info",
        text: "Bạn vẫn chưa chọn sản phẩm nào để mua",
        confirmButtonText: "OK, đã hiểu",
      });
    } else if (
      address.address === undefined ||
      address.name === undefined ||
      address.phoneNumber === undefined ||
      address.selectedWard === undefined ||
      address.selectedDistrict === undefined ||
      address.selectedCity === undefined
    ) {
      Swal.fire({
        icon: "warning",
        text: "Bạn vẫn chưa điền đủ thông tin giao hàng",
        confirmButtonText: "OK, đã hiểu",
      });
    } else {
      navigate("/payment");
    }
  };

  console.log("address", address.name);

  // Choose voucher
  const { indexChoose } = useSelector((state) => state.cart);
  const [itemChoose, setItemChoose] = useState(coupons[0]);
  useEffect(() => {
    setItemChoose(coupons[indexChoose + 1]);
  }, [indexChoose]);

  // Dispatch voucher
  const voucher = chooseCoupon ? Number(-itemChoose?.price) : Number(0);
  useEffect(() => {
    dispatch(setVoucher(voucher));
  });

  return (
    <React.Fragment>
      <div className="right-inner top-[-102px] sticky">
        <div>
          <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAADIAQMAAACNufaLAAAAA1BMVEX///+nxBvIAAAAKUlEQVR42u3BAQ0AAADCIPunNsc3YAAAAAAAAAAAAAAAAAAAAAAAACQcSjgAAcybzv4AAAAASUVORK5CYII=')] bg-cover rounded">
            <div className="rounded mb-3 relative p-4 bg-white text-[14px] leading-5 border border-dashed border-[#dcdcdc]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[#808089] font-normal m-0">Giao tới</h3>
                <NavLink to="/shipping" className="text-[#0b74e5] no-underline">
                  Thay đổi
                </NavLink>
              </div>
              {address.name === undefined && address.phoneNumber ? (
                <div className="flex items-center text-[#38383d] mb-[2px] font-semibold"></div>
              ) : (
                <div className="flex items-center text-[#38383d] mb-[2px] font-semibold">
                  <p className="m-0">{address.name}</p>
                  <i className="block w-[1px] h-5 bg-[#ebebf0] my-0 mx-2"></i>
                  <p className="m-0">{address.phoneNumber}</p>
                </div>
              )}
              {address.address === undefined ||
              address.selectedWard === undefined ||
              address.selectedDistrict === undefined ||
              address.selectedCity === undefined ? (
                <div className="text-[#808089] font-normal"></div>
              ) : (
                <div className="text-[#808089] font-normal">
                  {`${address.address}, ${address.selectedWard}, ${address.selectedDistrict}, ${address.selectedCity}`}
                </div>
              )}
            </div>
          </div>
          <div className="relative p-4 mb-3 bg-white rounded section-container border border-dashed border-[#dcdcdc]">
            {/* Start Block Header*/}
            <div className="block-header flex align-center justify-between text-[13px] leading-5 mb-4">
              <div className="block-header-title text-[#242424] m-0 capitalize font-medium">
                Tiki Khuyến Mãi
              </div>
              <div className="block-header-usage text-[#787878] flex align-center">
                <span className="text-[#787878]">Có thể chọn 2</span>
                <div className="inline-flex items-center ml-1 cursor-pointer">
                  <img className="w-[10px] h-[10px]" src={exclamation} alt="" />
                </div>
              </div>
            </div>
            {/* End Block Header*/}
            <div className="box-border grid gap-3 mb-4">
              {currentTotal >= 99000 ? (
                <CouponRight
                  handleChoose={handleChoose}
                  chooseCoupon={chooseCoupon}
                ></CouponRight>
              ) : (
                ""
              )}
            </div>

            {/* Start Show More*/}
            <div className="show-more flex items-center text-[#0b74e5] text-[13px] leading-5 cursor-pointer">
              <div className="mr-2 cursor-pointer">
                <img className="w-6 h-6" src={coupon} alt="" />
              </div>
              <span
                className="text-[#0b74e5] text-[13px] leading-5 cursor-pointer"
                onClick={handleOpen}
              >
                Chọn hoặc nhập Khuyến mãi khác
              </span>
            </div>
            {/* End Show More*/}
          </div>
        </div>

        {/* Start Price Summary */}
        <div className="pb-2 bg-white rounded price-summary border border-dashed border-[#dcdcdc]">
          <ul className="prices-items list-none m-0 py-[17px] px-5 border-b border-dashed border-[#dcdcdc]">
            <li className="prices-item flex flex-nowrap justify-between mb-[10px] leading-[1.15]">
              <div className="prices-text font-light text-[#333333] inline-block text-[14px]">
                Tạm tính
              </div>
              <div className="price-value">
                {currentTotal?.toLocaleString(CURRENCY)}đ
              </div>
            </li>
            <li className="prices-item flex flex-nowrap justify-between mb-[10px]">
              <div className="prices-text font-light text-[#333333] inline-block text-[14px] leading-[1.15]">
                Giảm giá
              </div>
              <div className="price-value">
                {currentTotal >= 99000 ? voucher?.toLocaleString(CURRENCY) : 0}đ
              </div>
            </li>
          </ul>
          {/* Start Prices Total */}
          <div className="prices-total py-[17px] px-5 flex flex-nowrap justify-between m-0">
            <span className="prices-text font-light text-[#333333] inline-block text-[14px]">
              Tổng tiền
            </span>
            <div className="text-right prices-content">
              <div className="prices-value text-[#fe3834] text-[22px] font-normal text-right">
                {currentTotal >= 99000
                  ? (currentTotal + voucher)?.toLocaleString(CURRENCY)
                  : currentTotal?.toLocaleString(CURRENCY)}
                đ
              </div>
              <span className="prices-value font-light not-italic block text-[12px] text-[#333333] mt-[3px]">
                (Đã bao gồm VAT nếu có)
              </span>
            </div>
          </div>
          {/* End Prices Total */}
        </div>
        {/* End Price Summary */}

        {/* Start Button Check Out */}
        <button
          className="btn-checkout bg-[#008641] text-white py-[13px] px-[10px] text-center rounded border-none w-full block cursor-pointer mt-[15px] mx-0 mb-0 text-[14px]"
          onClick={handleClick}
        >
          {`Mua Hàng (${count})`}
        </button>
        {/* </NavLink> */}
        {/* End Button Check Out */}
      </div>
      {open && (
        <ModalCoupon
          handleOpen={handleOpen}
          handleClose={handleClose}
        ></ModalCoupon>
      )}
    </React.Fragment>
  );
};

export default RightCart;
