import React, { useState, useEffect } from 'react';

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
  const counts = [0, 0, 0, 0, 0, 0]; // 0 no se usa, 1-5 estrellas
  opiniones.forEach(op => counts[op.rating]++);
  return counts.map(c => total ? Math.round((c / total) * 100) : 0);
};

const ProductDetail = ({ product }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  const ratingStats = getRatingStats(opiniones);

  if (!product) return <p>Cargando...</p>;

  return (
    <>
      <div className="meli-detail-layout">
        {/* Columna izquierda: galería */}
        <div className="meli-gallery">
          <img src={mainImage} alt={product.title} className="meli-main-image" />
          <div className="meli-thumbnails">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumbnail-${idx}`}
                className="meli-thumbnail"
                onClick={() => setMainImage(img)}
                style={{ border: mainImage === img ? '2px solid #3483fa' : undefined }}
              />
            ))}
          </div>
        </div>
        {/* Columna central: info principal */}
        <div className="meli-main-info">
          <div className="meli-title">{product.title}</div>
          <div className="meli-price">${product.price.toLocaleString('es-CO')}</div>
          <div className="meli-description">{product.description}</div>
          <div className="meli-characteristics">
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
        {/* Columna derecha: compra y vendedor */}
        <div className="meli-buy-card">
          <div className="meli-stock">Stock disponible: {product.stock}</div>
          <button className="meli-buy-btn">Comprar ahora</button>
          <button className="meli-cart-btn">Agregar al carrito</button>
          <div className="meli-seller">
            <b>Vendedor:</b> {product.seller?.name} <br />
            Reputación: {product.seller?.reputation}
          </div>
          <div className="meli-payment">
            <b>Métodos de pago:</b>
            <ul>
              {product.payment_methods?.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </div>
          <div className="meli-garantia">
            <b>Garantía:</b> 12 meses de fábrica
          </div>
          <div className="meli-envio">
            <b>Envío gratis</b> a todo el país
          </div>
        </div>
      </div>
      {/* Productos relacionados */}
      <div className="meli-relacionados">
        <h3>Productos relacionados</h3>
        <div className="meli-relacionados-list">
          {relacionados.map(prod => (
            <div key={prod.id} className="meli-relacionado-card">
              <img src={prod.image} alt={prod.title} />
              <div>{prod.title}</div>
              <div>${prod.price.toLocaleString('es-CO')}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Características técnicas y descripción extendida */}
      <div className="meli-caracteristicas">
        <h3>Características del producto</h3>
        <ul>
          <li>Memoria interna: 128 GB</li>
          <li>Pantalla: 6.1"</li>
          <li>Cámara: 12 Mpx</li>
          <li>Color: Azul</li>
          <li>Red: 5G</li>
        </ul>
      </div>
      <div className="meli-descripcion">
        <h3>Descripción</h3>
        <p>
          El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone 14, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas. Batería para todo el día y hasta 26 horas de reproducción de vídeo. Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria.
        </p>
      </div>
      {/* Opiniones y barra de progreso al final */}
      <div className="meli-opiniones">
        <h3>Opiniones del producto</h3>
        <div className="meli-rating-bars">
          {[5,4,3,2,1].map(star => (
            <div key={star} className="meli-rating-bar-row">
              <span className="meli-rating-star">{'★'.repeat(star)}</span>
              <div className="meli-rating-bar">
                <div className="meli-rating-bar-fill" style={{width: ratingStats[star] + '%'}}></div>
              </div>
              <span className="meli-rating-percent">{ratingStats[star]}%</span>
            </div>
          ))}
        </div>
        <div className="meli-opinion-list">
          {opiniones.map((op, i) => (
            <div key={i} className="meli-opinion-item">
              <span className="meli-opinion-user">{op.user}:</span>
              <span className="meli-opinion-rating">{'★'.repeat(op.rating)}</span>
              <span className="meli-opinion-comment">{op.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
