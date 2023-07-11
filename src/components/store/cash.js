
import { createSlice } from "@reduxjs/toolkit";

const cashSlice = createSlice({
  name: 'cash',
  initialState: {
    currentCashId: null,
  },
  reducers: {
    setCurrentCashId: (state, action) => {
      state.currentCashId = action.payload;
    },
  },
});
// // Action creators are generated for each case reducer function
export const { setCurrentCashId } = cashSlice.actions;

export default cashSlice.reducer;

