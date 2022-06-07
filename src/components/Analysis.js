const Analysis = (props) => {
    return (
        <div className={props.whichData}>
            <h3>{props.whichData}</h3>
            <p className="info1">{props.info1}</p>
            <p className="info2">{props.info2}</p>
            <p className="info3">{props.info3}</p>
        </div>
    )
}

export default Analysis