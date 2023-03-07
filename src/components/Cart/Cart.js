import styles from './Cart.module.css';
import CartContext from "../../store/cart-context";
import { useContext, useState, useEffect } from "react";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CheckoutForm from "./Checkout/CheckoutForm";

const Cart = (props) =>{
    const [hasItems, setHasItems] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const ctx = useContext(CartContext);
    const {items} = ctx;

    const addItemHandler = (item) =>{
        ctx.addItem({...item, amount:1})
    }

    useEffect(()=>{
        if(items.length <= 0)
            setHasItems(false)
        if(items.length > 0)
            setHasItems(true)
    }, [items])

    const removeItemHandler = (id) =>{
        ctx.removeItem(id)
    }

    const showFormHandler = () => {
        setShowForm(true);
    }

    return(
        <Modal onClose={props.onClose}>
            <div className={styles["cart-items"]}>
                {hasItems ? items.map(item => { return(
                    <CartItem name={item.name} amount={item.amount}
                              price={item.price} key={item.id} onAdd={addItemHandler.bind(null, item)}
                              onRemove={removeItemHandler.bind(null, item.id)}/>)
                }) : <p>No items in cart.</p>}
            </div>
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{ctx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={styles.actions}>
                {!showForm && (<><button type="button" onClick={props.onClose}>Close</button>
                {ctx.totalAmount>0 ? <button onClick={showFormHandler}>Order</button> : ''}</>)}
            </div>
            {showForm && <CheckoutForm onCancle = {props.onClose}/>}
        </Modal>
    )

}

export default Cart;