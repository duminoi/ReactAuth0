import React, { useContext } from "react";
import "./assets/css/index.css";
import { AppContext } from "./Components/Context";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

export default function App() {
  return (
    <div>
      <Login />
      <Logout />
    </div>
  );
}
