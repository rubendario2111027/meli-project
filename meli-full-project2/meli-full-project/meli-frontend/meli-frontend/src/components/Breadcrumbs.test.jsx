import React from 'react';
import { render, screen } from '@testing-library/react';
import Breadcrumbs from './Breadcrumbs';

describe('Breadcrumbs', () => {
  it('renderiza los items correctamente', () => {
    render(<Breadcrumbs items={[{label: 'Inicio', href: '/'}, {label: 'Producto'}]} />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Producto')).toBeInTheDocument();
  });
}); 