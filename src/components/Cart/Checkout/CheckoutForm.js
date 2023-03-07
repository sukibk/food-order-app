import styles from './CheckoutForm.module.css';
import Input from './Input'
import {useState} from "react";

export default function CheckoutForm(props){
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [postal, setPostal] = useState('')
    const [city, setCity] = useState('')


    const nameHandler= (e) => {
        setName(e.target.value)
    }

    const streetHandler= (e) => {
        setStreet(e.target.value)
    }

    const postalHandler= (e) => {
        setPostal(e.target.value)
    }

    const cityHandler= (e) => {
        setCity(e.target.value)
    }

    const submitFormHandler = e => {
        e.preventDefault()
    }

    return <form onSubmit={submitFormHandler}>
        <div className={styles.control}>
            <Input vaulue={name} onChange={nameHandler} type='text' id='name'  label='Your Name'/>
        </div>
        <div className={styles.control}>
            <Input value={street} onChange={streetHandler} type='text' id='street'  label='Street'/>
        </div>
        <div className={styles.control}>
            <Input value={postal} onChange={postalHandler} type='number' label='Postal Code' id='postal'/>
        </div>
        <div className={styles.control}>
            <Input value={city}onChange={cityHandler} type='text' id='city' label='City' />
        </div>
        <div className={styles.actions}>
            <button type='submit'>CONFIRM</button>
            <button type='button' onClick={props.onCancle}>CANCEL</button>
        </div>
    </form>
}