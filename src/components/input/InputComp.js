import style from "./Input.module.css";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../../store/items";
import { useState } from "react";
const InputComp = () => {
  const dispatch = useDispatch();
  const itemId = useSelector((state) => state.items.nextItemId);

  const onAddItemhandler = (event) => {
    event.preventDefault();
    const itemNameField = document.getElementById("itemNameField");
    const itemName = itemNameField.value;

    //Field Validation
    if (itemName === "") return;

    dispatch(
      itemActions.addItem({ itemId: itemId, itemName: itemName, isDone: false })
    );

    dispatch(itemActions.updateItemId());

    //Resetting item field
    itemNameField.value = "";
  };
  return (
    <form className={style.inputFormContainer}>
      <input type="text" placeholder="To Do..." id="itemNameField"></input>
      <button type="submit" onClick={onAddItemhandler}>
        ADD
      </button>
    </form>
  );
};

export default InputComp;
