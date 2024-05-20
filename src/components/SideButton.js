import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import homeIcon from "../icons/home-icon.png";
import createIcon from "../icons/create-quiz-icon.png";
import myQuizzesIcon from "../icons/my-quizzes-icon.png";
import profileIcon from "../icons/profile-icon.png";
import logOutIcon from "../icons/sign-out-icon.png";

function SideButton(props) {
  const [iconSrc, setIconSrc] = useState("");
  const navigate = useNavigate();

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
        return isActive ? "navlink-active cursor-pointer" : "cursor-pointer";
      }}
    >   
      {props.isHomeButton ? (
        <button
          className="h-14 w-full flex justify-center items-center lg:justify-start transition-all px-7"
          onClick={handleClick}
        >
          <img
            src={iconSrc}
            alt={props.title}
            className="sbar-button-icon h-6 lg:mr-5"
          ></img>
          <span className="hidden lg:inline-block">{props.title}</span>
        </button>
      ) : (
        <button className=" h-14 w-full flex justify-center items-center lg:justify-start transition-all px-7">
          <img
            src={iconSrc}
            alt={props.title}
            className="sbar-button-icon h-6 lg:mr-5"
          ></img>
          <span className="hidden lg:inline-block">{props.title}</span>
        </button>
      )}
    </NavLink>
  );
}

export default SideButton;
