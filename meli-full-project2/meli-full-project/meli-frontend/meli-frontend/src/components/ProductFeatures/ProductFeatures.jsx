import React from 'react';

const features = [
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M17 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Zm0 18H7V4h10v16Z"/></svg>
      </span>
    ),
    label: 'Tamaño de la pantalla',
    value: '6.1 "',
    sub: '(14.67 cm x 7.15 cm x 7.8 mm)',
    bar: true
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M17 6V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h18V6h-4Zm-8 0V4h8v2H9Zm10 4H5v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10Zm-2 8H7v-2h10v2Zm0-4H7v-2h10v2Z"/></svg>
      </span>
    ),
    label: 'Memoria interna',
    value: '128 GB'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7-8h-2.586l-1.707-1.707A1 1 0 0 0 14.586 4H9.414a1 1 0 0 0-.707.293L7 5.586H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-7 10a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/></svg>
      </span>
    ),
    label: 'Cámara trasera principal',
    value: '12 Mpx'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm7-8h-2.586l-1.707-1.707A1 1 0 0 0 14.586 4H9.414a1 1 0 0 0-.707.293L7 5.586H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1Zm-7 10a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"/></svg>
      </span>
    ),
    label: 'Cámara frontal principal',
    value: '12 Mpx'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M17 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10Zm0-2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Zm-5 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"/></svg>
      </span>
    ),
    label: 'Con NFC',
    value: 'Sí'
  },
  {
    icon: (
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f5f5] text-[#333] mr-3">
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#333" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm-1-7h2v2h-2v-2Zm0-6h2v4h-2V7Z"/></svg>
      </span>
    ),
    label: 'Desbloqueo',
    value: 'Reconocimiento facial'
  }
];

const ProductFeatures = () => (
  <div className="meli-caracteristicas">
    <h3 className="text-[1.5rem] font-bold text-[#333] mb-2 font-roboto">Características del producto</h3>
    <hr className="border-t border-[#ededed] mb-6" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
      {/* Pantalla con barra */}
      <div className="flex items-start gap-3 col-span-2">
        {features[0].icon}
        <div className="flex-1">
          <div className="text-base text-[#333] font-medium">
            Tamaño de la pantalla: <b>6.1 "</b>
          </div>
          <div className="text-sm text-[#888]">(14.67 cm x 7.15 cm x 7.8 mm)</div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-[#888]">PEQUEÑO</span>
            <div className="flex-1 h-2 rounded bg-gray-200 mx-2 relative" style={{maxWidth: 180}}>
              <div className="absolute left-0 top-0 h-2 rounded bg-blue-500" style={{width: '40%'}}></div>
            </div>
            <span className="text-xs text-[#888]">GRANDE</span>
          </div>
        </div>
      </div>
      {/* Resto de características */}
      {features.slice(1).map((f, i) => (
        <div className="flex items-center gap-3" key={i}>
          {f.icon}
          <div>
            <div className="text-base text-[#333] font-medium">{f.label}: <b>{f.value}</b></div>
          </div>
        </div>
      ))}
    </div>
    <a href="#" className="block mt-6 text-[#3483fa] text-sm font-medium hover:underline flex items-center gap-1">
      Ver todas las características
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#3483fa" d="M10 17l5-5-5-5v10z"/></svg>
    </a>
  </div>
);

export default ProductFeatures; 