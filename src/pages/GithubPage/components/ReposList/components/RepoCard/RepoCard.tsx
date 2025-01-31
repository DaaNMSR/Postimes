import React, { useState } from 'react';
import Button from '../../../../../../components/UI/Button/Button';
import { useActions } from '../../../../../../store/actions';
import { IRepo } from '../../../../../../models/models';
import { useAppSelector } from '../../../../../../store/store';
import { RepoCardBody } from './components/RepoCardBody';

export const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { addFavorite, removeFavorite } = useActions();
  const { favorites } = useAppSelector(state => state.github);
  const [isFavorite, setisFavorite] = useState(favorites.includes(repo.html_url));

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFavorite(repo.html_url);
    setisFavorite(true);
  };
  const removeFromFavorite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    removeFavorite(repo.html_url);
    setisFavorite(false);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <RepoCardBody repo={repo} />
      <div className="flex justify-end">
        {isFavorite ? (
          <Button
            onClick={removeFromFavorite}
            className="py-1 px-3 bg-red-500 text-white hover:shadow-md transition-all rounded-2xl mt-2 hover:bg-red-400 hover:text-gray-950"
          >
            Remove
          </Button>
        ) : (
          <Button
            onClick={addToFavorite}
            className="py-1 px-3 mr-4 bg-green-500 text-white hover:shadow-md transition-all rounded-2xl mt-2 hover:bg-green-400 hover:text-gray-950"
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};
