import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
  return (
      <button className={styles.button}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{ctx.items.length}</span>
      </button>
  );
};

export default HeaderCartButton;
