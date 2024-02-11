import { useContext } from 'react';
import NavButton from "./NavButton";
import logo from "../logos/quizko-logo.png";
import { MainContext } from "./MainContent";

function NavBar() {
    const {activeIndex} = useContext(MainContext);

    return (
        <div id="navbar-element">
            <section className="navbar-content-section">
                <div className="logo-section">
                    <img src={logo} height="45px"></img>
                </div>
                <div className="nav-buttons-section">
                    <NavButton
                        index={1}
                        title="Početna"
                        isContent={true}
                        isActive={activeIndex == 1 ? true : false}
                    />
                    <NavButton
                        index={2}
                        title="Kreiraj kviz"
                        isContent={true}
                        isActive={activeIndex == 2 ? true : false}
                    />
                    <NavButton
                        index={3}
                        title="Moji kvizovi"
                        isContent={true}
                        isActive={activeIndex == 3 ? true : false}
                    />
                    <NavButton
                        index={4}
                        title="Moj profil"
                        isContent={true}
                        isActive={activeIndex == 4 ? true : false}
                    />
                </div>
                <div className="auth-buttons-section">
                    <NavButton
                        index={5}
                        title="Prijava"
                        isContent={false}
                        isActive={false}
                    />
                    <NavButton
                        index={6}
                        title="Registracija"
                        isContent={false}
                        isActive={false}
                    />
                </div>
            </section>
        </div>
    )
}

export default NavBar;