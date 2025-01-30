import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character, CharactersState } from '../../models/models';

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
  searchQuery: '',
};

export const charactersSlice = createSlice({
  name: 'rickandmorty',
  initialState,
  reducers: {
    fetchCharactersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.loading = false;
      state.characters = action.payload;
    },
    fetchCharactersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
  },
});

export const charactersActions = charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
