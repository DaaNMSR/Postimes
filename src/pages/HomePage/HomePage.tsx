import React from 'react';
import { Technology } from '../../models/models';
import { RootState, useAppSelector } from '../../store/store';
import { useActions } from '../../store/actions';
import { technologies } from './const';
import { TechnologyDescription } from './components/TechnologyDescription/TechnologyDescription';
import { TechnologyItems } from './components/TechnologyItems/TechnologyItems';
import { HomePageNavigation } from './components/HomePageNavigation/HomePageNavigation';

export const HomePage: React.FC = () => {
  const { selectTechnology } = useActions();
  const selectedTechnology = useAppSelector((state: RootState) => state.technologies.selectedTechnology);
  const handleSelectTechnology = (technology: Technology) => {
    selectTechnology(technology);
  };
  return (
    <>
      <h1 className="text-center font-medium text-2xl mt-8">
        Here you can spend time interestingly and usefully.
      </h1>
      <HomePageNavigation />
      <div className="text-center font-medium mt-6">
        <h2 className="text-[20px] mb-4">
          <span className="text-gray-500">Learn more about </span>
          Technologies
        </h2>
        {
          <TechnologyItems
            technologies={technologies}
            selectedTechnology={selectedTechnology}
            handleSelectTechnology={handleSelectTechnology}
          />
        }
        {selectedTechnology && <TechnologyDescription selectedTechnology={selectedTechnology} />}
      </div>
    </>
  );
};
