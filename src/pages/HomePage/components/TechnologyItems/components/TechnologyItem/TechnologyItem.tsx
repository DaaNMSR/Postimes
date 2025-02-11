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
  const isSelected = selectedTechnology?.title === technology.title;
  return (
    <li
      className={`p-5 mt-3 mb-1 border w-[50%] rounded text-[15px] transition-all 
                  ${
                    isSelected
                      ? 'text-white cursor-default bg-gray-400'
                      : 'text-black hover:opacity-70 cursor-pointer'
                  }`}
      onClick={() => handleSelectTechnology(technology)}
    >
      {technology.title}
    </li>
  );
};
