import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartNotification from "../bannercart/CartNotification";
import { setModalOpen } from "../../app/features/cartSlice";

const IconCart = () => {
  const { cartItems, modalOpen } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="style-cart tracking-normal relative block">
      <NavLink
        className="tracking-normal text-[#0b74e5] no-underline bg-transparent"
        to={"/cart"}
        onClick={() => dispatch(setModalOpen(!modalOpen))}
      >
        <div className="style_item items-end w-[94px] cursor-pointer my-0 mr-0 ml-4 flex text-white text-[12px]  relative tracking-[0.7px]">
          <div className="cart-wrapper relative mr-[8px] flex tracking-normal">
            <img
              className="cart-icon w-8 h-8 tracking-normal max-w-full border-none"
              src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png"
              alt=""
            />
            {cartItems.length !== 0 && (
              <span className="cart_qty tracking-normal text-[#242424] bg-[#ffd000] h-5 left-5 top-[-2px] rounded-[40px] inline-block text-center leading-5 text-[13px] font-medium absolute py-0 px-[7px]">
                {cartItems.length}
              </span>
            )}
          </div>
          <span className="cart-text tracking-normal">Giỏ Hàng</span>
        </div>
      </NavLink>
      {/* Cart Notification */}
      {modalOpen && <CartNotification modalOpen={modalOpen} />}
    </div>
  );
};

export default IconCart;
