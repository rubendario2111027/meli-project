import React from 'react';
import ProductGallery from '../ProductGalery/ProductGallery';
import ProductInfo from '../ProductInfo/ProductInfo';
import BuyCard from '../BuyCard/BuyCard';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import ProductFeatures from '../ProductFeatures/ProductFeatures';
import ProductDescription from '../ProductDescription/ProductDescription';
import ProductReviews from '../ProductReviews/ProductReviews';

// Simula datos de ejemplo
const relacionados = [
  { id: 'ML456', title: 'PlayStation 5', price: 3900000, image: '/images/ps5.webp' },
  { id: 'ML789', title: 'Samsung Galaxy S23', price: 3200000, image: '/images/s23.webp' },
  { id: 'ML101', title: 'Xiaomi Redmi Note 12', price: 1200000, image: '/images/redmi.webp' }
];

const product = {
  title: 'Apple iPhone 14 (128 GB) - Azul',
  price: 2699900,
  description: 'iPhone 14 nuevo, 128GB, color medianoche.',
  images: [
    '/images/iphone14.webp',
    '/images/iphone14-1.webp',
    '/images/iphone14-2.webp',
    '/images/iphone14-3.webp',
    '/images/iphone14-4.webp',
    '/images/iphone14-5.webp',
    '/images/iphone14-6.webp',
  ],
  features: [],
  reviews: [],
  stock: 12,
  seller: { name: 'iStore Colombia' },
  payment_methods: ['Mercado Pago', 'Tarjeta de crédito', 'PSE'],
};

const ProductPage = () => {
  return (
    <div className="flex justify-center bg-gray-50 py-10 min-h-screen">
      <div className="max-w-7xl w-full px-4">
        {/* Layout principal: galería, info, compra */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ProductGallery product={product} />
            <div className="mt-8">
              <ProductInfo product={product} />
            </div>
          </div>
          <div className="w-full md:w-80 sticky top-4 self-start">
            <BuyCard product={product} />
          </div>
        </div>
        {/* Secciones adicionales, todas dentro del mismo contenedor */}
        <div className="mt-12">
          <RelatedProducts products={relacionados} />
        </div>
        <div className="mt-8">
          <ProductFeatures features={product.features} />
        </div>
        <div className="mt-8">
          <ProductReviews reviews={product.reviews} />
        </div>
        <div className="mt-8">
          <ProductDescription description={product.description} />
        </div>
      </div>
    </div>
  );
};

export default ProductPage; 