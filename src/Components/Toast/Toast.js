import React, { useEffect, useRef } from "react";
import { useToast } from "../../Context/ToastContext/ToastProvider";
import "./toast.css";

export const Toast = ({ ...toastMsg }) => {
  const { setToastMsg } = useToast();
  const toastRef = useRef(null);
  useEffect(() => {
    let timerId = setTimeout(() => {
      toastRef.current.style.visibility = "hidden";
      setToastMsg({});
    }, 2500);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <div
      ref={toastRef}
      style={{ visibility: toastMsg.msg ? "visible" : "hidden" }}
      className={`toast ${toastMsg.msgType}`}
    >
      <div className="toast-icon ">
        <i
          className={`fas ${
            toastMsg.msgType === "toast-success"
              ? "fa-check-circle"
              : "fa-exclamation-circle"
          }`}
        ></i>
      </div>
      <div className="toast-description">{toastMsg.msg}</div>
      <div className="toast-icon toast-close-icon">
        <i className="fas fa-times-circle"></i>
      </div>
    </div>
  );
};
