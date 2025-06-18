import React, { useState } from 'react';

const ProductGallery = ({ images, mainImage, setMainImage, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(
    images?.findIndex(img => img === mainImage) || 0
  );

  const openModal = (idx) => {
    setModalIndex(idx);
    setShowModal(true);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setModalIndex((modalIndex - 1 + images.length) % images.length);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setModalIndex((modalIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center gap-3 font-roboto">
      {/* Imagen principal */}
      <div className="flex items-center justify-center bg-white rounded-lg shadow-sm w-full max-w-[420px] h-auto md:min-h-[380px] md:max-h-[420px] border border-gray-200 p-4">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-auto max-w-[360px] max-h-[360px] object-contain rounded-lg cursor-zoom-in"
          onClick={() => images && images.length > 0 && openModal(images.findIndex(img => img === mainImage))}
        />
      </div>
      {/* Miniaturas horizontales scrollables */}
      <div className="flex flex-row gap-2 overflow-x-auto py-2 w-full max-w-[420px]">
        {images && images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumbnail-${idx}`}
            className={`w-14 h-14 object-contain rounded-md border-2 ${mainImage === img ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-400'} bg-white cursor-pointer transition-all flex-shrink-0`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
      {/* Modal de imagen */}
      {showModal && images && images.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="relative bg-white rounded-lg shadow-xl p-3 md:p-4" onClick={e => e.stopPropagation()}>
            <button className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-700 p-2 focus:outline-none" onClick={prevImage}>&lt;</button>
            <img src={images[modalIndex]} alt={title} className="max-w-[80vw] max-h-[80vh] object-contain rounded-md" />
            <button className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-700 p-2 focus:outline-none" onClick={nextImage}>&gt;</button>
            <button className="absolute top-1 right-1 md:top-2 md:right-2 text-2xl text-gray-600 hover:text-gray-800 p-2 focus:outline-none" onClick={() => setShowModal(false)}>×</button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
              {images && images.length > 0 ? `${modalIndex + 1} / ${images.length}` : ''}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;