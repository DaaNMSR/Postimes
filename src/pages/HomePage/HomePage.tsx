import React, { useState } from 'react';
import { Technology } from '../../models/models';
import { RootState, useAppSelector } from '../../store/store';
import { useActions } from '../../store/actions';
import { technologies } from './const';
import { TechnologyDescription } from './components/TechnologyDescription/TechnologyDescription';
import { TechnologyItems } from './components/TechnologyItems/TechnologyItems';
import { HomePageNavigation } from './components/HomePageNavigation/HomePageNavigation';

export const HomePage: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
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
      <HomePageNavigation fn={() => setIsActive(!isActive)} />
      {isActive && (
        <div className="text-center font-medium mt-6">
          {
            <TechnologyItems
              technologies={technologies}
              selectedTechnology={selectedTechnology}
              handleSelectTechnology={handleSelectTechnology}
            />
          }
          {selectedTechnology && <TechnologyDescription selectedTechnology={selectedTechnology} />}
        </div>
      )}
    </>
  );
};
