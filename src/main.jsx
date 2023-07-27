import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App.jsx";
import FindStore from "./pages/findStore/FindStore.jsx";
import Help from "./pages/help/Help.jsx";
import StoreInfo from "./pages/storeInfo/StoreInfo.jsx";
import Shop from "./pages/shop/Shop.jsx";
import GoodsPage from "./pages/goods_page/GoodsPage.jsx";
import Registration from "./components/forms/registration/Registration.jsx";
import LogIn from "./components/forms/log_in/LogIn.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Membership from "./pages/membership/Membership.jsx";
import Cart from "./pages/cart/Cart.jsx";

import "normalize.css";
import "./index.css";

const history = createBrowserHistory()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes history={history}>
        <Route path="/" element={<App />} />
        <Route path="/findstore" element={<FindStore />} />
        <Route path="/help" element={<Help />} />
        <Route path="/storeinfo" element={<StoreInfo />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/goods_page" element={<GoodsPage />} />
        <Route path="/join_us" element={<Registration />} />
        <Route path="/log_in" element={<LogIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
