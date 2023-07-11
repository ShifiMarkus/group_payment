
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUserId: null,
    currentUserName: "",
  },
  reducers: {
    setCurrentUserId: (state, action) => {
      state.currentUserId = action.payload;
    },
    setCurrentUserName: (state, action) => {
      state.currentUserName = action.payload;
    },
  },
});
// // Action creators are generated for each case reducer function
export const { setCurrentUserId, setCurrentUserName } = userSlice.actions;

export default userSlice.reducer;

