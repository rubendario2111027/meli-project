import React from 'react';

const ProductDescription = ({ description }) => (
  <div className="font-roboto py-6 md:py-8"> {/* Added padding to the container */}
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Descripción</h3>
    {/* HR removed for a cleaner look, relying on title's bottom margin */}
    <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
      {description}
    </p>
  </div>
);

export default ProductDescription;