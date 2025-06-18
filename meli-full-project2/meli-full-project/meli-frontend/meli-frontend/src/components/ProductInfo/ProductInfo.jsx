import React from 'react';

// Placeholder icons - in a real app, these would be imported components or a proper icon library
const IconMemory = () => <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 10h18M6 14h2m4 0h2m4 0h2M3 6h18v12H3z"></path></svg>;
const IconScreen = () => <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5.5 15.5h13a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1Z"></path><path d="M12 15.5V19"></path><path d="M9 19h6"></path></svg>;
const IconCamera = () => <svg className="w-5 h-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M20.5 8.5L18 11l2.5 2.5"></path><path d="M15.5 6.5L18 4l2.5 2.5"></path><path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"></path><path d="M15 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path></svg>;
const IconNetwork = () => <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0"></path></svg>;
const IconColor = () => <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zm0-3a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>;


const ProductInfo = ({ product }) => {
  // Using hardcoded data as in the original, but ideally this comes from `product` prop
  const productData = {
    status: "Nuevo",
    soldCount: "+1000 vendidos",
    title: product?.title || "Apple iPhone 14 (128 GB) - Azul",
    ratingValue: "4.8",
    ratingStars: "★★★★★", // This could be generated from ratingValue
    ratingCount: "201",
    oldPrice: "$ 3.999.000",
    currentPrice: product?.price ? `$ ${product.price.toLocaleString('es-CO')}` : "$ 2.699.900",
    discount: "32% OFF",
    installments: "en 3 cuotas de $ 899.967",
    interestInfo: "con 0% interés",
    promoLink1: "15% OFF Banco Popular",
    promoLink2: "Ver medios de pago y promociones",
    selectedColor: "Azul",
    colors: [
      { name: "Azul", img: "/images/iphone14.webp" },
      { name: "Negro", img: "/images/iphone14-1.webp" },
      { name: "Rojo", img: "/images/iphone14-2.webp" },
      { name: "Verde", img: "/images/iphone14-3.webp" },
    ],
    selectedMemory: "6 GB",
    memoryOptions: ["4 GB", "6 GB"],
    mainFeatures: product?.features || [
      { icon: <IconMemory />, text: "Memoria interna: 128 GB" },
      { icon: <IconScreen />, text: "Pantalla: 6.1\"" },
      { icon: <IconCamera />, text: "Cámara: 12 Mpx" },
      { icon: <IconColor />, text: "Color: Azul" }, // Using a generic color icon
      { icon: <IconNetwork />, text: "Red: 5G" },
    ],
    description: product?.description || "iPhone 14 nuevo, 128GB, color medianoche.",
  };

  return (
    <div className="font-roboto text-gray-800 space-y-4 py-4">
      {/* Status and Sold Count */}
      <div className="text-xs text-gray-500">
        {productData.status} <span className="mx-1">|</span> {productData.soldCount}
      </div>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
        {productData.title}
      </h1>

      {/* Rating */}
      <div className="flex items-center space-x-1 text-sm">
        <span className="text-blue-500 font-semibold">{productData.ratingValue}</span>
        <span className="text-blue-500">{productData.ratingStars}</span>
        <span className="text-gray-500">({productData.ratingCount})</span>
        {/* Favorite button can be added here if needed */}
      </div>

      {/* Price */}
      <div>
        {productData.oldPrice && (
          <div className="text-sm text-gray-500 line-through">{productData.oldPrice}</div>
        )}
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl sm:text-3xl font-medium text-gray-900">{productData.currentPrice}</span>
          {productData.discount && (
            <span className="text-base sm:text-lg text-green-500 font-semibold">{productData.discount}</span>
          )}
        </div>
        <div className="text-sm sm:text-base text-gray-700 mt-1">
          {productData.installments} <span className="text-green-500">{productData.interestInfo}</span>
        </div>
        <div className="text-sm text-blue-500 hover:text-blue-600 cursor-pointer mt-1">{productData.promoLink1}</div>
        <div className="text-sm text-blue-500 hover:text-blue-600 cursor-pointer mt-1">{productData.promoLink2}</div>
      </div>

      {/* Product Options (e.g., Color) */}
      <div className="space-y-3 pt-2">
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Color: <span className="font-normal">{productData.selectedColor}</span></div>
          <div className="flex flex-wrap gap-2"> {/* Added flex-wrap and gap-2 instead of space-x-2 for better wrapping */}
            {productData.colors.map(color => (
              <button key={color.name} title={color.name} className={`w-10 h-10 rounded-full border-2 ${productData.selectedColor === color.name ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-300'} focus:outline-none`}>
                <img src={color.img} alt={color.name} className="w-full h-full object-cover rounded-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Options (e.g., Memory) */}
        <div>
          <div className="text-sm font-medium text-gray-700 mb-1">Memoria RAM: <span className="font-normal">{productData.selectedMemory}</span></div>
          <div className="flex flex-wrap gap-2"> {/* Added flex-wrap and gap-2 */}
            {productData.memoryOptions.map(mem => (
              <button
                key={mem}
                className={`px-4 py-2 border rounded-md text-sm font-medium ${productData.selectedMemory === mem ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
              >
                {mem}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Features */}
      <div className="pt-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">Características principales</h2>
        <div className="space-y-2">
          {productData.mainFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3 text-sm text-gray-700">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5">{feature.icon}</span>
              <span>{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Short Description (Optional, if needed) */}
      {/* <p className="text-sm text-gray-600 pt-2">{productData.description}</p> */}

    </div>
  );
};

export default ProductInfo;