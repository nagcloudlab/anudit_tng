import { useState, useRef } from "react";


function ReviewForm(props) {
    const { onNewReview } = props
    const [isFormOpen, setIsFormOpen] = useState(false)

    const authorRef = useRef();
    const starsRef = useRef();
    const bodyRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            author: authorRef.current.value,
            stars: starsRef.current.value,
            body: bodyRef.current.value
        }
        if (onNewReview) {
            onNewReview(review)
        }
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
                        <input className="form-control" ref={authorRef} />
                    </div>
                    <div className="form-group">
                        <label>Stars</label>
                        <select className="form-control" ref={starsRef}>
                            {[1, 2, 3, 4, 5].map(n => (
                                <option key={n}>{n}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Body</label>
                        <textarea className="form-control" ref={bodyRef}></textarea>
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