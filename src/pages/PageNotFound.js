import React from "react";
import { useNavigate } from "react-router";
import Button from "../components/button/Button";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <div className="flex items-center justify-center w-full h-screen py-20 bg-bgHome flex-col">
        <img srcSet="../notfound.png 2x" alt="" />
        <p className="text-xl my-4">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại!
        </p>
        <Button
          className="bg-primary text-sm hover:opacity-70"
          onClick={() => navigate("/")}
        >
          Trở về trang chủ
        </Button>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PageNotFound;
