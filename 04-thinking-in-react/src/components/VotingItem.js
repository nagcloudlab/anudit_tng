import React, { useState } from 'react'
import styles from './VotingItem.module.css'

function VotingItem(props) {
    console.log("VotingItem->render()");
    let { item, onVote } = props;
    let [likes, setLikes] = useState(0);
    let [dislikes, setDislikes] = useState(0);
    const handleLikeClickEvent = (e) => {
        setLikes(likes + 1);
        onVote({ item, voteType: "like" });
    }
    const handleDislikeClickEvent = (e) => {
        setDislikes(dislikes + 1);
        onVote({ item, voteType: "dislike" });
    }
    return (
        <div>
            <div className={`card card-body`}>
                <div className='item'>
                    <div className=
                        {styles.bg}>{item}
                        <hr />
                        {likes - dislikes}
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-primary" onClick={handleLikeClickEvent}>
                            <i className="fa fa-thumbs-up"></i>
                        </button>
                        <button className="btn btn-danger" onClick={handleDislikeClickEvent}>
                            <i className="fa fa-thumbs-down"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default VotingItem;

