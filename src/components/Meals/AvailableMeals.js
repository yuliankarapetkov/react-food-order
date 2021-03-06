import Card from '../Shared/Card';
import Meal from './Meal/Meal';

import styles from './AvailableMeals.module.css';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest tofish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Seitan Schnitzel',
      description: 'A German specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Beyond Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals = () => {
    const meals = [...DUMMY_MEALS];

    return (
        <section className={styles.meals}>
          <Card>
            <ul>
                {meals.map(meal => {
                    return (
                        <Meal key={meal.id} {...meal} />
                    )
                })}
            </ul>
          </Card>
        </section>
    )
};

export default AvailableMeals;