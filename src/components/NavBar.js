import NavButton from "./NavButton";
import logo from "../logos/quizko-logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar-element">
      <section className="navbar-content-section">
        <div className="logo-section">
          <Link to="/">
            <img src={logo} height="45px" alt="quizko app logo"></img>
          </Link>
        </div>
        <div className="nav-buttons-section">
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
        </div>
        <div className="auth-buttons-section">
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
        </div>
      </section>
    </div>
  );
}

export default NavBar;
