function FeatureInfo(props) {
    return (
        <div className="fi-element">
            <section className="fi-icon-section">
                <img src={props.icon} alt="Feature Icon"></img>
            </section>
            <section className="fi-text-section">
                <span>{props.desc}</span>
            </section>
        </div>
    )
}

export default FeatureInfo;