import React from 'react';
import { Character } from '../../../../../../models/models';
import { CharacterDetailsItem } from './components/CharacterDetailsItem/CharacterDetailsItem';

interface CharacterDetailsProps {
  character: Character;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  return (
    <>
      <img src={character.image} alt={character.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-bold text-center">{character.name}</h3>
      <CharacterDetailsItem character={character.status} detail="Status:" />
      <CharacterDetailsItem character={character.species} detail="Species:" />
      <CharacterDetailsItem character={character.gender} detail="Gender:" />
      <CharacterDetailsItem character={character.origin.name} detail="Origin:" />
      <CharacterDetailsItem character={character.location.name} detail="Location:" />
    </>
  );
};
