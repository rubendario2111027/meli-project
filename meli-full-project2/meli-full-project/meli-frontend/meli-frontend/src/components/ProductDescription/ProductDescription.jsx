import React from 'react';

const ProductDescription = () => (
  <div className="font-roboto py-6 md:py-8"> {/* Added padding to the container */}
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Descripción</h3>
    {/* HR removed for a cleaner look, relying on title's bottom margin */}
    <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
      El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone 14, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.{"\n\n"}
      Batería para todo el día y hasta 26 horas de reproducción de vídeo. Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria.
    </p>
  </div>
);

export default ProductDescription;