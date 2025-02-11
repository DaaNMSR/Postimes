import React from 'react';

interface CharacterDetailsItemProps {
  character: string;
  detail: string;
}

export const CharacterDetailsItem: React.FC<CharacterDetailsItemProps> = ({ character, detail }) => {
  return (
    <p className="text-center">
      <strong>{detail}</strong> {character}
    </p>
  );
};
