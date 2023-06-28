import style from "./Item.module.css";
import image from "../../images/chaHaeCropped.png";
import { useDispatch } from "react-redux";
import { itemActions } from "../../store/items";

const ItemComp = (props) => {
  const { itemId, itemName, isDone } = props.item;
  const dispatch = useDispatch();

  const onItemCompletedHandler = () => {
    dispatch(itemActions.completeItem({ itemId }));
  };

  //conditional css classes
  const cardContainerStyle = isDone
    ? `${style.itemCard} ${style.itemDone}`
    : style.itemCard;
  const itemDoneButtonStyle = isDone
    ? `${style.disableDoneButton}`
    : `${style.itemDoneButton}`;

  return (
    <div className={cardContainerStyle}>
      <img src={image}></img>
      <div className={style.itemTitle}> {itemName}</div>
      <div className={style.itemCardButtonContainer}>
        <button
          className={itemDoneButtonStyle}
          onClick={onItemCompletedHandler}
          disabled={isDone}
        >
          DONE
        </button>
        <button className={style.itemDeleteButton}>DELETE</button>
      </div>
    </div>
  );
};

export default ItemComp;
