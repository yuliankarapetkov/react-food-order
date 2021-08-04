import CartContext from '../../store/CartContext';
import CartItem from './CartItem';
import Modal from '../Shared/Modal';
import { useContext } from 'react';
import styles from './Cart.module.css';

const Cart = ({ onClose }) => {
    const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

    const formattedTotalAmount = `$${totalAmount.toFixed(2)}`;

    return (
        <Modal onClose={onClose}>
            <ul className={styles['cart-items']}>
                {items.map(cartItem => (
                    <CartItem
                        key={cartItem.id}
                        {...cartItem}
                        onAdd={() => addItem({ ...cartItem, amount: 1 })}
                        onRemove={() => removeItem(cartItem.id)}
                    />
                ))}
            </ul>

            <div className={styles.total}>
                <span>Total amount</span>
                <span>{formattedTotalAmount}</span>
            </div>

            <div className={styles.actions}>
                <button
                    type="button"
                    className={styles['button-alt']}
                    onClick={onClose}
                >
                    Close
                </button>

                {!!items.length &&    
                    <button className={styles.button}>
                        Order
                    </button>
                }
            </div>
        </Modal>
    );
};

export default Cart;
