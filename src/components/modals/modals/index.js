import React from "react";
import Login from "../../../pages/Login";

const Modals = ({ modalType, closeModal }) => {
  return (
    <>
      {modalType === "login" && (
        <Login isOpen={true} onClose={() => closeModal()}/>
      )}
    </>
  );
};

export default Modals;

