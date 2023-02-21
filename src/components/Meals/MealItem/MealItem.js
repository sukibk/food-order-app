import styles from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = (props) =>
{
    const ctx = useContext(CartContext);

    const addItemToCartHandler = (amount) =>
    {
        ctx.addItem({
            id: props.id,
            price: `${props.price.toFixed(2)}`,
            amount: amount,
            name: props.name
        })
    }

    return (
        <div className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} type="submit" onAddToCart={addItemToCartHandler}/>
            </div>
        </div>
    )
}

export default MealItem;