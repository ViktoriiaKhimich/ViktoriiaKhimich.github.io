import { configureStore } from '@reduxjs/toolkit';
import assetsSlice from './assets/assetsSlice';

export const store = configureStore({
  reducer: {
    assets: assetsSlice,
  },
});
