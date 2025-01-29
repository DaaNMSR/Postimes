import React from 'react';

export const NoFavorites = () => {
  return (
    <div className="grid place-items-center">
      <p className="text-2xl my-4">No favorites.</p>
      <a
        href="/githubsearch"
        className="p-4 hover:bg-gray-400 hover:text-white border-2 border-gray-700"
      >
        To Github search...
      </a>
    </div>
  );
};
