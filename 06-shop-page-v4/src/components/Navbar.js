import CartBadge from "./CartBadge";

function Navbar(props) {
    const { title = 'Unkown' } = props;
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h1 className="display-1">{title}</h1>
                <CartBadge />
            </div>
            <hr />
        </div>
    )
}

export default Navbar;