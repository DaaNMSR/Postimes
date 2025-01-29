import React from 'react';
import { Technology } from '../../../../models/models';
import { TechnologyItem } from './components/TechnologyItem/TechnologyItem';

export interface TechnologyItemsProps {
  technologies: Technology[];
  selectedTechnology?: Technology | null;
  handleSelectTechnology: (technology: Technology) => void;
}

export const TechnologyItems: React.FC<TechnologyItemsProps> = ({
  technologies,
  selectedTechnology,
  handleSelectTechnology,
}) => {
  return (
    <ul className="flex flex-col items-center mt-4">
      {technologies.map(technology => (
        <TechnologyItem
          key={technology.title}
          selectedTechnology={selectedTechnology}
          handleSelectTechnology={handleSelectTechnology}
          technology={technology}
        />
      ))}
    </ul>
  );
};
