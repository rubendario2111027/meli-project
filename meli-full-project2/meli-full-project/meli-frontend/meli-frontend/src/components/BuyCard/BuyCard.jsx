import React, { useState } from 'react';

const BuyCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-full bg-white rounded-xl shadow-lg border border-[#eee] p-7 font-roboto flex flex-col gap-4">
      <div className="text-[#00a650] font-bold text-lg mb-1">Envío gratis a todo el país</div>
      <div className="text-sm text-[#3483fa] mb-2">
        <a href="#" className="hover:underline">Conoce los tiempos y las formas de envío.</a>
        <a href="#" className="ml-2 hover:underline">Calcular cuándo llega</a>
      </div>
      <div className="text-[#00a650] font-semibold text-base">Stock disponible</div>
      <div className="flex items-center gap-2 text-base text-[#333] mb-2">
        <span>Cantidad:</span>
        <select
          id="cantidad"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="border border-[#ddd] rounded px-2 py-1 text-base"
        >
          {Array.from({ length: product.stock }, (_, i) => i + 1).map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        <span className="text-[#888] text-sm">({product.stock} disponibles)</span>
      </div>
      <button className="w-full bg-[#3483fa] text-white font-bold rounded-lg py-4 text-lg shadow hover:bg-[#2968c8] transition mb-1">Comprar ahora</button>
      <button className="w-full bg-white text-[#3483fa] border-2 border-[#3483fa] font-bold rounded-lg py-4 text-lg shadow hover:bg-[#f0f7ff] hover:text-[#2968c8] hover:border-[#2968c8] transition">Agregar al carrito</button>
      <div className="text-sm text-[#333] mt-2">
        Vendido por <a href="#" className="text-[#3483fa] font-semibold hover:underline">{product.seller?.name}</a>
        <div className="text-[#888] text-xs">MercadoLíder | +5mil ventas</div>
      </div>
      <div className="flex items-center gap-2 text-[#444] text-sm mt-2">
        <span role="img" aria-label="devolución">↩️</span> Devolución gratis. Tienes 30 días desde que lo recibes.
      </div>
      <div className="flex items-center gap-2 text-[#3483fa] text-sm">
        <span role="img" aria-label="escudo">🛡️</span> Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.
      </div>
      <div className="flex items-center gap-2 text-[#444] text-sm">
        <span role="img" aria-label="garantía">✅</span> 12 meses de garantía de fábrica.
      </div>
      <div className="text-sm text-[#444] mt-2">
        <b>Métodos de pago:</b>
        <ul className="list-disc pl-5 mt-1">
          {product.payment_methods?.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BuyCard; 