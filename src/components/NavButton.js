import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styling/content-styles.scss";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";
import logInIcon from "../icons/sign-in-icon.png";
import registerIcon from "../icons/register-icon.png";

function NavButton(props) {
  const [buttonClass, setButtonClass] = useState("");
  const [iconSrc, setIconSrc] = useState("");

  useEffect(() => {
    if (props.isContent) setButtonClass("nav-button");
    else setButtonClass("auth-button");
  }, []);

  useEffect(() => {
    switch (props.index) {
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
  }, []);

  return (
    <NavLink
      to={props.path}
      className={({ isActive }) => {
        return isActive
          ? "navlink-element navlink-active"
          : "navlink-element navlink-inactive";
      }}
    >
      <button className={buttonClass}>
        <img className="nav-button-icon" src={iconSrc}></img>
        <span className="nav-button-text">{props.title}</span>
      </button>
    </NavLink>
  );
}

export default NavButton;
