import React from 'react';
import { Link } from 'react-router-dom';

export const HomePageNavigation = () => {
  return (
    <>
      <p className="text-center font-bold text-xl mt-8 text-blue-400 mb-2">
        Find something interesting for you here:
      </p>
      <div className="grid justify-center font-mono cursor:pointer text-lg">
        <Link to="/todo" rel="noopener noreferrer" className="hover:text-blue-700">
          <span className="font-bold">1.</span> Add notes
        </Link>
        <Link to="/githubsearch" rel="noopener noreferrer" className="hover:text-blue-700">
          <span className="font-bold">2.</span> Search repositories and users on github
        </Link>
        <Link to="/favorites" rel="noopener noreferrer" className="hover:text-blue-700">
          <span className="font-bold">3.</span> Add repositories to favorites
        </Link>
        <Link to="/rickandmorty" rel="noopener noreferrer" className="hover:text-blue-700">
          <span className="font-bold">4.</span> Search for characters from `rick and morty`
        </Link>
      </div>
    </>
  );
};
