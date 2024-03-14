

const renderStars = (stars) => {
    let starsArray = []
    for (let i = 0; i < stars; i++) {
        starsArray.push(<i key={i} className="fa fa-star" style={{
            color: 'tomato'
        }}></i>)
    }
    return starsArray
}

function Review(props) {
    const { review } = props
    return (
        <div className="card card-body m-2">
            <div>{renderStars(review.stars)}</div>
            <div>{review.author}</div>
            <div>{review.body}</div>
        </div>
    )
}

export default Review