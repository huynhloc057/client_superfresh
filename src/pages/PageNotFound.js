import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/button/Button";
import CheckConnection from "../components/HOC/CheckConnection";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <CheckConnection>
      <Header></Header>
      <div className="flex flex-col items-center justify-center w-full h-screen py-20 bg-bgHome">
        <img srcSet="../notfound.png 2x" alt="" />
        <p className="my-4 text-xl">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
        </p>
        <Button
          className="text-sm bg-primary hover:opacity-70"
          onClick={() => navigate("/")}
        >
          Trở về trang chủ
        </Button>
      </div>
      <Footer></Footer>
    </CheckConnection>
  );
};

export default PageNotFound;
