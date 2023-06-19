import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import FindStore from "./pages/findStore/FindStore.jsx";
import Help from "./pages/help/Help.jsx";

import "normalize.css";
import "./index.css";

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
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router}/>
  </>
);
