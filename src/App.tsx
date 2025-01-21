import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GithubPage from './pages/GithubPage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/navigation/Navigation';
import HomePage from './pages/HomePage';
import TodoPage from "./pages/TodoPage";



function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/todo' element = {<TodoPage/>} />
        <Route path='/githubsearch' element = {<GithubPage/>} />
        <Route path='/favorites' element = {<FavoritesPage/>} />
      </Routes>
    </>
  );
}

export default App;
