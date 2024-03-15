

// actions that cause cart state change

// add item to cart
// remove item from cart
// clear cart
// increase item quantity
// decrease item quantity
// checkout

// rules for reducer function

// 1. reducer function should be a pure function
// 2. reducer function should return a new state
// 3. reducer function should not mutate the existing state


export function cartReducer(state = [], action) {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_ITEM':
            let itemToAdd = payload;
            let existingItem = state.find(item => item.id === itemToAdd.id);
            if (existingItem) {
                return state.map(item => {
                    if (item.id === itemToAdd.id) {
                        return { ...item, qty: item.qty + 1 }
                    }
                    return item;
                })
            } else {
                return [...state, { ...itemToAdd, qty: 1 }]
            }
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== payload.id)
        case 'INCREASE_QTY':
            return state.map(item => {
                if (item.id === payload.id) {
                    return { ...item, qty: item.qty + 1 }
                }
                return item;
            })
        case 'DECREASE_QTY':
            return state.map(item => {
                if (item.id === payload.id) {
                    return { ...item, qty: item.qty - 1 }
                }
                return item;
            }).filter(item => item.qty > 0)
        case 'CLEAR_CART':
            return []
        default:
            return state;
    }
}