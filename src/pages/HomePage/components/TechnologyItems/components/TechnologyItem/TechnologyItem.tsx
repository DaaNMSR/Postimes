import React from 'react';
import { Technology } from '../../../../../../models/models';

export interface TechnologyItemProps {
  technology: Technology;
  selectedTechnology?: Technology | null;
  handleSelectTechnology: (technology: Technology) => void;
}

export const TechnologyItem: React.FC<TechnologyItemProps> = ({
  technology,
  selectedTechnology,
  handleSelectTechnology,
}) => {
  return (
    <li
      className={`mt-3 mb-1 border w-[200px] rounded 
                  ${
                    selectedTechnology?.title === technology.title
                      ? 'text-white cursor-default bg-gray-400'
                      : 'text-black hover:opacity-70 cursor-pointer'
                  }`}
      onClick={() => handleSelectTechnology(technology)}
    >
      {technology.title}
    </li>
  );
};
