import CartContext from '../../store/CartContext';
import CartIcon from '../Shared/CartIcon';
import { useContext } from 'react';
import styles from './CartButton.module.css';

const CartButton = ({ onClick }) => {
    const { items } = useContext(CartContext);

    const itemsCount = items.reduce((count, item) => count + item.amount, 0);

    return (
        <button
            type="button"
            className={styles.button}
            onClick={onClick}
        >
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                {itemsCount}
            </span>
        </button>
    )
};

export default CartButton;
