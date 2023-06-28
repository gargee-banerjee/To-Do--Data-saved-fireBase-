import { useSelector } from "react-redux";
import style from "./Item.module.css";
import ItemComp from "./ItemComp";  
const ItemContainer = () => {
  const toDoList = useSelector((state) => state.items.itemList);

  const itemList = toDoList.map((obj) => {
    return <ItemComp key={obj.itemId} item={obj} />;
  });

  return <div className={style.itemContainer}>{itemList}</div>;
};
export default ItemContainer;

