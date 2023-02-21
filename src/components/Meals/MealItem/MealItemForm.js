import styles from './MealItemForm.module.css';
import { useState, useRef} from 'react';

import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const inputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitFormHandler = event => {
        event.preventDefault();

        const enteredAmount = inputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount < 1 || enteredAmount > 5)
        {setAmountIsValid(false);
        return;}

        props.onAddToCart(enteredAmountNumber);
    }


    return(
        <form className={styles.form} onSubmit={submitFormHandler}>
            <Input input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} label="Amount" ref={inputRef} />
            <button type={props.type} >+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    )
}

export default MealItemForm;