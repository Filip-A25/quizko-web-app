import { useState, useEffect } from 'react';
import "../styling/content-styles.scss";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";

function NavButton(props) {
    const [buttonClass, setButtonClass] = useState("nav-button");
    const [iconSrc, setIconSrc] = useState("");
    const [isActive, setActive] = useState(1);

    useEffect(() => {
        if (props.index === isActive) setButtonClass("nav-button nav-button-active");
        else setButtonClass("standard-button nav-button");
    }, [isActive])

    const handleActiveChange = () => {
        setActive(props.index);
    }

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
        }
    }, [])

    return (
        <button className={buttonClass} onClick={() => handleActiveChange}>
            <img className="nav-button-icon" src={iconSrc}></img>
            <span className="nav-button-text">{props.title}</span>
        </button>
    )
}

export default NavButton;