import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { Link } from 'react-router-dom';

function AuthRegister() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

  //state elements
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle reveal animation
  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal(revealingElements));

    return () => {
      window.removeEventListener(
        "scroll",
        handleElementReveal(revealingElements)
      );
    };
  }, []);

  const handleRegistration = (e, firstname, lastname, email, password) => {
    //replace with post req logic
    e.preventDefault();
    if (
      firstname !== "" &&
      lastname !== "" &&
      email !== "" &&
      password !== ""
    ) {
      console.log(
        `User with first name: ${firstname}, last name: ${lastname}, email: ${email} and password ${password} created`
      );
    } else {
      console.log("Something went wrong, please try registrating again");
    }
  };

  return (
    <div id="authregister-content">
      <section
        className="al-form-section reveal"
        ref={(el) => (revealingElements.current[0] = el)}
      >
        <h1>Registrirajte se</h1>
        <form
          className="al-form"
          onSubmit={(e) => handleRegistration(e, firstname, lastname, email, password)}
        >
          <label>Ime</label>
          <input
            type="text"
            className="auth-form-input"
            id="ar-firstname-input"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="Unesite svoje ime"
          />
          <label>Prezime</label>
          <input
            type="text"
            className="auth-form-input"
            id="ar-lastname-input"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Unesite svoje prezime"
          />
          <label>E-mail</label>
          <input
            type="email"
            className="auth-form-input"
            id="ar-email-nick-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Unesite svoj e-mail"
          />
          <label>Lozinka</label>
          <input
            type="password"
            className="auth-form-input"
            id="ar-password-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Unesite svoju lozinku"
          />
          <label>Potvrdi lozinku</label>
          <input
            type="password"
            className="auth-form-input"
            id="ar-confirm-password-input"
            onChange={(e) => {
              if (e.target.value != password) {
                console.log("Passwords don't match");
              }
            }}
            placeholder="Potvrdite svoju lozinku"
          />
          <input
            type="submit"
            className="auth-form-input"
            id="ar-submit-input"
            value="Prijavi se"
          />
          <label className="already-registered-label">Već imate korisnički račun? <Link to="/prijava">Prijavite se.</Link></label>
        </form>
      </section>
    </div>
  );
}

export default AuthRegister;
