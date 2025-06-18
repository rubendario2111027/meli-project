import React from 'react';

const ProductReviews = ({ opiniones, ratingStats }) => (
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
);

export default ProductReviews; 