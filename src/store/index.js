import {configureStore} from '@reduxjs/toolkit'
import ItemReducer from "./items";
const store = configureStore({ reducer: { items: ItemReducer } });
export default store;
