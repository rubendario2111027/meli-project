import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductReviews from './ProductReviews';

describe('ProductReviews', () => {
  it('muestra las opiniones y el promedio', () => {
    const opiniones = [
      { user: 'Juan', rating: 5, comment: 'Excelente producto' },
      { user: 'Ana', rating: 4, comment: 'Muy bueno' }
    ];
    const ratingStats = [0, 0, 0, 50, 50, 0];
    render(<ProductReviews opiniones={opiniones} ratingStats={ratingStats} />);
    expect(screen.getByText(/Opiniones sobre el producto/)).toBeInTheDocument();
    expect(screen.getByText(/Juan/)).toBeInTheDocument();
    expect(screen.getByText(/Excelente producto/)).toBeInTheDocument();
    expect(screen.getByText(/Ana/)).toBeInTheDocument();
    expect(screen.getByText(/Muy bueno/)).toBeInTheDocument();
  });

  it('muestra mensaje cuando no hay opiniones', () => {
    render(<ProductReviews opiniones={[]} ratingStats={[0,0,0,0,0,0]} />);
    expect(screen.getByText(/Aún no hay opiniones/)).toBeInTheDocument();
  });
}); 