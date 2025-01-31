import React from 'react';
import Button from '../../../../components/UI/Button/Button';
import { Character } from '../../../../models/models';
import { CharacterDetails } from './components/CharacterDetails/CharacterDetails';

interface CharacterModalProps {
  character: Character;
  handleCloseModal: () => void;
}

export const CharacterModal: React.FC<CharacterModalProps> = ({ character, handleCloseModal }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleCloseModal}
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg max-w-[400px] w-full relative"
        onClick={e => e.stopPropagation()}
      >
        <Button
          onClick={handleCloseModal}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </Button>
        <CharacterDetails character={character} />
      </div>
    </div>
  );
};
