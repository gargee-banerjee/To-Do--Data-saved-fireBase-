import style from "./ToDoAppContainer.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { saveItem, fetchItem } from "../../store/todo-store-actions";
import Header from "./Header";
import ItemContainer from "../items/ItemContainer";

const ToDoAppContainer = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.items);
  const isChanged = useSelector((state) => state.items.dataChanged);

  //To fetch the data from the database
  useEffect(() => {
    dispatch(fetchItem());
  }, []);

  //To save the data to the database
  useEffect(() => {
    if (!isChanged) return;
    dispatch(saveItem(itemList));
  }, [itemList]);

  return (
    <>
      <Header />
      <ItemContainer />
    </>
  );
};
export default ToDoAppContainer;
