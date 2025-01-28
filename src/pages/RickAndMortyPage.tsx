import React, { useState } from "react";
import { useGetCharactersQuery } from "../store/rickandmorty/rickandmorty.api";
import Input from "../UI/Input";
import { Character } from "../models/models";
import Button from "../UI/Button";

const CharactersList = () => {
    const [search, setSearch] = useState("");
    const { data, error, isLoading } = useGetCharactersQuery(search);

    const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null); 
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
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-4 max-w-[1000px] w-full">
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
                    <div className="grid grid-cols-3 gap-4">
                        {data.results.map((character) => (
                            <div
                                key={character.id}
                                className="border p-4 flex flex-col items-center bg-gray-50 hover:bg-gray-200"
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
                )}
                {isModalOpen && selectedCharacter && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-5"
                    onClick={handleCloseModal}    
                >
                    <div 
                        className="bg-white p-6 rounded-md shadow-lg max-w-[400px] w-full relative"
                        onClick={(e) => e.stopPropagation()}
                        >
                        <Button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-3 text-gray-500 hover:text-black"
                            text='✕'
                        />
                        <img
                            src={selectedCharacter.image}
                            alt={selectedCharacter.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-bold text-center">
                            {selectedCharacter.name}
                        </h3>
                        <p className="text-center">
                            <strong>Status:</strong> {selectedCharacter.status}
                        </p>
                        <p className="text-center">
                            <strong>Species:</strong> {selectedCharacter.species}
                        </p>
                        <p className="text-center">
                            <strong>Gender:</strong> {selectedCharacter.gender}
                        </p>
                        <p className="text-center">
                            <strong>Origin:</strong> {selectedCharacter.origin.name}
                        </p>
                        <p className="text-center">
                            <strong>Location:</strong> {selectedCharacter.location.name}
                        </p>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default CharactersList;
