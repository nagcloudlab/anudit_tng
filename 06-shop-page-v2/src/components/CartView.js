

function CartView(props) {
    const { cart } = props
    const renderCartLines = () => {
        return cart.map((line, idx) => {
            return (
                <tr key={idx}>
                    <td>{line.name}</td>
                    <td>&#8377;{line.price}</td>
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
                    </tr>
                </thead>
                <tbody>
                    {renderCartLines()}
                </tbody>
            </table>
        </div>
    )
}

export default CartView