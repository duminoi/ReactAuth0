// AppContext.js
import React, { createContext, useState } from "react";

// Tạo context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [toastContent, setToast] = useState("idle");

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        toastContent,
        setToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
