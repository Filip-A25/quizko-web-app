import { Link } from "react-router-dom";

function ActionSuccessMessage(props) {
    return (
        <div id="action-success-message-content">
            <section className="asm-section">
                <h1>{props.mainMessage}</h1>
                 {props.secondaryMessages.map((message, index) => {
                    return <h4 key={index}>{message}</h4>
                 })}
                <button className="asm-button h-10">
                    <Link to={props.path} className="asm-link">{props.linkText}</Link>
                </button>
            </section>
        </div>
    )
}

export default ActionSuccessMessage;