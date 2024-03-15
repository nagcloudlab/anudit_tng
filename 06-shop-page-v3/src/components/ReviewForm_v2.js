import { useState } from "react";

// to manage complex forms, recommended third party libraries are 
// Formik, Redux-Form, Final-Form

function ReviewForm(props) {
    const { onNewReview } = props
    const [isFormOpen, setIsFormOpen] = useState(false)

    const [review, setReview] = useState({
        author: '',
        stars: 5,
        body: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setReview({ ...review, [id]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onNewReview) {
            onNewReview(review)
        }
        // reset the form
        setReview({
            author: '',
            stars: 5,
            body: ''
        })
        // 
        setIsFormOpen(false)
    }

    if (!isFormOpen) {
        return (
            <button onClick={() => setIsFormOpen(true)} className="btn btn-warning mt-1">
                <i className="fa fa-plus"></i>
            </button>
        )
    }
    else
        return (
            <div className="card card-body mt-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Author</label>
                        <input className="form-control" id="author" value={review.author} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Stars</label>
                        <select className="form-control" id="stars" value={review.stars} onChange={handleChange}>
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n}>{n}</option>
                            ))}
                        </select>
                        <div className="text-danger">
                            {review.stars < 3 ? 'Expected a good rating' : ''}
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea className="form-control" id="body" value={review.body} onChange={handleChange}></textarea>
                    </div>
                    <hr />
                    <button onClick={() => setIsFormOpen(false)} className="btn btn-secondary mr-2" type="button">cancel</button>
                    <button className="btn btn-primary">submit</button>
                    <hr />
                </form>
            </div>
        )
}

export default ReviewForm;