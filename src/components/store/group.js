
import { createSlice } from "@reduxjs/toolkit";

const groupSlice = createSlice({
  name: 'group',
  initialState: {
    currentGroupId: null,
  },
  reducers: {
    
    setCurrentGroupId: (state, action) => {
      state.currentUserId = action.payload;
    },
  },
});
// // Action creators are generated for each case reducer function
export const { setCurrentGroupId } = groupSlice.actions;

export default groupSlice.reducer;

