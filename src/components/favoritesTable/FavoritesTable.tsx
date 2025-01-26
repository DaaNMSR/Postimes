import React from 'react'

interface FavoritesTableProps {
    favorites: string[];
    onClick: (favorite: string) => void;
}


const FavoritesTable: React.FC<FavoritesTableProps> = ({favorites, onClick}) => {
  return (
    <div className="flex justify-center">
              <ul className="list-none">
                  {favorites.map((f,index) => (
                      <li
                          key={f}
                          className='relative py-2 px-4 hover:cursor-pointer hover:text-gray-500 transition-colors border-2 mb-2'
                      >
                          <span className="font-bold mr-2">{index + 1}.</span>
                          <a href={f} target="_blank" rel="noreferrer">
                              {f}
                          </a>
                          <button onClick={() => onClick(f)}
                                className='absolute top-[-8px] right-[2px] text-gray-500 text-[15px] hover:text-red-600'>x
                          </button>
                      </li>
                  ))}
              </ul>
          </div>
  )
}

export default FavoritesTable