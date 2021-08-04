import CartIcon from '../Shared/CartIcon';

import styles from './CartButton.module.css';

const CartButton = ({ onClick }) => {
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
                3
            </span>
        </button>
    )
};

export default CartButton;
