import logo from "./logo.svg";
import "./App.css";
import ToDoAppContainer from "./components/layout/ToDoAppContainer";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <ToDoAppContainer />
    </Provider>
  );
}

export default App;
