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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mobiles-tablets",
        element: <Collection />,
      },
      {
        path: "/laptops-computers",
        element: <Collection />,
      },
      {
        path: "/tvs-appliances",
        element: <Collection />,
      },
      {
        path: "/audio",
        element: <Collection />,
      },
      {
        path: "/cameras",
        element: <Collection />,
      },
      {
        path: "/apple",
        element: <AppleCollection />,
      },
      {
        path: "/samsung",
        element: <SamsungCollection />,
      },
      {
        path: "/vivo",
        element: <VivoCollection />,
      },
      {
        path: "/oppo",
        element: <OppoCollection />,
      },
      {
        path: "/realme",
        element: <RealmeCollection />,
      },
      {
        path: "/nokia",
        element: <NokiaCollection  />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
