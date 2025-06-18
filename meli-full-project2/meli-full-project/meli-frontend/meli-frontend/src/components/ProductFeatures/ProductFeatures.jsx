import React from 'react';

const featuresData = [
  {
    icon: (
      // Using a generic screen icon for simplicity, replace with actual SVG if available
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
    ),
    label: 'Tamaño de la pantalla',
    value: '6.1"', // Keep the double quote for inches
    sub: '(14.67 cm x 7.15 cm x 7.8 mm)',
    bar: true,
    barValue: '40%' // Example value for the bar
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16gbh16M4 12h16M4 8h16M4 4h16"></path></svg> // Generic data/memory icon
    ),
    label: 'Memoria interna',
    value: '128 GB'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    ),
    label: 'Cámara trasera principal',
    value: '12 Mpx'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
    ),
    label: 'Cámara frontal principal',
    value: '12 Mpx'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> // Generic NFC/Connectivity icon
    ),
    label: 'Con NFC',
    value: 'Sí'
  },
  {
    icon: (
      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg> // Generic unlock icon
    ),
    label: 'Desbloqueo',
    value: 'Reconocimiento facial'
  }
];


const ProductFeatures = () => (
  <div className="font-roboto py-6 md:py-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-5">Características del producto</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className={`flex items-start py-2 ${feature.bar ? 'md:col-span-2' : 'md:col-span-1'}`} // Tamaño de pantalla spans 2 cols on md+
        >
          <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-3">
            {feature.icon}
          </span>
          <div className="flex-1">
            <span className="text-sm text-gray-700">{feature.label}: </span>
            <span className="text-sm text-gray-900 font-medium">{feature.value}</span>
            {feature.sub && (
              <div className="text-xs text-gray-500 mt-0.5">{feature.sub}</div>
            )}
            {feature.bar && (
              <div className="flex items-center gap-2 mt-1.5">
                <span className="text-xs text-gray-500 uppercase">Pequeño</span>
                <div className="flex-1 h-1.5 rounded-full bg-gray-200 relative max-w-[200px]">
                  <div
                    className="absolute left-0 top-0 h-1.5 rounded-full bg-gray-600"
                    style={{ width: feature.barValue || '0%' }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 uppercase">Grande</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="mt-6 text-right"> {/* Aligns link to the right */}
      <a
        href="#"
        className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline"
      >
        Ver todas las características
        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  </div>
);

export default ProductFeatures;