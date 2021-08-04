import CartContext from './CartContext';

import { useReducer } from 'react';

import { cartReducer, defaultState } from './cartReducer';

const CartProvider = props => {
    const [{ items, totalAmount }, dispatch] = useReducer(cartReducer, defaultState);

    const addItem = item => {
        dispatch({ type: 'ADD', payload: item });
    };

    const removeItem = id => {};

    const context = {
        items,
        totalAmount,
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
