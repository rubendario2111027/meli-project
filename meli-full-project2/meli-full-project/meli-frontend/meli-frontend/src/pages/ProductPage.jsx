import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/ProductGalery/ProductGallery';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import BuyCard from '../components/BuyCard/BuyCard';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import ProductFeatures from '../components/ProductFeatures/ProductFeatures';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import ProductReviews from '../components/ProductReviews/ProductReviews';
import axios from 'axios';
import MeliHeader from '../components/MeliHeader';
import MeliFooter from '../components/MeliFooter';

const relacionados = [
  { id: 'ML456', title: 'PlayStation 5', price: 3900000, image: '/images/ps5.webp' },
  { id: 'ML789', title: 'Samsung Galaxy S23', price: 3200000, image: '/images/s23.webp' },
  { id: 'ML101', title: 'Xiaomi Redmi Note 12', price: 1200000, image: '/images/redmi.webp' }
];

const opiniones = [
  { user: 'Juan', rating: 5, comment: 'Excelente producto, llegó rápido y es original.' },
  { user: 'Ana', rating: 4, comment: 'Muy buen equipo, la batería dura bastante.' },
  { user: 'Pedro', rating: 5, comment: 'Me encantó, superó mis expectativas.' },
  { user: 'Laura', rating: 3, comment: 'Está bien, pero esperaba más de la cámara.' }
];

const getRatingStats = (opiniones) => {
  const total = opiniones.length;
  const counts = [0, 0, 0, 0, 0, 0];
  opiniones.forEach(op => counts[op.rating]++);
  return counts.map(c => total ? Math.round((c / total) * 100) : 0);
};

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setMainImage(response.data.images?.[0]);
      })
      .catch(error => console.error(error));
  }, [id]);

  const ratingStats = getRatingStats(opiniones);

  if (!product) return <p>Cargando...</p>;

  return (
    <>
      {/* Header Mercado Libre */}
      <div className="bg-[#ffe600]">
        <MeliHeader />
      </div>
      {/* Fondo general */}
      <div className="flex justify-center bg-gray-50 py-8 min-h-screen">
        <div className="meli-detail-layout bg-white rounded-lg shadow-md p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Galería de imágenes */}
          <div className="lg:col-span-1">
            <ProductGallery images={product.images} mainImage={mainImage} setMainImage={setMainImage} title={product.title} />
          </div>
          {/* Info del producto */}
          <div className="lg:col-span-1"> {/* Adjust based on actual ProductInfo width needs, might be lg:col-span-2 with BuyBox if gallery is narrow */}
            <ProductInfo product={product} />
          </div>
          {/* Panel de compra */}
          <div className="lg:col-span-1">
            <BuyCard product={product} />
          </div>

          {/* Secciones Adicionales - ahora dentro del contenedor blanco */}
          <div className="lg:col-span-3 mt-8 pt-6 border-t border-gray-200 space-y-8">
            {/* RelatedProducts ya tiene su propio padding py-6/py-8, así que no necesita más aquí */}
            <RelatedProducts products={relacionados} />

            {/* ProductFeatures, ProductDescription, ProductReviews también tienen su propio py-6/py-8 */}
            <ProductFeatures />
            <ProductDescription />
            <ProductReviews opiniones={opiniones} ratingStats={ratingStats} />
          </div>
        </div>
      </div>
      {/* Footer Mercado Libre */}
      <MeliFooter />
    </>
  );
};

export default ProductPage;
