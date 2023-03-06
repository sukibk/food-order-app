import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import loader from '../../loader.gif'
import {useEffect, useState} from "react";

    // async function sendData(){
    //     const response = await fetch ("https://react-http-app-9d66f-default-rtdb.firebaseio.com/meals.json", {
    //         method: "POST",
    //         body: JSON.stringify(availableMeals),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }


const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    async function retrieveMeals(){
        try{
        const response = await fetch("https://react-http-app-9d66f-default-rtdb.firebaseio.com/meals/-NPshrnZfUxvYbRaJ7ce.json");
        if(!response.ok){
            throw new Error('Data didn\'t load')
        }

        const data = await response.json();

        const loadMeals = [];

        for(const item in data){
            loadMeals.push({
                id: data[item].id,
                name: data[item].name,
                price: data[item].price,
                description: data[item].description
            })
        }

        setMeals(loadMeals);}
        catch (e){
            setError(e.message);
        }
        setIsLoading(false);
    }
        useEffect(()=>{
            setTimeout(()=>{
                retrieveMeals();
            }, 2000);
        }, [])
    const mealList = meals.map(meal => (<MealItem key={meal.id} name={meal.name} description={meal.description}
    price={meal.price} id={meal.id}/>))
        return (
            <section className={styles.meals}>
                {!error ? <Card>
                    {isLoading && <center><img className={styles.loader} src={loader}/></center>}
                    <ul>{mealList}</ul>
                    {/*<button onClick={sendData}></button>*/}
                </Card> : <p className={styles.error}>{error}</p>}
            </section>
        )
}

export default AvailableMeals;