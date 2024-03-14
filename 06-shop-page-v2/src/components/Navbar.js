


function Navbar(props) {
    const { title = 'Unkown' } = props;
    return (
        <div>
            <h1 className="display-1">{title}</h1>
            <hr />
        </div>
    )
}

export default Navbar;