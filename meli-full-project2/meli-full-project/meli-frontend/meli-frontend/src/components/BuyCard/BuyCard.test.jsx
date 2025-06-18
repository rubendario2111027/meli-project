import React from 'react';
import { render, screen } from '@testing-library/react';
import BuyCard from './BuyCard';

describe('BuyCard', () => {
  it('muestra el stock y los botones', () => {
    const product = { stock: 5, seller: { name: 'Tienda' }, payment_methods: [] };
    render(<BuyCard product={product} />);
    expect(screen.getByText(/Stock disponible/)).toBeInTheDocument();
    expect(screen.getByText(/Comprar ahora/)).toBeInTheDocument();
    expect(screen.getByText(/Agregar al carrito/)).toBeInTheDocument();
  });
}); 