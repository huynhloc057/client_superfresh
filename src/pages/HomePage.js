import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDeliveryInfo } from "../app/features/addressSlice";
import { setModalOpen } from "../app/features/cartSlice";
import Banner from "../components/banner/Banner";
import ListItemsCategory from "../components/banner/ListItemsCategory";
import CategoryProduct from "../components/category/CategoryProduct";
import CategoryTopBar from "../modules/categorytop/CategoryTopBar";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";
import banner4 from "../image/banner4.png";
import banner5 from "../image/banner5.png";
import banner6 from "../image/banner6.png";
import NewestProductList from "../components/product/NewestProductList";
import { getNewestProducts } from "../app/features/productSlice";

export const events = [
  {
    id: 1,
    url: `${banner1}`,
  },
  {
    id: 2,
    url: `${banner2}`,
  },
  {
    id: 3,
    url: `${banner3}`,
  },
  {
    id: 4,
    url: `${banner4}`,
  },
  {
    id: 5,
    url: `${banner5}`,
  },
  {
    id: 6,
    url: `${banner6}`,
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.cart);
  const { newestProducts } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getDeliveryInfo());
    dispatch(setModalOpen(!modalOpen));
    dispatch(getNewestProducts());
  }, [dispatch, modalOpen]);
  return (
    <div>
      <Header></Header>
      <CategoryTopBar></CategoryTopBar>
      <Banner events={events}></Banner>
      <ListItemsCategory></ListItemsCategory>
      <NewestProductList products={newestProducts}></NewestProductList>
      <CategoryProduct></CategoryProduct>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
