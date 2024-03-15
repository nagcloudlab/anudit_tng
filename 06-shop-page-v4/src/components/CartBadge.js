import { useContext } from "react"

import {
    useSelector
} from 'react-redux'

function CartBadge(props) {
    // const { cart } = props
    const cart = useSelector(state => state.cart)
    return (
        <div className="">
            <i className="fa fa-shopping-cart"></i>
            {cart.length === 0 ? <div>No items in cart</div> : <div>Cart has {cart.length} items</div>}
        </div>
    )
}

export default CartBadge