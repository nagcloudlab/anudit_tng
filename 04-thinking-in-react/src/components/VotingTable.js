
export default function VotingTable(props) {
    console.log("VotingTable->render()")
    const { votingLines } = props;
    const renderVotingLines = () => {
        if (votingLines.length === 0) return (<tr><td colSpan="3">No data</td></tr>)
        return votingLines.map((line, index) => {
            return (
                <tr key={index}>
                    <td>{line.item}</td>
                    <td>{line.likes}</td>
                    <td>{line.dislikes}</td>
                </tr>
            )
        })
    }
    return (
        <div className='card card-body'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Like</th>
                        <th>Dislike</th>
                    </tr>
                </thead>
                <tbody>
                    {renderVotingLines()}
                </tbody>
            </table>
        </div>
    )
}
