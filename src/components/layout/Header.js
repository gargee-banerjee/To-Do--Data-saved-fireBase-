import style from './Layout.module.css';
import InputComp from "../input/InputComp";
const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.appTitle}>TO DO</div>
      <InputComp />
    </div>
  );
};
export default Header;