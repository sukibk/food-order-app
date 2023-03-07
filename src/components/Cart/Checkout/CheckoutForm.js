import styles from './CheckoutForm.module.css';
import Input from './Input'
import {useState} from "react";
import useInput from "../../hooks/use-input";

export default function CheckoutForm(props){
    const nameValidator = (input) => {return input.trim() !== ''}
    const {value: name,
        isValid: isInputIsValid,
        inputClass: nameClass,
        updateInput: nameUpdate,
        blurInput: nameBlur,
        clearInput: nameClear} = useInput(nameValidator);

    const streetValidator = (input) => {return input.trim() !== ''}
    const {value: street,
        isValid: isStreetIsValid,
        inputClass: streetClass,
        updateInput: streetUpdate,
        blurInput: streetBlur,
        clearInput: streetClear} = useInput(streetValidator);

    const postalValidator = (input) => {return input.trim().length > 3}
    const {value: postal,
        isValid: isPostalIsValid,
        inputClass: postalClass,
        updateInput: postalUpdate,
        blurInput: postalBlur,
        clearInput: postalClear} = useInput(postalValidator);

    const cityValidator = (input) => {return input.trim() !== ''}
    const {value: city,
        isValid: isCityIsValid,
        inputClass: cityClass,
        updateInput: cityUpdate,
        blurInput: cityBlur,
        clearInput: cityClear} = useInput(cityValidator);

    const isFormIsValid = isInputIsValid && isStreetIsValid && isPostalIsValid && isCityIsValid;


    const submitFormHandler = (e) => {
        e.preventDefault();
        if(!isFormIsValid) return
        props.onConfirm({name,street,postal,city});
    }

    return <form className={styles.form} onSubmit={submitFormHandler}>
        <div className={nameClass}>
            <Input vaulue={name} onChange={nameUpdate} onBlur={nameBlur} type='text' id='name'  label='Your Name'/>
        </div>
        <div className={streetClass}>
            <Input value={street} onChange={streetUpdate} onBlur={streetBlur} type='text' id='street'  label='Street'/>
        </div>
        <div className={postalClass}>
            <Input value={postal} onChange={postalUpdate} onBlur={postalBlur} type='number' label='Postal Code' id='postal'/>
        </div>
        <div className={cityClass}>
            <Input value={city}onChange={cityUpdate} onBlur={cityBlur} type='text' id='city' label='City' />
        </div>
        <div className={styles.actions}>
            <button disabled={!isFormIsValid} type='submit'>CONFIRM</button>
            <button type='button' onClick={props.onCancle}>CANCEL</button>
        </div>
    </form>
}