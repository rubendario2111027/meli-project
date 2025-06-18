import React from 'react';

const MeliHeader = () => (
  <header className="meli-header w-full bg-[#ffe600] py-3 shadow-sm font-roboto">
    <div className="max-w-7xl mx-auto flex items-center gap-8 px-4">
      {/* Logo Mercado Libre */}
      <a href="/" className="flex items-center mr-4">
        <img src="/logo-ml.png" alt="Mercado Libre" className="h-10 w-auto" style={{minWidth: 120}} />
      </a>
      {/* Barra de búsqueda */}
      <form className="flex-1 flex items-center">
        <input
          className="w-full rounded-md border border-[#ddd] px-5 py-2 text-base font-normal focus:outline-none focus:ring-2 focus:ring-[#3483fa]"
          placeholder="Buscar productos, marcas y más..."
          style={{fontFamily: 'Roboto, Arial, sans-serif'}}
        />
      </form>
      {/* Links */}
      <nav className="flex items-center gap-6 ml-6">
        <a href="#" className="text-[#333] text-base font-medium hover:text-[#3483fa] transition-colors">Ingresa</a>
        <a href="#" className="text-[#333] text-base font-medium hover:text-[#3483fa] transition-colors">Mis compras</a>
        <a href="#" className="flex items-center text-base font-bold hover:text-[#3483fa] transition-colors">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="mr-1"><path fill="#333" d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7Zm0 2h10c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H7C4.79 3 3 4.79 3 7v9c0 2.21 1.79 4 4 4Z"/></svg>
          Carrito
        </a>
      </nav>
    </div>
  </header>
);

export default MeliHeader; 