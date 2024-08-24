import React, { useContext, useState, useEffect } from "react";
import "./assets/css/index.css";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContext } from "./Components/Context";
import Login from "./Components/Login";
import Logout from "./Components/Logout";

export default function App() {
  const { isAuthenticated } = useAuth0();
  const { toastContent, setToast, loading } = useContext(AppContext);
  useEffect(() => {
    if (toastContent != "idle") {
      toast(toastContent);
      setToast("idle");
    }
  }, [toastContent, loading]);
  return (
    <div>
      <ToastContainer />
      {!isAuthenticated ? <Login /> : <Logout />}
    </div>
  );
}
