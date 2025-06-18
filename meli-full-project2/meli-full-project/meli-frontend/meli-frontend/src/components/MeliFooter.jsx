import React from 'react';

const MeliFooter = () => (
  <footer className="w-full bg-[#f5f5f5] py-8 mt-12 text-center font-roboto text-[#888] text-base">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-2">
      <div>
        © {new Date().getFullYear()} Mercado Libre Challenge
      </div>
      <div className="flex gap-4 justify-center mt-2">
        <a href="#" className="text-[#3483fa] hover:underline">Términos y condiciones</a>
        <a href="#" className="text-[#3483fa] hover:underline">Cómo cuidamos tu privacidad</a>
        <a href="#" className="text-[#3483fa] hover:underline">Ayuda / PQR</a>
      </div>
    </div>
  </footer>
);

export default MeliFooter; 