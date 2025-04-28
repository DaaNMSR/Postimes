import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GithubPage } from './pages/GithubPage/GithubPage';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { Navigation } from './components/navigation/Navigation';
import { HomePage } from './pages/HomePage/HomePage';
import { TodoPage } from './pages/TodoPage/TodoPage';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { RickAndMortyPage } from './pages/RickAndMortyPage/RickAndMortyPage';

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/githubsearch" element={<GithubPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/rickandmorty" element={<RickAndMortyPage />} />
      </Routes>
    </Provider>
  );
};
