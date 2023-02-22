import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
    const [btnIsHighlited, setBtnIsHighlited] = useState(false);
    const ctx = useContext(CartContext);

    const { items } = ctx;

    const numberOfItemsInCart = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnStyles = `${styles.button} ${btnIsHighlited && styles.bump}`

    useEffect(() => {
        if(items.length === 0) return;

        setBtnIsHighlited(true);

        const animationTimeout = setTimeout(()=>{
            setBtnIsHighlited(false)
        }, 100)

        // return () => {
        //     clearTimeout(animationTimeout);
        // }

    }, [items])

  return (
      <button className={btnStyles}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfItemsInCart}</span>
      </button>
  );
};

export default HeaderCartButton;
