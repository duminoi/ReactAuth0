// AppContext.js
import React, { createContext, useState } from "react";

// Tạo context
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState("");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
