import React, { useState } from 'react';
import { useGetCharactersQuery } from '../../store/api/rickandmorty.api';
import Input from '../../components/UI/Input';
import { Character } from '../../models/models';
import { useDebounce } from '../../hooks/debounce';
import { CharacterModal } from './components/CharacterModal/CharacterModal';
import { TableOfCharacters } from './components/TableOfCharacters/TableOfCharacters';

export const RickAndMortyPage = () => {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search);
  const { data, error, isLoading } = useGetCharactersQuery(debounced);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleMoreInfo = (character: Character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCharacter(null);
  };

  return (
    <div className="flex justify-center">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Rick and Morty Characters
        </h1>
        <Input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search for a character..."
          className="border border-gray-300 p-2 mb-4 w-full"
        />
        {isLoading && <p className="text-center">Loading characters...</p>}
        {error && (
          <p className="text-center text-red-500">
            Failed to fetch characters.
          </p>
        )}
        {data && (
          <TableOfCharacters data={data} handleMoreInfo={handleMoreInfo} />
        )}
        {isModalOpen && selectedCharacter && (
          <CharacterModal
            character={selectedCharacter}
            handleCloseModal={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};
