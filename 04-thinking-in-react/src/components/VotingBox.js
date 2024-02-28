
import { useState } from "react";
import VotingItem from "./VotingItem";
import VotingTable from './VotingTable';

import styles from './VotingBox.module.css';

function VotingBox(props) {
    console.log("VotingBox->render()")
    const [votingItems] = useState([
        "react.js",
        "angular",
        "vue.js",
    ])
    const [votingLines, setVotingLines] = useState([])
    const handleVote = (e) => {
        let { item, voteType } = e;
        const existingLine = votingLines.find(line => line.item === item);
        if (!existingLine) {
            const newLine = {
                item,
                likes: voteType === "like" ? 1 : 0,
                dislikes: voteType === "dislike" ? 1 : 0
            }
            setVotingLines([...votingLines, newLine])
        }
        else {
            const newVotingLines = votingLines.map(line => {
                if (line.item === item) {
                    if (voteType === "like") {
                        return { ...line, likes: line.likes + 1 }
                    }
                    else {
                        return { ...line, dislikes: line.dislikes + 1 }
                    }
                }
                return line;
            })
            setVotingLines(newVotingLines)
        }

    }

    const renderVotingItems = () => {
        return votingItems.map((item, index) => {
            return <VotingItem key={index} item={item} onVote={handleVote} />
        })
    }

    const renderVotingTable = () => {
        return <VotingTable votingLines={votingLines} />
    }

    return (
        <div className={"card"}>
            <div className={`card-header`}>
                <div className={styles.bg}>Voting Box</div>
            </div>
            <div className={`card-body`}>
                <div className="d-flex justify-content-around flex-wrap">
                    {renderVotingItems()}
                </div>
                <hr />
                {renderVotingTable()}
            </div>
        </div>
    )
}

export default VotingBox;