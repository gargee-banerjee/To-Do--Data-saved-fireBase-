import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: { itemList: [] },
  reducers: {
    addItem(state, action) {
      state.itemList.push(action.payload);
    },
    completeItem(state, action) {
      console.log(action.payload)
      const itemIndex = state.itemList.findIndex(
        (obj) => obj.itemId === action.payload.itemId
      );
      state.itemList[itemIndex].isDone = true;
    },
   removeItem(state, action) {
      const itemIndex = state.itemList.findIndex(
        (obj) => obj.itemId === action.payload.itemId
      );
      
    }
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
