import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
    let numberOfItems = 1;
  return (
      <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfItems}</span>
      </button>
  );
};

export default HeaderCartButton;
