import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./templates/Error404.jsx";
import Home from "./templates/Home.jsx";
import Collection from "./templates/Collection.jsx";
import Search from "./templates/Search.jsx";
import Login from "./templates/Login.jsx";
import Register from "./templates/Register.jsx";
import Cart from "./templates/Cart.jsx";
import AppleCollection from "./templates/AppleCollection.jsx";
import SamsungCollection from "./templates/SamsungCollection.jsx";
import VivoCollection from "./templates/VivoCollection.jsx";
import OppoCollection from "./templates/OppoCollection.jsx";
import RealmeCollection from "./templates/RealmeCollection.jsx";
import NokiaCollection from "./templates/NokiaCollection.jsx";
import getAppleProducts from "./getData/apple.js";
import getSamsungCategory from "./getData/samsung.js";
import Product from "./templates/Product.jsx";
import getProduct from "./getData/product.js";
import getCollection from "./getData/collection.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "collections/:slug",
        element: <Collection />,
        loader: getCollection,
      },
      {
        path: "products/:slug",
        element: <Product />,
        loader: getProduct,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
