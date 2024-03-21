import { NavLink } from "react-router-dom";
import logo from "../logos/quizko-logo.png";
import SideButton from "./SideButton";

function Sidebar() {
    return (
        <div id="sidebar-element" className="group absolute left-0 h-screen w-[5vw] hover:w-[15vw] bg-[#E1BF57] transition-all">
            <header className="flex justify-center items-center h-12">
                <NavLink to="/">
                    <img src={logo} alt="Quizko App Logo" className="h-5"></img>
                </NavLink>
            </header>
            <nav className="flex flex-col mt-32">
                <SideButton
                    index={1}
                    title="Početna"
                    path="/"
                />
                <SideButton
                    index={2}
                    title="Početna"
                    path="/"
                />
                <SideButton
                    index={3}
                    title="Početna"
                    path="/"
                />
                <SideButton
                    index={4}
                    title="Početna"
                    path="/"
                />
                <SideButton
                    index={5}
                    title="Početna"
                    path="/"
                />
            </nav>
        </div>
    )
}

export default Sidebar;