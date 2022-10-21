import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Cart from "./pages/Cart";
import CataLogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PagePayment from "./pages/PagePayment";
import PageShipping from "./pages/PageShipping";
import PageShippingAddress from "./pages/PageShipping_Address";
import OrderManage from "./pages/OrderManage";
import DiscountCode from "./pages/DiscountCode";
import Profile from "./pages/Profile";
import Editphone from "./pages/Editphone";
import Editemail from "./pages/Editemail";
import PrivateRoutes from "./components/HOC/PrivateRoute";
import PaymentInfo from "./pages/PaymentInfo";
import Address from "./pages/Address";
import EditAddress from "./pages/EditAddress";
import MessengerCustomerChat from "react-messenger-customer-chat";
function App() {
  return (
    <div className="App">
      <MessengerCustomerChat
        pageId="106873825472011"
        appId="3220798881494245"
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/sign-up" element={<SignUpPage> </SignUpPage>}></Route>
          <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route
              path="/profile"
              element={<Profile activeButton={0}></Profile>}
            ></Route>
            <Route
              path="/profile/edit-phone"
              element={<Editphone></Editphone>}
            ></Route>

            <Route
              path="/profile/edit-email"
              element={<Editemail></Editemail>}
            ></Route>

            <Route
              path="/payment-info"
              element={<PaymentInfo activeButton={3}></PaymentInfo>}
            ></Route>

            <Route
              path="/address"
              element={<Address activeButton={4}></Address>}
            ></Route>

            <Route
              path="/edit-address"
              element={<EditAddress></EditAddress>}
            ></Route>
            <Route
              path={"/shipping"}
              element={<PageShipping></PageShipping>}
            ></Route>
            <Route
              path={"/shipping-address"}
              element={<PageShippingAddress></PageShippingAddress>}
            ></Route>

            <Route path="/payment" element={<PagePayment />} />
          </Route>

          <Route
            path="/catalog/:categoryId"
            element={<CataLogPage></CataLogPage>}
          ></Route>

          <Route
            path="/product/:slug"
            exact
            element={<ProductDetailPage></ProductDetailPage>}
          ></Route>

          <Route
            path="/order-manage"
            element={<OrderManage activeButton={1}></OrderManage>}
            x
          ></Route>
          <Route
            path="/discount-code"
            element={<DiscountCode activeButton={2}></DiscountCode>}
            x
          ></Route>

          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
