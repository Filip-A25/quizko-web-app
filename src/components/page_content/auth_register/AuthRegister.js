import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";

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

  const handleRegistration = (firstname, lastname, email, password) => {
    //replace with post req logic
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
        <h2>Registrirajte se</h2>
        <form
          className="al-form"
          onSubmit={handleRegistration(firstname, lastname, email, password)}
        >
          <label>
            Ime:
            <br />
            <input
              type="text"
              className="auth-form-input"
              id="ar-firstname-input"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </label>
          <label>
            Prezime:
            <br />
            <input
              type="text"
              className="auth-form-input"
              id="ar-lastname-input"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </label>
          <label>
            E-mail adresa:
            <br />
            <input
              type="email"
              className="auth-form-input"
              id="ar-email-nick-input"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label>
            Lozinka:
            <br />
            <input
              type="password"
              className="auth-form-input"
              id="ar-password-input"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <label>
            Potvrdi lozinku:
            <br />
            <input
              type="password"
              className="auth-form-input"
              id="ar-password-input"
              onChange={(e) => {
                if (e.target.value != password) {
                  console.log("Passwords don't match");
                }
              }}
            />
          </label>
          <input
            type="submit"
            className="auth-form-input"
            id="ar-submit-input"
            value="Prijavi se"
          />
        </form>
      </section>
    </div>
  );
}

export default AuthRegister;
