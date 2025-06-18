import React from 'react';

// Star Icon Component
const StarIcon = ({ filled, className }) => (
  <svg
    className={`w-4 h-4 ${className} ${filled ? 'text-blue-500' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ProductReviews = ({ opiniones = [], ratingStats = [0,0,0,0,0] }) => {
  const totalReviews = opiniones.length;
  const avgRating = totalReviews > 0
    ? (opiniones.reduce((acc, op) => acc + op.rating, 0) / totalReviews)
    : 0;

  // Ensure ratingStats is an array of 5, even if prop is incomplete
  const completeRatingStats = Array.isArray(ratingStats) && ratingStats.length === 5
    ? ratingStats
    : [0,0,0,0,0];


  return (
    <div className="font-roboto py-6 md:py-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Opiniones sobre el producto</h3>

      <div className="md:flex md:space-x-10 mb-8">
        {/* Left Column: Overall Summary */}
        <div className="md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          {totalReviews > 0 ? (
            <>
              <div className="text-5xl font-bold text-gray-700">{avgRating.toFixed(1)}</div>
              <div className="flex justify-center md:justify-start my-1.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} filled={i < Math.round(avgRating)} className="w-6 h-6" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Promedio entre {totalReviews} opiniones</div>
            </>
          ) : (
            <div className="text-gray-500">Aún no hay opiniones sobre este producto.</div>
          )}
        </div>

        {/* Right Column: Rating Distribution Bars */}
        {totalReviews > 0 && (
          <div className="md:w-2/3">
            {completeRatingStats.slice().reverse().map((percent, index) => {
              const starValue = 5 - index; 
              return (
                <div key={starValue} className="flex items-center space-x-2 mb-1">
                  <span className="text-sm text-gray-700 w-8">{starValue}</span>
                  <StarIcon filled className="text-blue-500 !w-3.5 !h-3.5" /> {/* Smaller star for bars */}
                  <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                    <div
                      className="bg-blue-400 h-1.5 rounded-full"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-10 text-right">{percent.toFixed(0)}%</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Individual Review Items */}
      <div className="space-y-4">
        {opiniones.slice(0, 3).map((opinion, index) => ( // Show first 3 reviews
          <div key={index} className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < opinion.rating} />
              ))}
            </div>
            <div className="flex items-center text-xs text-gray-500 mb-1.5">
              <span className="font-medium text-gray-700">{opinion.user}</span>
              {/* Placeholder for date - ML usually has "Hace X meses" */}
              <span className="mx-1.5">·</span>
              <span>Hace {index + 1} mes{index + 1 > 1 ? 'es' : ''}</span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{opinion.comment}</p>
          </div>
        ))}
      </div>

      {totalReviews > 3 && (
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline"
          >
            Ver todas las opiniones
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductReviews;