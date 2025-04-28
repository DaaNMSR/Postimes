import React from 'react';
import { Link } from 'react-router-dom';

interface HomePageNavigationProps {
  fn: () => void;
}

export const HomePageNavigation: React.FC<HomePageNavigationProps> = ({ fn }) => {
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
      <div className="flex justify-center mt-8">
        <button
          onClick={fn}
          className="text-[16px] text-center font-medium mt-6 rounded-xl bg-slate-100 hover:bg-slate-200 p-1 transition-all"
        >
          <span className="text-gray-500">Learn more about </span>
          Technologies
        </button>
      </div>
    </>
  );
};
