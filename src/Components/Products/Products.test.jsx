import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './index';
import '@testing-library/jest-dom';


describe('Product', () => {
  const product = {
    name: 'Dry Food',
    description: '5 lbs of dry food',
    price: '$24.99',
    inventory: 50,
    image: 'path/to/image',
  };

  it('renders product information correctly', () => {
    render(<Product product={product} />);

    const productName = screen.getByText('Dry Food');
    const productDescription = screen.getByText('5 lbs of dry food');
    const productPrice = screen.getByText('Price: $24.99');
    const productInventory = screen.getByText('Inventory: 50');

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productInventory).toBeInTheDocument();
  });

  it('displays the product image', () => {
    render(<Product product={product} />);

    const productImage = screen.getByRole('img', { name: 'Dry Food' });

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'path/to/image');
    expect(productImage).toHaveAttribute('alt', 'Dry Food');
  });
});
