import NavButton from "./NavButton";
import logo from "../logos/quizko-logo.png";
import { Link } from "react-router-dom";
import { useState, Fragment } from "react";
import "../styles.css";

function NavBar({ position }) {
  const [userStatus, setUserStatus] = useState("registered_user");
  /*
    Za isprobavanje prikaza stranice prijavljenom korisniku i neprijavljenom korisniku.
    unregistered_user - neregistrirani korisnik
    registered user - registrirani korisnik
  */

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
          {userStatus === "registered_user" || userStatus === "admin_user" ? (
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
          ) : null}
        </div>
        <div className="auth-buttons-section">
          {userStatus === "unregistered_user" && (
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
          {userStatus === "registered_user" || userStatus === "admin_user" ? (
            <NavButton
              index={7}
              title="Odjava"
              path="/prijava"
              isContent={false}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default NavBar;
