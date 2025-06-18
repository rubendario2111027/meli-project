import React from 'react';

const ProductInfo = ({ product }) => (
  <div className="meli-main-info">
    <div className="meli-product-status">Nuevo <span className="meli-dot">|</span> +100 vendidos</div>
    <div className="meli-title">Apple iPhone 14 (128 GB) - Azul</div>
    <div className="meli-rating-row meli-info-block">
      <span className="meli-rating-value">4.8</span>
      <span className="meli-rating-stars">★★★★★</span>
      <span className="meli-rating-count">(201)</span>
      <button className="meli-fav-btn" title="Agregar a favoritos">♡</button>
    </div>
    <div className="meli-info-block meli-prices-block">
      <div className="meli-old-price">$ 3.999.000</div>
      <div className="meli-current-price">$ 2.699.900</div>
      <div className="meli-discount">32% OFF</div>
    </div>
    <div className="meli-info-block meli-cuotas-block">
      <div className="meli-cuotas">en 3 cuotas de <span className="meli-cuota-precio">$ 899.967</span> <span className="meli-cuota-interes">con 0% interés</span></div>
      <div className="meli-promo-link">15% OFF Banco Popular</div>
      <div className="meli-promo-link">Ver medios de pago y promociones</div>
    </div>
    <div className="meli-info-block meli-product-options">
      <div className="meli-product-option-label">Color: <b>Azul</b></div>
      <div className="meli-product-option-thumbs">
        <img src="/images/iphone14.webp" alt="Azul" className="meli-product-thumb selected" />
        <img src="/images/iphone14-1.webp" alt="Negro" className="meli-product-thumb" />
        <img src="/images/iphone14-2.webp" alt="Rojo" className="meli-product-thumb" />
        <img src="/images/iphone14-3.webp" alt="Verde" className="meli-product-thumb" />
      </div>
      <div className="meli-product-option-label">Memoria RAM: <b>6 GB</b></div>
      <div className="meli-product-option-buttons">
        <button className="meli-product-option-btn">4 GB</button>
        <button className="meli-product-option-btn selected">6 GB</button>
      </div>
    </div>
    <div className="meli-info-block meli-description">iPhone 14 nuevo, 128GB, color medianoche.</div>
    <div className="meli-info-block meli-characteristics">
      <b>Características:</b>
      <ul>
        <li>Memoria interna: 128 GB</li>
        <li>Pantalla: 6.1"</li>
        <li>Cámara: 12 Mpx</li>
        <li>Color: Azul</li>
        <li>Red: 5G</li>
      </ul>
    </div>
  </div>
);

export default ProductInfo; 