import { useContext, useState } from "react"
import Review from "./Review"
import ReviewForm from "./ReviewForm_v2"
import CartContext from "../contexts/CartContext"


function Product(props) {
    const { cart, dispatch } = useContext(CartContext)
    let { product } = props
    const [currentTab, setCurrentTab] = useState(1)

    const [reviews, setReviews] = useState([
        { stars: 5, author: 'user-1', body: 'sample review-1' },
        { stars: 3, author: 'user-2', body: 'sample review-2' }
    ])

    const handleTabChange = (e, tabIndex) => {
        e.preventDefault()
        setCurrentTab(tabIndex)
    }

    const handleBuy = () => {
        const action = {
            type: "ADD_ITEM",
            payload: product
        }
        dispatch(action)
    }

    const handleNewReview = (review) => {
        let newReviews = [review, ...reviews]
        setReviews(newReviews)
    }


    const renderReviews = () => {
        return reviews.map((review, idx) => {
            return (
                <Review key={idx} review={review} />
            )
        })
    }

    const renderTabPanel = (product) => {
        switch (currentTab) {
            case 1: return <div>{product.description}</div>
            case 2: return <div>Not Yet</div>
            case 3: return (<div>
                <ReviewForm onNewReview={rev => handleNewReview(rev)} />
                {renderReviews()}
            </div>
            )
            default: return null
        }
    }

    const isItemInCart = cart.find(item => item.id === product.id)

    return (
        <div className="row">
            <div className="col-4">
                <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-8">
                <div>{product.name}</div>
                <div>&#8377;{product.price}</div>
                <button disabled={isItemInCart} onClick={handleBuy} className="btn btn-primary">Add to Cart</button>
                <ul className="mt-2 nav nav-tabs">
                    <li className="nav-item">
                        <a onClick={e => handleTabChange(e, 1)} className={`nav-link ${currentTab === 1 ? 'active' : ''}`} href="/">Description</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={e => handleTabChange(e, 2)} className={`nav-link ${currentTab === 2 ? 'active' : ''}`} href="/">Specification</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={e => handleTabChange(e, 3)} className={`nav-link ${currentTab === 3 ? 'active' : ''}`} href="/">Reviews</a>
                    </li>
                </ul>
                {renderTabPanel(product)}
            </div>
        </div>
    )
}

export default Product