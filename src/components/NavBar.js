import NavButton from "./NavButton";
import logo from "../logos/quizko-logo.png";
import { Link } from "react-router-dom";
import { useState, Fragment } from "react";

function NavBar() {
  const [userStatus, setUserStatus] = useState("registered_user");
  /*
    Za isprobavanje prikaza stranice prijavljenom korisniku i neprijavljenom korisniku.
    unregistered_user - neregistrirani korisnik
    registered user - registrirani korisnik
  */

  return (
    <div id="navbar-element">
      <section className="navbar-content-section">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} height="45px" alt="quizko app logo"></img>
          </Link>
        </div>
        <div className="nav-buttons-section">
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
              path="/"
              isContent={false}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default NavBar;
