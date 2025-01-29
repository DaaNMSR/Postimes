import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Technology } from '../../models/models';

interface TechnologiesState {
    selectedTechnology: Technology | null;
}
  
const initialState: TechnologiesState = {
    selectedTechnology: null,
};
  
const technologiesSlice = createSlice({
    name: 'technologies',
    initialState,
    reducers: {
      selectTechnology(state, action: PayloadAction<Technology>) {
        state.selectedTechnology = action.payload;
      },
    },
  });

export const homeActions = technologiesSlice.actions;
export const homeReducer = technologiesSlice.reducer;
