import React from "react";

const Header = ({openModal}) => {  

  const handleOpenLogin = () => {    
    openModal("login");
  };

  return (
    <div>      
      <header className="bg-gray-800 text-white top-0 left-0 w-full">
        <nav className="flex justify-between px-4 py-2">
          <div className="flex items-center"></div>
          <div className="flex items-center">
            <a
              href="/"
              className="mr-4 hover:text-gray-300 transition-colors duration-200"
            >
              Início
            </a>
            <a
              href="/about"
              className="mr-4 hover:text-gray-300 transition-colors duration-200"
            >
              Sobre
            </a>
            <a
              href="/content"
              className="mr-4 hover:text-gray-300 transition-colors duration-200"
            >
              Produtos
            </a>
            <button
              onClick={handleOpenLogin}
              className="mr-4 hover:text-gray-300 transition-colors duration-200"
            >
              Login
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
