import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg'
import styles from "./Header.module.css";

const Header = (props) => {
  return (
      <>
    <header className={styles.header}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.onClick}/>
    </header>
          <div className={styles["main-image"]}>
              <img src={mealsImage} alt="Table fool of food!"></img>
          </div>
      </>
  );
};

export default Header;
