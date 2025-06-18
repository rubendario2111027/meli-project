import React, { useState } from 'react';

// Placeholder SVG Icons
const IconTruck = () => <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0m10 0m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 17H3V6a1 1 0 0 1 1-1h9v6H8l2 2m-2-2l-2 2m5-6h5a1 1 0 0 1 1 1v5.5M15 9l5-4M3 9h4" /></svg>;
const IconReturn = () => <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 15l-3-3m0 0l3-3m-3 3h12a6 6 0 010 12h-3"></path></svg>;
const IconShield = () => <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 0018 0 .02.02 0 00-.001-.001z"></path></svg>;
const IconWarranty = () => <svg className="w-4 h-4 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.135 3.135 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.135 3.135 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.135-3.135 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.135-3.135z"></path></svg>;
const IconLocationPin = () => <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>;

const BuyCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = product?.stock || 5; // Default stock if not provided
  const sellerName = product?.seller?.name || "Vendedor de Confianza";
  const sellerReputation = product?.seller?.reputation || "MercadoLíder | +5mil ventas";
  const warrantyInfo = product?.warranty || "12 meses de garantía de fábrica";

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm p-5 font-roboto flex flex-col space-y-5">
      {/* Shipping Info */}
      <div>
        <div className="flex items-start space-x-2">
          <IconTruck />
          <div>
            <div className="text-green-600 font-medium text-base leading-tight">Envío gratis a todo el país</div>
            <div className="text-xs text-gray-500 mt-0.5">Llega gratis <span className="font-semibold text-green-600">entre el martes y el jueves</span></div>
            <a href="#" className="text-xs text-blue-500 hover:text-blue-600 flex items-center space-x-1 mt-1">
              <IconLocationPin />
              <span>Calcular cuándo llega</span>
            </a>
          </div>
        </div>
      </div>

      {/* Stock & Seller */}
      <div>
        <div className="text-sm text-gray-700">
          Vendido por <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">{sellerName}</a>
        </div>
        <div className="text-xs text-gray-500">{sellerReputation}</div>
        <div className="text-sm font-semibold text-gray-800 mt-2">
          {stock > 0 ? "Stock disponible" : "No disponible"}
        </div>
        {stock > 0 && stock <= 5 && stock > 1 && (
          <div className="text-sm font-semibold text-orange-500 mt-1">¡Últimas {stock} disponibles!</div>
        )}
        {stock === 1 && (
          <div className="text-sm font-semibold text-orange-500 mt-1">¡Última disponible!</div>
        )}
      </div>

      {/* Quantity */}
      {stock > 0 && (
        <div className="flex items-center space-x-2 text-sm">
          <label htmlFor="cantidad" className="text-gray-700 font-medium">Cantidad:</label>
          <select
            id="cantidad"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          >
            {Array.from({ length: Math.min(stock, 10) }, (_, i) => i + 1).map(num => ( // Limit quantity dropdown for UX
              <option key={num} value={num}>{num} {num === 1 ? 'unidad' : 'unidades'}</option>
            ))}
          </select>
          <span className="text-xs text-gray-500">({stock} disponibles)</span>
        </div>
      )}

      {/* Action Buttons */}
      {stock > 0 && (
        <div className="space-y-2 pt-2">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 text-base transition-colors shadow-sm">Comprar ahora</button>
          <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-500 font-semibold rounded-md py-3 text-base transition-colors">Agregar al carrito</button>
        </div>
      )}

      {/* Info Sections */}
      <div className="space-y-3 pt-2 text-sm">
        <div className="flex items-start space-x-2 text-gray-600">
          <IconReturn />
          <p>
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">Devolución gratis.</span> Tenés 30 días desde que lo recibís.
          </p>
        </div>
        <div className="flex items-start space-x-2 text-gray-600">
          <IconShield />
          <p>
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">Compra Protegida</span>, recibí el producto que esperabas o te devolvemos tu dinero.
          </p>
        </div>
        <div className="flex items-start space-x-2 text-gray-600">
          <IconWarranty />
          <p>{warrantyInfo}. <a href="#" className="text-blue-500 hover:text-blue-600">Conocer más sobre garantía</a></p>
        </div>
      </div>

      {/* Payment Methods Link */}
      <div className="text-sm text-gray-600">
        <a href="#" className="text-blue-500 hover:text-blue-600">Ver medios de pago</a>
      </div>
    </div>
  );
};

export default BuyCard;