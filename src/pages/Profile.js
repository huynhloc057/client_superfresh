import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import Header from "../modules/header/Header";
import RightbarProfile from "../components/rightbar_profile/RightbarProfile.js";
import Footer from "../modules/footer/Footer";

export default function Profile({ activeButton }) {
  return (
    <>
      <Header></Header>
      <div className="bg-white">
        <Headerpage headerpage={"Thông tin cá nhân"}></Headerpage>
        <div className="flex">
          <Leftbar activeButton={activeButton}></Leftbar>
          <RightbarProfile></RightbarProfile>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
