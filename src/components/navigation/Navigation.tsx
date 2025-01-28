import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center h-12 px-5 bg-gray-500 text-white'>
        <Link to='/' className='font-bold hover:opacity-70 hover:cursor-default tracking-widest'>Pastimes</Link>
        <span>
            <Link to='/' className='mr-5 hover:border-b-2 border-white'>Home</Link>
            <Link to='/todo' className='mr-5 hover:border-b-2 border-white'>Todo</Link>
            <Link to='/githubsearch' className='mr-5 hover:border-b-2 border-white'>Github search</Link>
            <Link to='/favorites' className='mr-5 hover:border-b-2 border-white'>Favorites</Link>
            <Link to='/rickandmorty' className='mr-5 hover:border-b-2 border-white'>RickAndMorty</Link>
        </span>
    </nav>
  )
}

export default Navigation