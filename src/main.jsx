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
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}/>
  </>
);
