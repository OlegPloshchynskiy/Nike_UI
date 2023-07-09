import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import FindStore from "./pages/findStore/FindStore.jsx";
import Help from "./pages/help/Help.jsx";

import "normalize.css";
import "./index.css";
import StoreInfo from "./pages/storeInfo/StoreInfo.jsx";
import Shop from "./pages/shop/Shop.jsx";
import GoodsPage from "./pages/goods_page/GoodsPage.jsx";
import Registration from "./components/forms/registration/Registration.jsx";
import LogIn from "./components/forms/log_in/LogIn.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Membership from "./pages/membership/Membership.jsx";
import Cart from "./pages/cart/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/findstore",
    element: <FindStore />
  },
  {
    path: "/help",
    element: <Help />
  },
  {
    path: "/storeinfo",
    element: <StoreInfo />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/goods_page",
    element: <GoodsPage />
  },
  {
    path: "/join_us",
    element: <Registration />
  },
  {
    path: "/log_in",
    element: <LogIn />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/membership",
    element: <Membership />
  },
  {
    path: "/cart",
    element: <Cart />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
