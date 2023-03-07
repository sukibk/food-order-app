import {useReducer} from "react";
import styles from '../../components/Cart/Checkout/CheckoutForm.module.css';

const initialInput = {
    value: '',
    isVisited: false
}

const inputReducer = (state, action) =>{
    switch(action.type){
        case 'INPUT':
            return {
                value: action.value,
                isVisited: state.isVisited
            }
            break;
        case 'BLUR':
            return {
                value: state.value,
                isVisited: true
            }
            break;
        case 'CLEAR':
            return {
                initialInput
            }
            break;
    }
}

const useInput = (validationFunction) => {
    const [inputValue, dispatchInputValue] = useReducer(inputReducer, initialInput)

    const inputIsValid = validationFunction(inputValue.value)

    let inputClass = styles.control;

    if(!inputIsValid && inputValue.isVisited) inputClass = `${styles.control} ${styles.invalid}`

    const updateInput = (e) =>{
        dispatchInputValue({type: 'INPUT', value: e.target.value});
    }

    const blurInput = () =>{
        dispatchInputValue({type: 'BLUR'})
    }

    const clearInput = () => {
        dispatchInputValue({type: 'CLEAR'})
    }

    return{
        value: inputValue.value,
        isValid: inputIsValid,
        inputClass,
        updateInput,
        blurInput,
        clearInput
    }
}

export default useInput;