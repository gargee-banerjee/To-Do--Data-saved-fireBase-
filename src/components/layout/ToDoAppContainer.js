import style from "./ToDoAppContainer.module.css";
import { Provider } from "react-redux";
import store from "../../store/index";
import Header from "./Header";
import ItemContainer from "../items/ItemContainer";
const ToDoAppContainer = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <ItemContainer />
      </Provider>
    </>
  );
};
export default ToDoAppContainer;
