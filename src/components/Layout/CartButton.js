import CartIcon from '../Shared/CartIcon';

import styles from './CartButton.module.css';

const CartButton = () => {
    return (
        <button type="button" className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={styles.badge}>
                3
            </span>
        </button>
    )
};

export default CartButton;
