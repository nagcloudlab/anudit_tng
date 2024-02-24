

// jsx => javascript xml => template syntax
function Clock(props) {
    let timeZone = props.timeZone;
    return (
        <div className="card">
            <div className="card-header">
                {timeZone}
            </div>
            <div className="card-body">
                {new Date().toLocaleTimeString('en-US', { timeZone })}
            </div>
        </div>
    )
}

function Board() {
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div><Clock timeZone="Asia/Kolkata" /></div>
                </div>
                <div className="col-4">
                    <div ><Clock timeZone="Asia/Dubai" /></div>
                </div>
                <div className="col-4">
                    <div><Clock timeZone="America/New_york" /></div>
                </div>
            </div>
        </div>
    )
}


setInterval(() => {
    ReactDOM.render(<Board />, document.getElementById('root'));
}, 1000);