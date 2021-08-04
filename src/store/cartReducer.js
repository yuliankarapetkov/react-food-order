export const defaultState = {
    items: [],
    totalAmount: 0
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const item = action.payload;

            const add = () => [...state.items, item];
            const update = () => state.items.map(i => i.id === item.id ? { ...item, amount: i.amount + item.amount } : item);

            const alreadyExists = state.items.find(i => i.id === item.id);

            return {
                items: alreadyExists ? update() : add(),
                totalAmount: state.totalAmount + (item.price * item.amount)
            };
        }
        default: {
            return defaultState;
        }
    }
};
