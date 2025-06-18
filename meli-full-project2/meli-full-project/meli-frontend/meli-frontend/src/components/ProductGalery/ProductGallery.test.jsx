import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductGallery from './ProductGallery';

describe('ProductGallery', () => {
  it('renderiza las miniaturas y la imagen principal', () => {
    const images = ['/img1.jpg', '/img2.jpg'];
    render(<ProductGallery images={images} mainImage={images[0]} setMainImage={() => {}} title="Test" />);
    expect(screen.getByAltText('thumbnail-0')).toBeInTheDocument();
    expect(screen.getByAltText('thumbnail-1')).toBeInTheDocument();
    expect(screen.getByAltText('Test')).toBeInTheDocument();
  });

  it('renderiza correctamente sin imágenes', () => {
    render(<ProductGallery images={[]} mainImage={null} setMainImage={() => {}} title="Sin imágenes" />);
    expect(screen.getByAltText('Sin imágenes')).toBeInTheDocument();
  });

  it('cambia la imagen principal al hacer clic en una miniatura', () => {
    const images = ['/img1.jpg', '/img2.jpg'];
    const setMainImage = jest.fn();
    render(<ProductGallery images={images} mainImage={images[0]} setMainImage={setMainImage} title="Test" />);
    fireEvent.click(screen.getByAltText('thumbnail-1'));
    expect(setMainImage).toHaveBeenCalledWith('/img2.jpg');
  });
}); 