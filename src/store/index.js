import { configureStore } from '@reduxjs/toolkit';

import colorSlice from './slices/UserSlice';

const store = configureStore({
  reducer: {
    colors: colorSlice,
  },
});

export default store;
