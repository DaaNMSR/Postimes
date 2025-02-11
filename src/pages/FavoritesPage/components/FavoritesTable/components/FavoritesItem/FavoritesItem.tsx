import React from 'react';
import Button from '../../../../../../components/UI/Button/Button';

interface FavoriteItemProps {
  favorite: string;
  index: number;
  onClick: (favorite: string) => void;
}

export const FavoriteItem: React.FC<FavoriteItemProps> = ({ favorite, index, onClick }) => {
  return (
    <li key={favorite} className="relative py-2 px-4 transition-colors border-2 border-gray-700 mb-2">
      <span className="font-bold mr-2">{index + 1}.</span>
      <a
        href={favorite}
        target="_blank"
        rel="noreferrer"
        className="hover:cursor-pointer hover:text-gray-500"
      >
        {favorite}
      </a>
      <Button
        onClick={() => onClick(favorite)}
        className="absolute top-[-3px] right-[2px] text-gray-500 text-[12px] hover:text-red-600"
      >
        ✕
      </Button>
    </li>
  );
};
