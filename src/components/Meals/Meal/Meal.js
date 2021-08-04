import CartContext from '../../../store/CartContext';
import MealForm from './MealForm';
import styles from './Meal.module.css';
import { useContext } from 'react';

const Meal = ({ id, name, description, price }) => {
    const { addItem } = useContext(CartContext);

    const formattedPrice = `$${price.toFixed(2)}`;

    const onAdd = amount => {
        const item = {
            id,
            name,
            description,
            price,
            amount
        };

        addItem(item);
    };
    
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
            <div>
                <MealForm id={id} onAdd={onAdd} />
            </div>
        </li>
    )
};

export default Meal;
