import React from 'react';
import { render, screen } from '@testing-library/react';
import RelatedProducts from './RelatedProducts';

describe('RelatedProducts', () => {
  it('muestra los productos relacionados', () => {
    const products = [
      { id: '1', title: 'Producto 1', price: 1000, image: '/img1.jpg' },
      { id: '2', title: 'Producto 2', price: 2000, image: '/img2.jpg' }
    ];
    render(<RelatedProducts products={products} />);
    expect(screen.getByText(/Productos relacionados/)).toBeInTheDocument();
    expect(screen.getByText(/Producto 1/)).toBeInTheDocument();
    expect(screen.getByText(/Producto 2/)).toBeInTheDocument();
  });

  it('muestra el texto de envío gratis si corresponde', () => {
    const products = [{ id: '1', title: 'Producto 1', price: 1000, image: '/img1.jpg', freeShipping: true }];
    render(<RelatedProducts products={products} />);
    expect(screen.getByText(/Envío gratis/)).toBeInTheDocument();
  });
}); 