export const defaultState = {
    items: [],
    totalAmount: 0
};

export const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            const item = action.payload;

            const add = () => [...state.items, item];
            const update = () => state.items.map(i => i.id === item.id ? { ...item, amount: i.amount + item.amount } : i);

            const alreadyExists = state.items.find(i => i.id === item.id);

            return {
                items: alreadyExists ? update() : add(),
                totalAmount: state.totalAmount + (item.price * item.amount)
            };
        }
        case 'REMOVE': {
            const id = action.payload;

            const item = state.items.find(i => i.id === id);

            const remove = () => state.items.filter(i => i.id !== id);
            const decreaseAmount = () => state.items.map(i => i.id === id ? { ...item, amount: item.amount - 1 } : i);

            const hasSingleOccurance = item.amount === 1;

            return {
                items: hasSingleOccurance ? remove() : decreaseAmount(),
                totalAmount: state.totalAmount - item.price
            };
        }
        default: {
            return defaultState;
        }
    }
};
