import React, { useState, createContext, useContext } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMsg, setToastMsg] = useState({ msg: "", msgType: "" });
  return (
    <ToastContext.Provider value={{ toastMsg, setToastMsg }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
