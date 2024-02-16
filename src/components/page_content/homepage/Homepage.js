import { useEffect, useContext, useRef } from "react";
import feature1Icon from "../../../icons/feature1-icon.png";
import feature2Icon from "../../../icons/feature2-icon.png";
import feature3Icon from "../../../icons/feature1-icon.png";
import FeatureInfo from "./FeatureInfo";
import {MainContext} from "../../../MainContent";

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
        <div id="homepage-content">
        <section className="hp-homepage-text reveal" ref={el => revealingElements.current[0] = el}>
            <h1>Podigni svoj kviz na novu razinu uz <br /><span className="text-coloring">Quizko</span></h1>
        </section>
        <section className="hp-feature-info-section reveal" ref={el => revealingElements.current[1] = el}>
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