import { useRef, useContext, useEffect, useState, Fragment } from "react";
import { MainContext } from "../../../MainContent";
import { Link } from "react-router-dom";
import ActionSuccessMessage from "../../ActionSuccessMessage";
import "../../../styles.css";
import { handleLogin, handleRegister } from "../../../services/api_user";

function AuthRegister() {
  const {
    handleElementReveal,
    nickWrapClass,
    emailWrapClass,
    passwordWrapClass,
    handleNicknameCheck,
    handleEmailCheck,
    handlePasswordCheck,
  } = useContext(MainContext);
  const [confirmWrapClass, setConfirmWrapClass] = useState("");
  const revealingElements = useRef([]);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    const nickCheck = handleNicknameCheck(e.target[0].value);
    const emailCheck = handleEmailCheck(e.target[1].value);
    const passwordCheck = handlePasswordCheck(e.target[2].value);
    if (!nickCheck || !emailCheck || !passwordCheck) return;

    setNickname(e.target[0].value);

    if (e.target[2].value !== e.target[3].value) {
      setConfirmWrapClass("password-auth-input-err-dif");
      return;
    }

    try {
      setEmail(e.target[1].value);
      setPassword(e.target[2].value);

      await handleRegister({
        username: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
        passwordConfirm: e.target[3].value,
      });
    } catch (err) {
      throw new Error(err);
    }

    setRegisterSuccess(true);
  };

  return (
    <Fragment>
      {!registerSuccess && (
        <div
          id="authregister-content"
          className="h-[110vh] md:h-[75vh] pt-[10%] sm:pt-[6%] md:pt-[3%]"
        >
          <section
            className="al-form-section reveal text-left w-[52.5vw] h-[55%] md:h-[100%] sm:w-[45vw] md:w-[35vw] lg:w-[30vw] xl:w-[25vw]"
            ref={(el) => (revealingElements.current[0] = el)}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl">
              Registrirajte se
            </h1>
            <form
              className="al-form flex-col text-sm md:text-base h-[87.5%] sm:h-[87.5%] md:h-[90%] lg:w-[90%] pt-4"
              onSubmit={(e) => handleRegisterSubmit(e)}
            >
              <label>Nadimak</label>
              <div className={nickWrapClass}>
                <input
                  type="text"
                  className="auth-form-input h-10"
                  id="ar-firstname-input"
                  placeholder="Unesite svoje ime"
                />
              </div>
              <label>E-mail</label>
              <div className={emailWrapClass}>
                <input
                  type="email"
                  className="auth-form-input h-10"
                  id="ar-email-nick-input"
                  placeholder="Unesite svoj e-mail"
                />
              </div>
              <label>Lozinka</label>
              <div className={passwordWrapClass}>
                <input
                  type="password"
                  className="auth-form-input h-10"
                  id="ar-password-input"
                  placeholder="Unesite svoju lozinku"
                />
              </div>
              <label>Potvrdi lozinku</label>
              <div className={confirmWrapClass}>
                <input
                  type="password"
                  className="auth-form-input h-10"
                  id="ar-confirm-password-input"
                  placeholder="Potvrdite svoju lozinku"
                />
              </div>
              <button
                className="auth-form-submit mt-[1.5vh] w-[100%] h-[6vh] md:mt-[1vh] md:h-[6vh]"
                id="ar-submit-input"
              >
                <input type="submit" value="Registriraj se" />
              </button>
              <label className="forget-password-label">
                Već imate korisnički račun?{" "}
                <Link to="/prijava">Prijavite se.</Link>
              </label>
            </form>
          </section>
        </div>
      )}

      {registerSuccess && (
        <ActionSuccessMessage
          mainMessage={`Hvala Vam na registraciji, ${nickname}!`}
          secondaryMessages={[
            "Zavirite u svoj e-mail sandučić.",
            "Poslali smo vam mail u kojem morate potvrditi registraciju.",
          ]}
          path="/potvrda-maila"
          linkText="Pošalji mail"
          password={password}
          email={email}
        />
      )}
    </Fragment>
  );
}

export default AuthRegister;
