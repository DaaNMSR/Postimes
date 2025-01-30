import React from 'react';
import { Character } from '../../../../models/models';
import { CharacterCard } from './components/CharacterCard';

interface TableOfCharactersProps {
  data: {
    results: Character[];
  };
  handleMoreInfo: (character: Character) => void;
}

export const TableOfCharacters: React.FC<TableOfCharactersProps> = ({ data, handleMoreInfo }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.results.map(character => (
        <CharacterCard key={character.id} character={character} handleMoreInfo={handleMoreInfo} />
      ))}
    </div>
  );
};
