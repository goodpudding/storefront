import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';

describe('Header', () => {
  it('renders the header with correct text', () => {
    render(<Header />);
    const headerText = screen.getByText('Our Store');
    expect(headerText).toBeInTheDocument();
  });

  it('renders the cart button', () => {
    render(<Header />);
    const cartButton = screen.getByRole('button', { name: 'Cart' });
    expect(cartButton).toBeInTheDocument();
  });

});
