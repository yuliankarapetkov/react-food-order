import CartContext from '../../store/CartContext';
import CartIcon from '../Shared/CartIcon';
import styles from './CartButton.module.css';
import { useContext, useEffect, useState } from 'react';

const CartButton = ({ onClick }) => {
    const [buttonHiglighted, setButtonHighlighted] = useState(false);

    const { items } = useContext(CartContext);

    useEffect(() => {
        if (!items.length) return;

        setButtonHighlighted(true);

        const timer = setTimeout(() => setButtonHighlighted(false), 300);

        return () => clearTimeout(timer);
    }, [items]);

    const itemsCount = items.reduce((count, item) => count + item.amount, 0);

    const buttonStyles = `${styles.button} ${buttonHiglighted ? styles.bump : ''}`;

    return (
        <button
            type="button"
            className={buttonStyles}
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
