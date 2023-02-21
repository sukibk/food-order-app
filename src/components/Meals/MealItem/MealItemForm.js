import styles from './MealItemForm.module.css';
import { useState, useRef} from 'react';

import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const inputRef = useRef();

    return(
        <form className={styles.form}>
            <Input input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} label="Amount" ref={inputRef} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;