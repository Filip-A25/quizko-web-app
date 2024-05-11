import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styling/content-styles.scss";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";
import logInIcon from "../icons/sign-in-icon.png";
import registerIcon from "../icons/register-icon.png";
import logOutIcon from "../icons/sign-out-icon.png";

function NavButton(props) {
  const [buttonClass, setButtonClass] = useState("");
  const [iconSrc, setIconSrc] = useState("");
  const navigate = useNavigate();

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
        break;
      case 7:
        setIconSrc(logOutIcon);
        break;
      default:
        console.log(
          `Icon for an element with index ${props.index} doesn't exist.`
        );
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (props.onClick) {
      props.onClick();
      setTimeout(() => {
        navigate(props.path);
      }, 600);
    }
  };

  return (
    <NavLink
      to={props.path}
      className={({ isActive }) => {
        return isActive
          ? "navlink-element navlink-active"
          : "navlink-element navlink-inactive";
      }}
    >
      <button className={buttonClass} onClick={handleClick}>
        <img className="nav-button-icon" alt="" src={iconSrc}></img>
        <span className="nav-button-text text-sm">{props.title}</span>
      </button>
    </NavLink>
  );
}

export default NavButton;
