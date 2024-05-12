import NavButton from "./NavButton";
import logo from "../logos/quizko-logo.png";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useContext } from "react";
import {MainContext} from "../MainContent";
import "../styles.css";

function NavBar({ position }) {
  const {navigate, isLoggedIn, setIsLoggedIn} = useContext(MainContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);

    navigate("/");
  };

  return (
    <div id="navbar-element" className={`navbar-${position}`}>
      <section className="navbar-content-section">
        <div className="logo-section pl-2 w-[30%] md:pl-0 md:w-[20%]">
          <Link to="/">
            <img
              src={logo}
              alt="quizko app logo"
              className="h-9 sm:h-10 lg:h-11"
            ></img>
          </Link>
        </div>
        <div className="nav-buttons-section grid w-[30%] md:w-[72%] lg:w-[50%] xl:w-[40%]">
          {isLoggedIn && (
            <Fragment>
              <NavButton index={1} title="Početna" path="/" isContent={true} />
              <NavButton
                index={2}
                title="Kreiraj kviz"
                path="/kreiraj-kviz"
                isContent={true}
              />
              <NavButton
                index={3}
                title="Moji kvizovi"
                path="/moji-kvizovi"
                isContent={true}
              />
              <NavButton
                index={4}
                title="Moj profil"
                path="/moj-profil"
                isContent={true}
              />
            </Fragment>
          )}
        </div>
        <div className="auth-buttons-section">
          {!isLoggedIn && (
            <Fragment>
              <NavButton
                index={5}
                title="Prijava"
                path="/prijava"
                isContent={false}
              />
              <NavButton
                index={6}
                title="Registracija"
                path="/registracija"
                isContent={false}
              />
            </Fragment>
          )}
          {isLoggedIn && (
            <NavButton
              index={7}
              title="Odjava"
              path="/"
              isContent={false}
              onClick={handleLogout}
            />
          )}
        </div>
      </section>
    </div>
  );
}

export default NavBar;
