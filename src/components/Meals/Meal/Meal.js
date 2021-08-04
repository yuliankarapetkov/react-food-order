import styles from './Meal.module.css';

const Meal = ({ name, description, price }) => {
    const formattedPrice = `$${price.toFixed(2)}`;
    
    return (
        <li className={styles.meal}>
            <div>
                <h3>{name}</h3>
                <div className={styles.description}>{description}</div>
                <div className={styles.price}>{formattedPrice}</div>
            </div>
        </li>
    )
};

export default Meal;
