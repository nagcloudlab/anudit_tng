
function CartBadge(props) {
    const { cart } = props
    return (
        <div className="card card-body">
            <i className="fa fa-shopping-cart"></i>
            {cart.length === 0 ? <div>No items in cart</div> : <div>Cart has {cart.length} items</div>}
        </div>
    )
}

export default CartBadge