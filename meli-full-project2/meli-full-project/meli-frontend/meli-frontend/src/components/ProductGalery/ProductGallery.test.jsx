import { render, screen } from '@testing-library/react';
import ProductGallery from './ProductGallery';

describe('ProductGallery', () => {
  it('renderiza las miniaturas y la imagen principal', () => {
    const images = ['/img1.jpg', '/img2.jpg'];
    render(<ProductGallery images={images} mainImage={images[0]} setMainImage={() => {}} title="Test" />);
    expect(screen.getByAltText('thumbnail-0')).toBeInTheDocument();
    expect(screen.getByAltText('thumbnail-1')).toBeInTheDocument();
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });
}); 