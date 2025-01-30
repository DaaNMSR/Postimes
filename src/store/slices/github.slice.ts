import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GithubState {
  favorites: string[];
}

const saveToLocalStorage = (favorites: string[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const loadFromLocalStorage = (): string[] => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const initialState: GithubState = {
  favorites: loadFromLocalStorage(),
};

export const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload);
      saveToLocalStorage(state.favorites);
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(f => f !== action.payload);
      saveToLocalStorage(state.favorites);
    },
  },
});

export const githubAction = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
