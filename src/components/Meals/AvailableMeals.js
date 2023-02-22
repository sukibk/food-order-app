import MealItem from "./MealItem/MealItem";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";

// Array with available meals
const availableMeals = [
    {
        id: 'm1',
        name: 'Pizza',
        description: 'Italian hand-made pizza',
        price: 14.99
    },
    {
        id: 'm2',
        name: 'Hamburger',
        description: 'American-style beefy hamburger',
        price: 18.49
    },
    {
        id: 'm3',
        name: 'Sushi',
        description: 'Tasty fish and veggies',
        price: 8.99
    },
    {
        id: 'm4',
        name: 'Pasta',
        description: 'Pasta with mac&cheese',
        price: 4.99
    }]

const AvailableMeals = () => {
    const mealList = availableMeals.map(meal => (<MealItem key={meal.id} name={meal.name} description={meal.description}
    price={meal.price} id={meal.id}/>))
        return (
            <section className={styles.meals}>
                <Card>
                    <ul>{mealList}</ul>
                </Card>
            </section>
        )
}

export default AvailableMeals;