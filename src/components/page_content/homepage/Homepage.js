import { useEffect, useContext, useRef } from "react";
import feature1Icon from "../../../icons/feature1-icon.png";
import feature2Icon from "../../../icons/feature2-icon.png";
import feature3Icon from "../../../icons/feature3-icon.png";
import FeatureInfo from "./FeatureInfo";
import {MainContext} from "../../../MainContent";
import "../../../styles.css";

function Homepage() {
    const {handleElementReveal} = useContext(MainContext);
    const revealingElements = useRef([]);

    useEffect(() => {
        handleElementReveal(revealingElements);
        window.addEventListener("scroll", handleElementReveal(revealingElements));

        return () => {
            window.removeEventListener("scroll", handleElementReveal(revealingElements));
        }
    }, [])

    return (
        <div id="homepage-content" className="h-[135vh] sm:h-[145vh] md:h-[110vh]">
        <section className="hp-homepage-text reveal h-[18%] sm:h-[16%] md:h-[25%]" ref={el => revealingElements.current[0] = el}>
            <h1 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl">Podigni svoj kviz na novu razinu uz <br />
                <span className="text-coloring 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-[3rem] text-[2.75rem] md:mt-2">Quizko</span>
            </h1>
        </section>
        <section className="hp-feature-info-section reveal flex flex-col justify-center items-center md:flex-row" ref={el => revealingElements.current[1] = el}>
            <FeatureInfo
                icon={feature1Icon}
                desc="Sam biraš vrstu, količinu i način odgovaranja na pitanja."
            />
            <FeatureInfo
                icon={feature2Icon}
                desc="Možeš spremiti sve svoje kvizove u svoju kolekciju."
            />
            <FeatureInfo
                icon={feature3Icon}
                desc="Sve spremljene kvizove možeš uređivati."
            />
        </section>
      </div>
    )
}

export default Homepage;