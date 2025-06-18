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

  // Determine the maximum height for the thumbnail column, matching the main image's max height
  const mainImageMaxHeight = "420px"; // Corresponds to md:max-h-[420px]

  return (
    // Main container: column layout on small screens, row layout on medium screens and up
    <div className="flex flex-col md:flex-row items-center md:items-start gap-3 sm:gap-4 font-roboto">
      {/* Thumbnails container */}
      {/* Mobile: horizontal scroll below main image. Desktop: vertical scroll left of main image */}
      <div
        className="order-2 md:order-1 flex flex-row md:flex-col gap-2 md:space-y-2 md:gap-0 overflow-x-auto md:overflow-y-auto py-2 md:py-0 md:pr-2 w-full md:w-auto"
        style={{ maxHeight: `calc(${mainImageMaxHeight} - 2rem)` }} // 2rem accounts for potential padding in parent
      >
        {images && images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumbnail-${idx}`}
            className={`w-12 h-12 md:w-14 md:h-14 object-contain rounded-md border-2 ${mainImage === img ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-300'} bg-white cursor-pointer transition-all flex-shrink-0 md:flex-shrink`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>

      {/* Main image container */}
      {/* Mobile: full width. Desktop: flexible width to the right of thumbnails */}
      <div className="order-1 md:order-2 flex-1 flex items-center justify-center bg-white rounded-lg shadow-sm w-full md:w-auto h-auto md:min-h-[380px] md:max-h-[420px] border border-gray-200 p-4">
        <img
          src={mainImage}
          alt={title}
          className="w-full h-auto max-w-[360px] max-h-[360px] object-contain rounded-lg cursor-zoom-in"
          onClick={() => images && images.length > 0 && openModal(images.findIndex(img => img === mainImage))}
        />
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