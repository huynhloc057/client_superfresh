import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";
import Password from "../components/editpprofile/Password"

export default function Editpasssword() {
  return (
    <>
    <Header></Header>
    <div class="bg-gray">
      <Headerpage headerpage={"Thông tin cá nhân"}></Headerpage>
      <div class="flex">
        <Leftbar></Leftbar>
        <Password></Password>
      </div>
    </div>
    <Footer></Footer>
  </>
  )
}
