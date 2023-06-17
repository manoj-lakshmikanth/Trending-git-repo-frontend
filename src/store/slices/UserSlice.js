import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    theme: false,
    val: 'xyz',
    dummyArr: [],
    repoObj: {},
  },

  reducers: {
    darkTheme: (state, action) => {
      state.theme = action.payload;
    },
    value: (state, action) => {
      state.val = action.payload;
    },
    dummy1: (state, action) => {
      state.dummyArr = action.payload;
    },
    singleObjRepo: (state, action) => {
      state.repoObj = action.payload;
    },
  },
});

export default colorSlice.reducer;
export const { darkTheme, dummy1, singleObjRepo } = colorSlice.actions;
