import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  access_token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.access_token = action.payload.access_token;
    },
    logout: (state) => {
      state.access_token = null;
    },
  },
});

export const { login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;