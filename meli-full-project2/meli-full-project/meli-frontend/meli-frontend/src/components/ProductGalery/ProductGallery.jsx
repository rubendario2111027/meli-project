import React, { useState } from 'react';

const MAX_THUMBNAILS = 6;

const ProductGallery = ({ images, mainImage, setMainImage, title }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(
    images?.findIndex(img => img === mainImage) || 0
  );

  const thumbnailsToShow = images?.slice(0, MAX_THUMBNAILS) || [];
  const extraCount = images?.length > MAX_THUMBNAILS ? images.length - MAX_THUMBNAILS : 0;

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
    <div className="flex flex-row gap-6 font-roboto">
      {/* Miniaturas verticales */}
      <div className="flex flex-col gap-2 items-center max-h-[420px] overflow-y-auto">
        {thumbnailsToShow.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumbnail-${idx}`}
            className={`w-14 h-14 object-contain rounded-lg border-2 ${mainImage === img ? 'border-[#3483fa]' : 'border-[#eee]'} bg-white cursor-pointer transition-all`}
            onClick={() => setMainImage(img)}
          />
        ))}
        {extraCount > 0 && (
          <div className="w-14 h-14 flex items-center justify-center bg-[#f5f5f5] text-[#888] font-bold rounded-lg text-lg">
            +{extraCount}
          </div>
        )}
      </div>
      {/* Imagen principal */}
      <div className="flex items-center justify-center bg-white rounded-xl shadow-md min-w-[380px] min-h-[380px] max-w-[420px] max-h-[420px] border border-[#eee]">
        <img
          src={mainImage}
          alt={title}
          className="w-[360px] h-[360px] object-contain rounded-xl cursor-zoom-in"
          onClick={() => openModal(images.findIndex(img => img === mainImage))}
        />
      </div>
      {/* Modal de imagen */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50" onClick={() => setShowModal(false)}>
          <div className="relative bg-white rounded-lg shadow-lg p-4" onClick={e => e.stopPropagation()}>
            <button className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-[#3483fa]" onClick={prevImage}>&lt;</button>
            <img src={images[modalIndex]} alt={title} className="w-[480px] h-[480px] object-contain rounded-lg" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-[#3483fa]" onClick={nextImage}>&gt;</button>
            <button className="absolute top-2 right-2 text-2xl text-[#888]" onClick={() => setShowModal(false)}>×</button>
            <div className="absolute bottom-2 right-4 text-[#666] text-sm bg-white bg-opacity-80 px-2 py-1 rounded">
              {modalIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery; 