import React from 'react';
import { Character } from '../../../../models/models';

interface TableOfCharactersProps {
  data: {
    results: Character[];
  };
  handleMoreInfo: (character: Character) => void;
}

export const TableOfCharacters: React.FC<TableOfCharactersProps> = ({
  data,
  handleMoreInfo,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.results.map(character => (
        <div
          key={character.id}
          className="border p-4 flex flex-col items-center bg-gray-50 hover:bg-gray-200 max-w-[233px]"
          onClick={() => handleMoreInfo(character)}
        >
          <img
            src={character.image}
            alt={character.name}
            className="w-24 h-24 rounded-full mb-2"
          />
          <h3 className="font-bold">{character.name}</h3>
          <p>
            {character.status} - {character.species}
          </p>
        </div>
      ))}
    </div>
  );
};
