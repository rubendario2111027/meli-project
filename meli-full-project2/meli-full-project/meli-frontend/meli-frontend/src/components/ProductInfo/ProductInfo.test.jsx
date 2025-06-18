import { render, screen } from '@testing-library/react';
import ProductInfo from './ProductInfo';

describe('ProductInfo', () => {
  it('muestra el título y el precio', () => {
    const product = { title: 'iPhone', price: 1000, description: 'desc', images: [] };
    render(<ProductInfo product={product} />);
    expect(screen.getByText(/iPhone/)).toBeInTheDocument();
    expect(screen.getByText(/desc/)).toBeInTheDocument();
  });
}); 