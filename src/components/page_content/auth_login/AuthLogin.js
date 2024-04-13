import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";
import { Link } from "react-router-dom";
import "../../../styles.css";
import { handleLogin } from "../../../services/api_user";

function AuthLogin() {
  const {
    handleElementReveal,
    emailWrapClass,
    passwordWrapClass,
    handleEmailCheck,
    handlePasswordCheck,
  } = useContext(MainContext);
  const revealingElements = useRef([]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

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

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    handleEmailCheck(e.target[0].value);
    //handlePasswordCheck(e.target[1].value);
    try {
      const resp = await handleLogin(loginData);
      const data = resp.data;
      localStorage.setItem("token", JSON.stringify(data.token));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      id="authlogin-content"
      className="h-[110vh] md:h-[70vh] pt-[10%] sm:pt-[6%] md:pt-[3%]"
    >
      <section
        className="al-form-section reveal text-left w-[60vw] h-[45%] md:h-[75%] sm:w-[45vw] md:w-[35vw] lg:w-[32.5vw] 2xl:w-[25vw]"
        ref={(el) => (revealingElements.current[0] = el)}
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl">Prijavite se</h1>
        <form
          className="al-form flex-col text-sm md:text-base h-[75%] md:h-[78%] lg:h-[80%] lg:w-[90%]"
          onSubmit={(e) => handleLoginSubmit(e)}
        >
          <label>E-mail adresa</label>
          <div className={"al-email-nick-input-wrap" + " " + emailWrapClass}>
            <input
              name="email"
              type="email"
              className="auth-form-input h-10"
              id="al-email-nick-input"
              placeholder="Unesite svoju e-mail adresu"
              onChange={handleChange}
            />
          </div>
          <label>Lozinka</label>
          <div className={"al-password-inputwrap" + " " + passwordWrapClass}>
            <input
              name="password"
              type="password"
              className="auth-form-input h-10"
              id="al-password-input"
              placeholder="Unesite svoju lozinku"
              onChange={handleChange}
            />
          </div>
          <button
            className="auth-form-submit mt-[1.5vh] w-[100%] h-[6vh] md:mt-[2vh] md:h-[6vh]"
            id="al-submit-input"
          >
            <input type="submit" value="Prijavi se" />
          </button>
          <label className="forget-password-label">
            Zaboravili ste nadimak ili lozinku?{" "}
            <Link to="/">Kliknite ovdje.</Link>
          </label>
        </form>
      </section>
    </div>
  );
}

export default AuthLogin;
