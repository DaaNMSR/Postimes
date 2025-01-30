import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FavoritesPage } from './FavoritesPage';
import { configureStore } from '@reduxjs/toolkit';
import { githubReducer } from '../../store/slices/github.slice';

const renderFavoritesPage = (initialState: { github: { favorites: string[] } }) => {
  const testStore = configureStore({
    reducer: {
      github: githubReducer,
    },
    preloadedState: initialState,
  });
  return render(
    <Provider store={testStore}>
      <FavoritesPage />
    </Provider>,
  );
};

const favorites = [
  'https://github.com/DaaNMSR/SINDFIS.fy',
  'https://github.com/DaaNMSR/aksimym.ru',
  'https://github.com/DaaNMSR/Postimes',
];

describe('FavoritesPage component', () => {
  it('renders FavoritesPage', () => {
    renderFavoritesPage({ github: { favorites: [] } });
    const link = screen.getByText('To Github search...');
    const title = screen.getByText('No favorites.');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/githubsearch');
    expect(title).toBeInTheDocument();
  });
  it('display items when we have favorites, and does not display link and titleNoFavorites', () => {
    renderFavoritesPage({ github: { favorites } });
    const link = screen.queryByText('To Github search...');
    const titleNoFavorites = screen.queryByText('No favorites.');
    const titleMyFavorites = screen.getByText('My favorites');
    const listItems = screen.queryAllByRole('listitem');

    expect(titleNoFavorites).not.toBeInTheDocument();
    expect(link).not.toBeInTheDocument();
    expect(titleMyFavorites).toBeInTheDocument();
    expect(listItems).toHaveLength(favorites.length);
  });

  it('removes favorite items', () => {
    renderFavoritesPage({ github: { favorites } });
    const listItems = screen.queryAllByRole('listitem');
    const removeButton = screen.queryAllByRole('button');

    expect(listItems).toHaveLength(favorites.length);
    expect(removeButton).toHaveLength(favorites.length);
    // Remove first element
    fireEvent.click(removeButton[0]);
    const updatedListItems = screen.queryAllByRole('listitem');
    expect(updatedListItems).toHaveLength(favorites.length - 1);
    // Remove second element
    fireEvent.click(removeButton[1]);
    const updatedListItems2 = screen.queryAllByRole('listitem');
    expect(updatedListItems2).toHaveLength(favorites.length - 2);
    // Remove last element
    fireEvent.click(removeButton[favorites.length - 1]);
    const updatedListItems3 = screen.queryAllByRole('listitem');
    expect(updatedListItems3).toHaveLength(0);
  });
});
