import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FavoritesPage } from './FavoritesPage';
import { configureStore } from '@reduxjs/toolkit';
import { githubReducer } from '../../store/slices/github.slice';

const getElements = () => {
  const linkElement = screen.queryByRole('link', {
    name: 'To Github search...',
  }) as HTMLLinkElement;
  const paragraphEmptyFavorites = screen.queryByText(
    'No favourites.',
  ) as HTMLParagraphElement;
  const paragraphHasFavorites = screen.queryByText(
    'My favorites',
  ) as HTMLParagraphElement;
  const listItems = screen.queryAllByRole('listitem');
  const removeButton = screen.queryAllByRole('button');
  return {
    linkElement,
    paragraphEmptyFavorites,
    paragraphHasFavorites,
    listItems,
    removeButton,
  };
};

const renderWithStore = (initialState: { github: { favorites: string[] } }) => {
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

describe('FavoritesPage component', () => {
  it('renders FavoritesPage', () => {
    renderWithStore({ github: { favorites: [] } });

    const { linkElement, paragraphEmptyFavorites } = getElements();

    expect(paragraphEmptyFavorites).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/githubsearch');
  });

  it('display items when we have favorites, and does not display link and - No favorites', () => {
    const favorites = [
      'https://github.com/DaaNMSR/SINDFIS.fy',
      'https://github.com/DaaNMSR/aksimym.ru',
    ];
    renderWithStore({ github: { favorites } });

    const {
      linkElement,
      paragraphEmptyFavorites,
      paragraphHasFavorites,
      listItems,
    } = getElements();

    expect(paragraphEmptyFavorites).not.toBeInTheDocument();
    expect(linkElement).not.toBeInTheDocument();
    expect(paragraphHasFavorites).toBeInTheDocument();
    expect(listItems).toHaveLength(favorites.length);
  });

  it('removes favorite item, then remove all items by clicked removeButton', () => {
    const favorites = [
      'https://github.com/DaaNMSR/SINDFIS.fy',
      'https://github.com/DaaNMSR/aksimym.ru',
    ];
    renderWithStore({ github: { favorites } });

    const { listItems, removeButton } = getElements();

    expect(listItems).toHaveLength(favorites.length);
    expect(removeButton).toHaveLength(favorites.length);

    fireEvent.click(removeButton[0]);
    const updatedListItems = screen.queryAllByRole('listitem');
    expect(updatedListItems).toHaveLength(favorites.length - 1);

    fireEvent.click(removeButton[1]);
    const updatedListItems2 = screen.queryAllByRole('listitem');
    expect(updatedListItems2).toHaveLength(0);
  });
});
