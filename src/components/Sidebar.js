import { NavLink } from "react-router-dom";
import logo from "../logos/quizko-logo.png";
import SideButton from "./SideButton";

function Sidebar() {
    return (
        <div id="sidebar-element" className="group absolute left-0 h-screen w-[5vw] hover:w-[18vw] bg-[#E1BF57] transition-all duration-250 ease-in-out">
            <header className="flex justify-center items-center group-hover:items-end h-12 group-hover:h-20">
                <NavLink to="/">
                    <img src={logo} alt="Quizko App Logo" className="h-5 group-hover:h-14 transition-[height] duration-250 ease-in-out"></img>
                </NavLink>
            </header>
            <nav className="flex flex-col mt-32 group-hover:mt-24">
                <SideButton
                    index={1}
                    title="Početna"
                    path="/naslovnica"
                />
                <SideButton
                    index={2}
                    title="Kreiraj kviz"
                    path="/kreiraj-kviz"
                />
                <SideButton
                    index={3}
                    title="Moji kvizovi"
                    path="/moji-kvizovi"
                />
                <SideButton
                    index={4}
                    title="Moj profil"
                    path="/moj-profil"
                />
                <SideButton
                    index={5}
                    title="Odjava"
                    path="/naslovnica"
                />
            </nav>
        </div>
    )
}

export default Sidebar;