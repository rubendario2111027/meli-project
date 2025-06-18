import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDescription from './ProductDescription';

describe('ProductDescription', () => {
  it('muestra el título y el texto', () => {
    render(<ProductDescription />);
    expect(screen.getByText(/Descripción/)).toBeInTheDocument();
    expect(screen.getByText(/El iPhone 14 viene/)).toBeInTheDocument();
  });
}); 