import "../../../styles.css";

function FeatureInfo(props) {
  return (
    <div className="fi-element bg-slate-50 mb-4 w-[18rem] h-[10rem] sm:w-[10rem] sm:h-[10rem] md:w-[20rem] md:h-[20rem] md:mr-6 lg:w-[22rem] lg:h-[22rem] xl:w-[17rem] xl:h-[22rem] 2xl:w-72 2xl:h-96">
      <section className="fi-icon-section flex justify-center items-center">
        <img
          src={props.icon}
          alt="Feature Icon"
          className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-[6.5rem] xl:h-[6.5rem] 2xl:w-28 2xl:h-28"
        ></img>
      </section>
      <section className="fi-text-section">
        <span className="text-md md:text-md lg:text-xl">{props.desc}</span>
      </section>
    </div>
  );
}

export default FeatureInfo;
