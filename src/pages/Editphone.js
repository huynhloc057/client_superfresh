import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import Phone from "../components/editpprofile/Phone"
export default function Editphone() {
  return (
    <>
      <Header></Header>
      <div class="bg-gray">
        <Headerpage headerpage={"Thông tin cá nhân"}></Headerpage>
        <div class="flex">
          <Leftbar></Leftbar>
          <Phone></Phone>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}
