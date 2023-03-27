import { Fragment } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Fragment>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4">{children}</div>
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      )}
    </Fragment>
  );
}

export default Modal;
