export const defaultState = {
    items: [],
    totalAmount: 0
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const item = action.payload;

            return {
                items: [...state.items, item],
                totalAmount: state.totalAmount + (item.price * item.amount)
            };
        }
        default: {
            return defaultState;
        }
    }
};
