import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import MeliHeader from '../MeliHeader'; // Adjusted path
import MeliFooter from '../MeliFooter'; // Adjusted path
import ProductGallery from '../ProductGalery/ProductGallery'; // Adjusted path
import ProductInfo from '../ProductInfo/ProductInfo'; // Adjusted path
import BuyCard from '../BuyCard/BuyCard'; // Adjusted path
import RelatedProducts from '../RelatedProducts/RelatedProducts'; // Adjusted path
import ProductFeatures from '../ProductFeatures/ProductFeatures'; // Adjusted path
import ProductDescription from '../ProductDescription/ProductDescription'; // Adjusted path
import ProductReviews from '../ProductReviews/ProductReviews'; // Adjusted path

// Static data previously in ProductPage.jsx, now part of ProductDetail.jsx
const relacionados = [
  { id: 'ML456', title: 'PlayStation 5', price: 3900000, image: '/images/ps5.webp', oldPrice: 4200000, installments: '36x $108.333', freeShipping: true },
  { id: 'ML789', title: 'Samsung Galaxy S23', price: 3200000, image: '/images/s23.webp', installments: '24x $133.333', freeShipping: true },
  { id: 'ML101', title: 'Xiaomi Redmi Note 12', price: 1200000, image: '/images/redmi.webp', oldPrice: 1350000, freeShipping: false }
];

const opiniones = [
  { user: 'Juan', rating: 5, comment: 'Excelente producto, llegó rápido y es original.' },
  { user: 'Ana', rating: 4, comment: 'Muy buen equipo, la batería dura bastante.' },
  { user: 'Pedro', rating: 5, comment: 'Me encantó, superó mis expectativas.' },
  { user: 'Laura', rating: 3, comment: 'Está bien, pero esperaba más de la cámara.' },
  { user: 'Carlos', rating: 4, comment: 'Buen producto, buena relación calidad-precio.'}
];

// Ensure ratingStats covers 1 to 5 stars; index 0 for 1 star, up to index 4 for 5 stars.
const getRatingStats = (currentOpiniones) => {
  const stats = [0, 0, 0, 0, 0]; // Index 0 = 1 star, Index 4 = 5 stars
  if (currentOpiniones.length === 0) return stats;

  currentOpiniones.forEach(op => {
    if (op.rating >= 1 && op.rating <= 5) {
      stats[op.rating - 1]++;
    }
  });
  return stats.map(count => Math.round((count / currentOpiniones.length) * 100));
};


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setMainImage(response.data.images?.[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching product data:", err);
        setError("No se pudo cargar el producto. Intente más tarde.");
        setLoading(false);
      });
  }, [id]);

  // Calculate ratingStats based on the 'opiniones' array
  // In a real app, 'opiniones' might also be fetched or be part of the 'product' object
  const ratingStats = getRatingStats(opiniones);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-xl text-gray-500">Cargando...</p>
      </div>
    );
  }

  if (error) {
     return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 text-center px-4">
        <p className="text-xl text-red-500">{error}</p>
        <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Volver al inicio
        </a>
      </div>
    );
  }

  if (!product) {
    // This case might be redundant if error handles non-product scenarios, but good for explicit "not found" if API returns 200 with no data
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-xl text-gray-500">Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <>
      <div className="bg-[#ffe600]">
        <MeliHeader />
      </div>

      <div className="flex justify-center bg-gray-50 py-8 min-h-screen">
        <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Columna 1: Galería de Imágenes */}
          <div className="lg:col-span-1">
            <ProductGallery
              images={product.images}
              mainImage={mainImage}
              setMainImage={setMainImage}
              title={product.title}
            />
          </div>

          {/* Columna 2: Información Principal del Producto */}
          <div className="lg:col-span-1">
            <ProductInfo product={product} />
          </div>

          {/* Columna 3: Tarjeta de Compra */}
          <div className="lg:col-span-1">
            <BuyCard product={product} />
          </div>

          {/* Secciones Adicionales (Descripción, Características, Opiniones, Relacionados) */}
          <div className="lg:col-span-3 mt-8 pt-6 border-t border-gray-200 space-y-8">
            {/* ProductDescription might need product.description */}
            <ProductDescription />
            {/* ProductFeatures might need product.features or similar */}
            <ProductFeatures />
            <ProductReviews opiniones={opiniones} ratingStats={ratingStats} />
            <RelatedProducts products={relacionados} />
          </div>
        </div>
      </div>

      <MeliFooter />
    </>
  );
};

export default ProductDetail;
