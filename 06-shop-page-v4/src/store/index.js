

import {
    createStore,
    combineReducers
} from 'redux'


import {
    cartReducer,
} from '../reducers/cart'


const rootReducer = combineReducers({
    cart: cartReducer,
})

const initialState = {
    cart: []
}
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store