import React from 'react';

const RelatedProducts = ({ products }) => (
  <div className="meli-relacionados">
    <h3>Productos relacionados</h3>
    <div className="meli-relacionados-list">
      {products.map(prod => (
        <div key={prod.id} className="meli-relacionado-card">
          <img src={prod.image} alt={prod.title} />
          <div>{prod.title}</div>
          <div>${prod.price.toLocaleString('es-CO')}</div>
        </div>
      ))}
    </div>
  </div>
);

export default RelatedProducts; 