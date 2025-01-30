import React from 'react';
import { Technology } from '../../models/models';
import { RootState, useAppSelector } from '../../store/store';
import { useActions } from '../../store/actions';
import { technologies } from './const';
import { TechnologyDescription } from './components/TechnologyDescription/TechnologyDescription';
import { TechnologyItems } from './components/TechnologyItems/TechnologyItems';

export const HomePage: React.FC = () => {
  const { selectTechnology } = useActions();
  const selectedTechnology = useAppSelector(
    (state: RootState) => state.technologies.selectedTechnology,
  );
  const handleSelectTechnology = (technology: Technology) => {
    selectTechnology(technology);
  };
  return (
    <div className="text-center font-medium mt-6 text-[17px]">
      <h1>
        <span className="text-gray-500">Learn more about </span>
        Technologies
      </h1>
      {
        <TechnologyItems
          technologies={technologies}
          selectedTechnology={selectedTechnology}
          handleSelectTechnology={handleSelectTechnology}
        />
      }
      {selectedTechnology && <TechnologyDescription selectedTechnology={selectedTechnology} />}
    </div>
  );
};
