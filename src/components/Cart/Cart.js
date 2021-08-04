import Modal from '../Shared/Modal';
import styles from './Cart.module.css';

const DUMMY_ITEMS = [
    {
        id: 'c1',
        name: 'Sushi',
        amount: 2,
        price: 12.99
    }
];

const Cart = props => {
    const cartItems = [...DUMMY_ITEMS];

    return (
        <Modal>
            <ul className={styles['cart-items']}>
                {cartItems.map(cartItem => (
                    <li key={cartItem.id}>{cartItem.name}</li>
                ))}
            </ul>

            <div className={styles.total}>
                <span>Total amount</span>
                <span>39.99</span>
            </div>

            <div className={styles.actions}>
                <button className={styles['button-alt']}>
                    Close
                </button>

                <button className={styles.button}>
                    Order
                </button>
            </div>
        </Modal>
    );
};

export default Cart;
