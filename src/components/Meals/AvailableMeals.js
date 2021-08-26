import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';
import classes from './AvailableMeals.module.css';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Chicken Shawerma',
      description: 'A syrian specialty!',
      price: 16.50,
    },
    {
      id: 'm3',
      name: 'Barbeque Burger',
      description: 'American, raw, meaty',
      price: 12.49,
    },
    {
      id: 'm4',
      name: 'Green Soup',
      description: 'Healthy...and green...',
      price: 18.95,
    },
];

const AvailableMeals = () => {
    
    const mealsList = DUMMY_MEALS.map( (meal) =>
        <MealItem 
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        /> 
    );
    
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};
 
export default AvailableMeals;