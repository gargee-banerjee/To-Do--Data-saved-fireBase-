import {itemActions} from './items.js';

export const saveItem = (item) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://react-http-c0c08-default-rtdb.firebaseio.com/toDoItem.json",
      {
        method: "PUT",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
  };
};

export const fetchItem = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://react-http-c0c08-default-rtdb.firebaseio.com/toDoItem.json"
    );
    const data = await response.json();
    if (response.ok) {
      dispatch(itemActions.replaceItems({itemList:(data.itemList || []),nextItemId:data.nextItemId}));
    }
  };
};
