import React from 'react'
import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import FavoritesTable from '../components/favoritesTable/FavoritesTable';


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
          <FavoritesTable favorites={favorites} onClick={removeFromFavorites}></FavoritesTable>
        </>
  )
}

export default FavoritesPage
