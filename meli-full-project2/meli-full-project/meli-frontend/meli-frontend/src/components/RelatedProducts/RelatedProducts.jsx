import React from 'react';

const RelatedProducts = ({ products = [] }) => {
  // Placeholder data if products prop is empty, for styling purposes
  const displayProducts = products.length > 0 ? products : [
    { id: 'placeholder1', title: 'Producto Ejemplo 1 Muy Largo Para Probar El Truncamiento De Texto', image: 'https://via.placeholder.com/150', price: 120000, oldPrice: 150000, installments: '12x $10.000', freeShipping: true },
    { id: 'placeholder2', title: 'Producto Ejemplo 2', image: 'https://via.placeholder.com/150', price: 85000, freeShipping: false },
    { id: 'placeholder3', title: 'Producto Ejemplo 3 Con Envío Gratis', image: 'https://via.placeholder.com/150', price: 230000, installments: '6x $38.333', freeShipping: true },
    { id: 'placeholder4', title: 'Producto Ejemplo 4', image: 'https://via.placeholder.com/150', price: 99900, oldPrice: 110000 },
    { id: 'placeholder5', title: 'Producto Ejemplo 5', image: 'https://via.placeholder.com/150', price: 50000, freeShipping: true },
  ];

  if (displayProducts.length === 0) {
    return null; 
  }

  return (
    <div className="font-roboto py-6 md:py-8">
      <h3 className="text-xl font-semibold text-gray-700 mb-4 px-1">Productos relacionados</h3>
      <div className="flex overflow-x-auto space-x-3 sm:space-x-4 pb-4 pt-2 px-1"> {/* Added horizontal padding for cards near edges */}
        {displayProducts.map(product => (
          <a
            key={product.id}
            href={`/product/${product.id}`} // Assuming a product page route
            className="group flex-shrink-0 w-40 sm:w-48 bg-white border border-gray-200 rounded-lg shadow-sm transition-all duration-200 hover:shadow-lg overflow-hidden flex flex-col"
          >
            <div className="h-36 sm:h-40 flex items-center justify-center p-2 border-b border-gray-200 bg-white">
              <img
                src={product.image}
                alt={product.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-2.5 sm:p-3 flex flex-col flex-grow space-y-1">
              {product.oldPrice && (
                <div className="text-xs text-gray-400 line-through">
                  ${(product.oldPrice).toLocaleString('es-CO')}
                </div>
              )}
              <div className="flex items-baseline">
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  ${(product.price).toLocaleString('es-CO')}
                </span>
                {product.oldPrice && product.price < product.oldPrice && (
                  <span className="text-xs text-green-600 font-semibold ml-1.5">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </span>
                )}
              </div>
              {product.installments && (
                <div className="text-xs text-gray-600">{product.installments}</div>
              )}
               {product.freeShipping && (
                <div className="text-xs text-green-500 font-semibold mt-0.5">Envío gratis</div>
              )}
              {/* Title pushes to the bottom if not enough content above due to parent's flex-grow and its own mt-1 */}
              <h4 className="text-xs sm:text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-150 h-8 sm:h-10 line-clamp-2 leading-tight mt-1">
                {product.title}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;