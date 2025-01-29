import React from 'react';
import { useActions } from '../../hooks/actions';
import { FavoritesTable } from './components/FavoritesTable/FavoritesTable';
import { NoFavorites } from './components/NoFavorites/NoFavorites';
import { useAppSelector } from '../../store/store';

export const FavoritesPage = () => {
  const { favorites } = useAppSelector(state => state.github);
  const { removeFavorite } = useActions();
  const removeFromFavorites = (favorite: string): void => {
    removeFavorite(favorite);
  };

  if (favorites.length === 0) {
    return <NoFavorites />;
  }

  return <FavoritesTable favorites={favorites} onClick={removeFromFavorites} />;
};
