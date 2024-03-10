import { useContext, useState } from "react";
import logo from "../logos/quizko-logo.png";
import { Link } from "react-router-dom";
import "../styles.css";
import { MainContext } from "../MainContent";

function MobileNavBar() {
    const {handleMenuDisplay, handleAnimateButton, topAnimatedClass, bottomAnimatedClass, midAnimatedClass} = useContext(MainContext);

    return (
        <div id="mobile-navbar-element" className="flex justify-between">
            <div className="logo-section flex items-center w-[30%] h-[100%] ml-8">
                <Link to="/">
                    <img src={logo} alt="Quizko Logo" className="h-[42px]"></img>
                </Link>
            </div>
            <div className="menu-section flex items-center justify-end w-[30%] h-[100%] mr-8">
                <button className="h-[4vh] w-[6vw] flex flex-col justify-around cursor-pointer group transition-transform" onClick={() => {
                    handleMenuDisplay();
                    handleAnimateButton();
                }}>
                    <div className={topAnimatedClass}></div>
                    <div className={midAnimatedClass}></div>
                    <div className={bottomAnimatedClass}></div>
                </button>
            </div>
        </div>
    )
}

export default MobileNavBar;


/*
group transition-transform

group-hover:rotate-[45deg] group-hover:translate-y-[1vh] transition-transform
group-hover:rotate-[-45deg] group-hover:translate-y-[-1vh] transition-transform
*/