import React from 'react';
import { FavoriteItem } from './components/FavoritesItem/FavoritesItem';

interface FavoritesTableProps {
  favorites: string[];
  onClick: (favorite: string) => void;
}

export const FavoritesTable: React.FC<FavoritesTableProps> = ({
  favorites,
  onClick,
}) => {
  return (
    <>
      <h3 className="my-4 text-[22px] text-center font-medium">My favorites</h3>
      <div className="flex justify-center relative">
        <ul className="list-none">
          {favorites.map((favorite, index) => (
            <FavoriteItem
              key={favorite}
              favorite={favorite}
              index={index}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
