import "../../../styles.css";

function FeatureInfo(props) {
    return (
        <div className="fi-element bg-slate-50 mb-4 md:mr-6 2xl:w-72 2xl:h-96 xl:w-[17rem] xl:h-[22rem] lg:w-[22rem] lg:h-[22rem]
        md:w-[20rem] md:h-[20rem] sm:w-[24rem] sm:h-[12rem] w-[22rem] h-[10rem]">
            <section className="fi-icon-section flex justify-center items-center">
                <img src={props.icon} alt="Feature Icon" className="2xl:w-28 2xl:h-28 xl:w-[6.5rem] xl:h-[6.5rem] lg:w-24 lg:h-24
                md:w-20 md:h-20 sm:w-18 sm:h-18 w-16 h-16"></img>
            </section>
            <section className="fi-text-section">
                <span className="lg:text-xl md:text-md text-md">{props.desc}</span>
            </section>
        </div>
    )
}

export default FeatureInfo;