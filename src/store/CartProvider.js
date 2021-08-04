import CartContext from './CartContext';

const CartProvider = props => {
    const addItem = item => {};
    const removeItem = id => {};

    const context = {
        items: [],
        totalAmount: 0,
        addItem,
        removeItem
    };

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
