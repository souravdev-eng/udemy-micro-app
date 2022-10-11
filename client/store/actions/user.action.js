import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: { user: null },
  reducers: {
    increment: (state) => {
      state.user = { id: 1, name: 'Sourav' };
    },
  },
});

export const { increment } = userSlice.actions;

export default userSlice.reducer;
