import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Panitoni© Todos os direitos reservados.</p>
        <div>
          <a href="/" className="text-gray-200 hover:text-gray-300 mx-2">
            Facebook
          </a>
          <a href="/" className="text-gray-200 hover:text-gray-300 mx-2">
            Twitter
          </a>
          <a href="/" className="text-gray-200 hover:text-gray-300 mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
