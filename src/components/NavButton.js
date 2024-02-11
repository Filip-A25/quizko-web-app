import { useState, useEffect, useContext } from 'react';
import "../styling/content-styles.scss";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";
import logInIcon from "../icons/sign-in-icon.png";
import registerIcon from "../icons/register-icon.png";
import { MainContext } from "./MainContent";

function NavButton(props) {
    const [buttonClass, setButtonClass] = useState("");
    const [iconSrc, setIconSrc] = useState("");

    const {setActiveIndex} = useContext(MainContext);

    const handleActiveChange = () => {
        if (props.isContent) setActiveIndex(props.index);
    }

    // Postavlja klase za buttone na prvom renderu.
    useEffect(() => {
        if (props.isContent) setButtonClass("nav-button nav-button-inactive");
        else setButtonClass("auth-button");
    }, [])

    // Postavlja active klasu za button koji je kliknut.
    useEffect(() => {
        if (props.isActive) setButtonClass("nav-button nav-button-active");
        if (!props.isActive && props.isContent) setButtonClass("nav-button nav-button-inactive");
    }, [props.isActive])

    useEffect(() => {
        switch(props.index) {
            case 1:
                setIconSrc(homeIcon);
                break;
            case 2:
                setIconSrc(createIcon);
                break;
            case 3:
                setIconSrc(myQuizzesIcon);
                break;
            case 4:
                setIconSrc(profileIcon);
                break;
            case 5:
                setIconSrc(logInIcon);
                break;
            case 6:
                setIconSrc(registerIcon);
        }
    }, [])

    return (
        <button className={buttonClass} onClick={() => handleActiveChange()}>
            <img className="nav-button-icon" src={iconSrc}></img>
            <span className="nav-button-text">{props.title}</span>
        </button>
    )
}

export default NavButton;