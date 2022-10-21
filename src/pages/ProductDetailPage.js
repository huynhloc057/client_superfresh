import React, { useEffect } from "react";
import Footer from "../modules/footer/Footer";
import ProductDetailTopBar from "../modules/categorytop/ProductDetailTopBar";
import ProductDetailContent from "../components/productdetail/ProductDetailContent";
import ProductDetailDescription from "../components/productdetail/ProductDetailDescription";
import ProductDetailShortDescription from "../components/productdetail/ProductDetailShortDescription";
import Header from "../modules/header/Header";
import Comments from "../modules/comment/Comments";
import { useSelector } from "react-redux";

export default function ProductDetailPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <Header></Header>
      <ProductDetailTopBar></ProductDetailTopBar>
      <ProductDetailContent></ProductDetailContent>
      <ProductDetailDescription></ProductDetailDescription>
      <ProductDetailShortDescription></ProductDetailShortDescription>

      <Comments
        currentUserId={userInfo?.user._id}
        currentAvartar={userInfo?.user?.profilePicture}
      />
      <Footer></Footer>
    </div>
  );
}
