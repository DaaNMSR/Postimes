import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoritesTable } from './FavoritesTable';

const mockFavorites = [
  'https://github.com/DaaNMSR/SINDFIS-project',
  'https://github.com/DaaNMSR/Postimes',
  'https://github.com/DaaNMSR/aksimym.ru',
  'https://github.com/DaaNMSR/SINDFIS',
];
const mockOnClick = jest.fn();

describe('FavoritesTable', () => {
  it('renders FavoritesTable', () => {
    render(<FavoritesTable favorites={mockFavorites} onClick={mockOnClick} />);
    expect(screen.getByText('My favorites')).toBeInTheDocument();
    mockFavorites.forEach(favorite => {
      expect(screen.getByText(favorite)).toBeInTheDocument();
    });
  });
});
