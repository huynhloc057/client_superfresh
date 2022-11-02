import React, { useEffect } from "react";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import ContentNotEmpty from "../components/cart/ContentNotEmpty";
import ContentEmpty from "../components/cart/ContentEmpty";
import "react-toastify/dist/ReactToastify.css";
import BannerShip from "../components/bannercart/BannerShip";
import { useDispatch, useSelector } from "react-redux";
import { setResetCart } from "../app/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { quantity} = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(setResetCart())
  }, []);
  return (
    <React.Fragment>
      <div>
        <Header></Header>
        <div className="main-cart block bg-white pb-7">
          <div className="w-[1270px] pl-[15px] pr-[15px] mr-auto ml-auto">
            <div className="flcp-container bg-white box-border">
              {/* Start Banner Ship*/}
              <BannerShip></BannerShip>
              {/* End Banner Ship*/}
            </div>

            {/* Start Main Title*/}
            <div className="flex items-center mx-0 my-5 main-title">
              <h4 className="text-[20px] font-medium m-0 text-black leading-7 uppercase basis-[calc(797px)]">
                Giỏ Hàng
              </h4>
            </div>
            {/* End Main Title*/}

            {/* Start Main Content*/}
            {/* Check cart's quantity */}
            {quantity === 0 ? (
              <ContentEmpty></ContentEmpty>
            ) : (
              <ContentNotEmpty></ContentNotEmpty>
            )}
            {/* End Main Content*/}
          </div>
        </div>
        <Footer></Footer>
        {/* <ModalCoupon></ModalCoupon> */}
      </div>
    </React.Fragment>
  );
};

export default Cart;
