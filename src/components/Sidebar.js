import { NavLink } from "react-router-dom";
import logo from "../logos/quizko-logo.png";
import SideButton from "./SideButton";
import { useState, useContext } from "react";
import { MainContext } from "../MainContent";
import logOutIcon from "../icons/sign-out-icon.png";

function Sidebar() {
  const {handleLogout} = useContext(MainContext);

  const [isSidebarAnimated, setIsSidebarAnimated] = useState(false);

  const handleSidebarButtonClick = () => {
    setIsSidebarAnimated(true);
    setTimeout(() => {
      setIsSidebarAnimated(false);
    }, 3000);
  };

  return (
    <div
      id="sidebar-element"
      className={`group absolute left-0 h-screen md:w-[12vw] lg:w-[16vw] bg-[#E1BF57] transition-all duration-250 ease-in-out ${
        isSidebarAnimated ? "animate-sidebarHide" : "animate-sidebarShow"
      }`}
    >
      <header className="flex justify-center items-end h-20 animate-sidebarShow">
        <NavLink to="/">
          <img
            src={logo}
            alt="Quizko App Logo"
            className="h-8 md:h-8 lg:h-14 transition-[height] duration-250 ease-in-out"
          ></img>
        </NavLink>
      </header>
      <nav className="flex flex-col mt-24 animate-sidebarShow">
        <SideButton
          index={1}
          title="Početna"
          path="/"
          onClick={handleSidebarButtonClick}
          isHomeButton="true"
        />
        <SideButton index={2} title="Kreiraj kviz" path="/kreiraj-kviz" />
        <SideButton index={3} title="Moji kvizovi" path="/moji-kvizovi" />
        <SideButton index={4} title="Moj profil" path="/moj-profil" />
        <button className="h-14 w-full flex justify-center items-center lg:justify-start transition-all px-7" alt="Odjava" onClick={handleLogout}>
          <img
              src={logOutIcon}
              alt="Odjava"
              className="sbar-button-icon h-6 lg:mr-5"
            ></img>
            <span className="hidden lg:inline-block">Odjava</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar;
