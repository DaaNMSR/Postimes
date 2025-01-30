import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './api/github.api';
import { githubReducer } from './slices/github.slice';
import { todosReducer } from './slices/todo.slice';
import { homeReducer } from './slices/home.slice';
import { rickandmortyApi } from './api/rickandmorty.api';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
    todos: todosReducer,
    technologies: homeReducer,
    [rickandmortyApi.reducerPath]: rickandmortyApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(githubApi.middleware)
      .concat(rickandmortyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
