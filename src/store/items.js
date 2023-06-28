import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: { itemList: [], nextItemId: 0, dataChanged: false },
  reducers: {
    replaceItems(state, action) {
      state.itemList = action.payload.itemList;
      state.nextItemId = action.payload.nextItemId;
    },
    updateItemId(state) {
      state.nextItemId++;
    },
    addItem(state, action) {
      state.dataChanged = true;
      state.itemList.push(action.payload);
    },
    completeItem(state, action) {
      state.dataChanged = true;
      const itemIndex = state.itemList.findIndex(
        (obj) => obj.itemId === action.payload.itemId
      );
      state.itemList[itemIndex].isDone = true;
    },
    removeItem(state, action) {
      state.dataChanged = true;
      const itemIndex = state.itemList.findIndex(
        (obj) => obj.itemId === action.payload.itemId
      );
      state.itemList.splice(itemIndex, 1);
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice.reducer;
