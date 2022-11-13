import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import RightBarDiscountCode from "../components/rightbar_discount_code/RightBarDiscountCode";
import CheckConnection from "../components/HOC/CheckConnection";
export default function DiscountCode({ activeButton }) {
  return (
    <CheckConnection>
      <Header></Header>
      <div className="bg-white">
        <Headerpage headerpage={"Mã giảm giá"}></Headerpage>
        <div className="flex">
          <Leftbar activeButton={activeButton}></Leftbar>
          <RightBarDiscountCode></RightBarDiscountCode>
        </div>
      </div>
      <Footer></Footer>
    </CheckConnection>
  );
}
