import React from 'react';
import { Technology } from '../../../../models/models';

interface TechnologyDescriptionProps {
  selectedTechnology?: Technology;
}

export const TechnologyDescription: React.FC<TechnologyDescriptionProps> = ({
  selectedTechnology,
}) => {
  return (
    <div className="mx-auto mt-6 p-4 border rounded shadow bg-gray-100 text-gray-800 w-[400px]">
      {selectedTechnology?.description}
      <a
        href={selectedTechnology?.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-500 hover:text-blue-700"
      >
        Learn More
      </a>
    </div>
  );
};
