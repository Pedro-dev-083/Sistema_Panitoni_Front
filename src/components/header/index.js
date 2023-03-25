import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
