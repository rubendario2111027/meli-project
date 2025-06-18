import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductFeatures from './ProductFeatures';

describe('ProductFeatures', () => {
  it('muestra el título y algunas características', () => {
    render(<ProductFeatures />);
    expect(screen.getByText(/Características del producto/)).toBeInTheDocument();
    expect(screen.getByText(/Tamaño de la pantalla/)).toBeInTheDocument();
    expect(screen.getByText(/Memoria interna/)).toBeInTheDocument();
  });
}); 