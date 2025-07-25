import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderGroup from "./sections/HeaderGroup";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderGroup />
      <Outlet />
    </>
  );
}

export default App;
