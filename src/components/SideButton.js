import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";
import logOutIcon from "../icons/sign-out-icon.png";

function SideButton(props) {
    const [iconSrc, setIconSrc] = useState("");

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
                setIconSrc(logOutIcon);
                break;
            default:
                console.log(`Icon for an element with index ${props.index} doesn't exist.`);
        }
    }, [])

    return (
        <NavLink to={props.path}>
            <button className="h-14 w-full flex justify-center items-center transition-all">
                <img src={iconSrc} alt={props.title} className="h-6 group-hover:mr-3"></img>
                <span className="hidden group-hover:inline-block transition-all">{props.title}</span>
            </button>
        </NavLink>
    )
}

export default SideButton;