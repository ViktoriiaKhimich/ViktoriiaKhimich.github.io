import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const assetsSlice = createSlice({
  name: 'assets',
  initialState,
  reducers: {
    addAsset(state, action) {
      state.assets.push(action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addAsset, setFilter } = assetsSlice.actions;
export default assetsSlice.reducer;
