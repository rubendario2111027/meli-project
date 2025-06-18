import React from 'react';

const LocationPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Increased size slightly */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const CartIcon = () => ( // Extracted Cart Icon
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-1"> {/* Adjusted size, fill, margin */}
    <path d="M7 18c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H7Zm0 2h10c2.21 0 4-1.79 4-4V7c0-2.21-1.79-4-4-4H7C4.79 3 3 4.79 3 7v9c0 2.21 1.79 4 4 4Z"/>
  </svg>
);


const MeliHeader = () => (
  <header className="w-full bg-[#ffe600] py-2 sm:py-2.5 shadow-sm font-roboto"> {/* Slightly reduced padding */}
    <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
      {/* Delivery Location - Show on larger screens */}
      <div className="hidden lg:flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 flex-shrink-0 whitespace-nowrap cursor-pointer mr-2">
        <LocationPinIcon />
        <div className="flex flex-col">
          <span>Enviar a</span>
          <span className="font-medium -mt-0.5">Capital Federal</span>
        </div>
      </div>

      {/* Logo Mercado Libre */}
      <a href="/" className="flex items-center flex-shrink-0 py-1">
        <img src="/images/logo__small@2x.png" alt="Mercado Libre" className="h-7 sm:h-8 w-auto" style={{minWidth: 90}} />
      </a>

      {/* Barra de búsqueda */}
      <form className="flex-1 flex items-center min-w-0 ml-2 sm:ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="w-full rounded border border-transparent focus:border-blue-500 bg-white text-gray-800 shadow-sm placeholder-gray-400 px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-blue-500 pr-10"
            placeholder="Buscar productos, marcas y más..."
            style={{fontFamily: 'Roboto, Arial, sans-serif'}}
          />
          <button type="submit" className="absolute inset-y-0 right-0 flex items-center justify-center px-3 text-gray-500 hover:text-blue-600 transition-colors">
            <SearchIcon />
          </button>
        </div>
      </form>

      {/* Links de Navegación */}
      <nav className="hidden lg:flex items-center gap-3 sm:gap-4 ml-3 sm:ml-4 flex-shrink-0">
        {/* Delivery Location for small-medium screens, simplified */}
        <a href="#" className="lg:hidden flex items-center gap-1 text-xs text-gray-700 hover:text-gray-900 whitespace-nowrap">
          <LocationPinIcon />
          <span>Enviar a Capital Federal</span>
        </a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Categorías</a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Ofertas</a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Historial</a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Vender</a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Ingresa</a>
        <a href="#" className="text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">Mis compras</a>
        <a href="#" className="flex items-center text-gray-700 text-xs sm:text-sm hover:text-gray-900 transition-colors whitespace-nowrap">
          <CartIcon />
        </a>
      </nav>
      {/* Hamburger menu placeholder for sm/md screens where full nav is hidden */}
      <div className="lg:hidden ml-2 flex-shrink-0">
        <button className="text-gray-700 hover:text-gray-900 p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>
  </header>
);

export default MeliHeader;