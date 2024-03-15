import { useContext } from "react"
import CartContext from "../contexts/CartContext"


function CartView(props) {
    // const { cart } = props
    const { cart, dispatch } = useContext(CartContext)

    const handleQty = (qty, line) => {
        const action = {
            type: qty > 0 ? "INCREASE_QTY" : "DECREASE_QTY",
            payload: line
        }
        dispatch(action)
    }

    const renderCartLines = () => {
        return cart.map((line, idx) => {
            return (
                <tr key={idx}>
                    <td>{line.name}</td>
                    <td>&#8377;{line.price}</td>
                    <td>
                        <div className="d-flex justify-content-around">
                            <button onClick={e => handleQty(-1, line)} className="btn btn-primary btn-sm">-</button>
                            <span>{line.qty}</span>
                            <button onClick={e => handleQty(1, line)} className="btn btn-primary btn-sm">+</button>
                        </div>
                    </td>
                    <td>&#8377;{line.qty * line.price}</td>
                    <td>
                        <button onClick={e => {
                            const action = {
                                type: "REMOVE_ITEM",
                                payload: line
                            }
                            dispatch(action)
                        }} className="btn btn-danger btn-sm">Remove</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div className="card card-body mt-2">
            <table className="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCartLines()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td>&#8377;{cart.reduce((acc, line) => acc + line.qty * line.price, 0)}</td>
                    </tr>
                </tfoot>
            </table>
            {/* clear cart */}
            <div className="">
                <button onClick={e => {
                    const action = {
                        type: "CLEAR_CART"
                    }
                    dispatch(action)
                }} className="btn btn-warning">Clear Cart</button>
            </div>
        </div>
    )
}

export default CartView