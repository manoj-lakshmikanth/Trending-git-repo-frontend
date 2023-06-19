import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    theme: false,
    val: 'xyz',
    dummyArr: [],
    repoObj: {},
    loggedIn: true,
  },

  reducers: {
    darkTheme: (state, action) => {
      state.theme = action.payload;
    },
    dummy1: (state, action) => {
      state.dummyArr = action.payload;
    },
    singleObjRepo: (state, action) => {
      state.repoObj = action.payload;
    },
    isLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export default colorSlice.reducer;
export const { darkTheme, dummy1, singleObjRepo, isLoggedIn } =
  colorSlice.actions;
