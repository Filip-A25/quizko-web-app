import { useRef, useContext, useEffect, useState, Fragment } from "react";
import { MainContext } from "../../../MainContent";
import { Link } from 'react-router-dom';
import ActionSuccessMessage from "../../ActionSuccessMessage";
import "../../../styles.css";

function AuthRegister() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  //state elements
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle reveal animation
  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal);

    return () => {
      window.removeEventListener(
        "scroll",
        handleElementReveal(revealingElements)
      );
    };
  }, []);

  const handleRegistration = (e, nickname, email, password) => {
    //replace with post req logic
    e.preventDefault();
    const specialCharsNameFormat = /[ `!#@$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;
    const specialCharsEmailFormat = /[ `!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

    const trimmedNickname = nickname.replace(/\s/g, "");
    const trimmedEmail = email.replace(/\s/g, "");

    if (!specialCharsNameFormat.test(trimmedNickname)) {
      if (trimmedNickname === "") console.log("Error: Polje nadimak mora biti ispunjeno.");
      else if (trimmedNickname !== "" && trimmedNickname.length < 3) console.log("Error: Nadimak ne smije biti kraći od 3 znaka.");
      else if (trimmedNickname !== "" && trimmedNickname.length > 16) console.log("Error: Nadimak ne smije biti duži od 16 znakova.");
      else console.log(`Uneseni nadimak ${nickname} odgovara kriterijima.`);
    } else console.log("Nadimak ne smije sadržavati posebne znakove.");

    if (!specialCharsEmailFormat.test(trimmedEmail)) {
      if (trimmedEmail === "") console.log("Error: Polje e-mail mora biti ispunjeno.");
      else console.log(`Uneseni e-mail ${email} odgovara kriterijima.`);
    } else console.log("E-mail ne smije sadržavati posebne znakove.");
  }

  return (
    <Fragment>
    {!registerSuccess && (<div id="authregister-content" className="h-[110vh] md:h-[70vh] pt-[10%] sm:pt-[6%] md:pt-[3%]">
      <section
        className="al-form-section reveal text-left w-[52.5vw] h-[55%] md:h-[95%] sm:w-[45vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw]"
        ref={(el) => (revealingElements.current[0] = el)}
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl">Registrirajte se</h1>
        <form
          className="al-form flex-col text-sm md:text-base h-[87.5%] sm:h-[87.5%] md:h-[85%] lg:w-[90%]"
          onSubmit={(e) => handleRegistration(e, nickname, email, password)}
        >
          <label>Nadimak</label>
          <input
            type="text"
            className="auth-form-input"
            id="ar-firstname-input"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            placeholder="Unesite svoje ime"
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
              if (e.target.value !== password) {
                console.log("Passwords don't match");
              }
            }}
            placeholder="Potvrdite svoju lozinku"
          />
          <button className="auth-form-submit mt-[1.5vh] w-[100%] h-[6vh] md:mt-[1vh] md:h-[6vh]" id="ar-submit-input">
            <input
              type="submit"
              value="Prijavi se"
            />
          </button>
          <label className="forget-password-label">Već imate korisnički račun? <Link to="/prijava">Prijavite se.</Link></label>
        </form>
      </section>
    </div>)}

    {registerSuccess && (
      <ActionSuccessMessage
        mainMessage={`Hvala Vam na registraciji, ${nickname}!`}
        secondaryMessages={[
          "Zavirite u svoj e-mail sandučić.",
          "Poslali smo vam mail u kojem morate potvrditi registraciju."
        ]}
        path="/prijava"
        linkText="Prijava"
      />
    )}
    </Fragment>
  );
}

export default AuthRegister;
