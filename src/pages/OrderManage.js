import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import CheckConnection from "../components/HOC/CheckConnection";
import Leftbar from "../components/leftbar/Leftbar";
import RightbarOrderManage from "../components/rightbar_order_manage/RightbarOrderManage";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

export default function OrderManage({ activeButton }) {
  return (
    <CheckConnection>
      <Header></Header>
      <div className="bg-white">
        <Headerpage headerpage={"Quản lý đơn hàng"}></Headerpage>
        <div className="flex my-4">
          <Leftbar activeButton={activeButton}></Leftbar>

          <RightbarOrderManage></RightbarOrderManage>
        </div>
      </div>
      <Footer></Footer>
    </CheckConnection>
  );
}
