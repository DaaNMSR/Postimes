import React from 'react'
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";


const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)
  const { removeFavorite } = useActions()

  const removeFromFavorites = (favorite: string): void => {
      removeFavorite(favorite)
  }

  if (favorites.length === 0) {
      return (
          <div className='grid place-items-center'>
              <p className="text-lg my-4">No favourites.</p>
              <a
                  href='/githubsearch'
                  className='p-4 hover:bg-gray-400 hover:text-white border-2 border-gray-700'
              >
                  To Github search...
              </a>
          </div>
      )
  }

    return (
        <>
          <h3 className='my-4 text-[22px] text-center font-medium'>My favorites</h3>
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
                          <button onClick={() => removeFromFavorites(f)}
                                  className='absolute top-[-8px] right-[2px] text-gray-500 text-[15px] hover:text-red-600'>x
                          </button>
                      </li>
                  ))}
              </ul>
          </div>
      </>

  )
}

export default FavoritesPage