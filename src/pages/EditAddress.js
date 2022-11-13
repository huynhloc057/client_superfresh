import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import CheckConnection from "../components/HOC/CheckConnection";
import Leftbar from "../components/leftbar/Leftbar";
import RightbarEditAddress from "../components/rightbar_edit_address/RightbarEditAddress";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

export default function EditAddress({ activeButton }) {
  return (
    <CheckConnection>
      <Header></Header>
      <div className="bg-gray">
        <Headerpage headerpage={"Quản lý đơn hàng"}></Headerpage>
        <div className="flex">
          <Leftbar activeButton={activeButton}></Leftbar>
          <RightbarEditAddress></RightbarEditAddress>
        </div>
      </div>
      <Footer></Footer>
    </CheckConnection>
  );
}
