import React from "react";
import Modal from "../../components/modals/modal";


const Login = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-gray-400 border rounded-lg py-2 px-3 w-full"
              placeholder="Digite seu e-mail"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-gray-400 border rounded-lg py-2 px-3 w-full"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gray-800 text-white rounded-lg py-2 px-4 hover:bg-gray-700 transition-colors duration-200"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
