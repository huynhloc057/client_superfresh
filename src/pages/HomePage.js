import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../app/features/cartSlice";
import Banner from "../components/banner/Banner";
import ListItemsCategory from "../components/banner/ListItemsCategory";
import CategoryProduct from "../components/category/CategoryProduct";
import HomeFeature from "../components/homefeature/HomeFeature";
import CategoryTopBar from "../modules/categorytop/CategoryTopBar";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

const HomePage = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setModalOpen(!modalOpen));
  }, []);
  return (
    <div>
      <Header></Header>
      {/* <CategoryTopBar></CategoryTopBar> */}
      <Banner></Banner>
      <ListItemsCategory></ListItemsCategory>
      <CategoryProduct></CategoryProduct>
      {/* <HomeFeature></HomeFeature> */}
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
