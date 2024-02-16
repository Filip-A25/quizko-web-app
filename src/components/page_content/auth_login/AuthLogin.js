import { useRef, useContext, useEffect } from "react";
import { MainContext } from "../../../MainContent";

function AuthLogin() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

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

  return (
    <div id="authlogin-content">
      <section
        className="al-form-section reveal"
        ref={(el) => (revealingElements.current[0] = el)}
      >
        <h2>Prijavite se</h2>
        <form className="al-form">
          <label>
            E-mail ili nadimak
            <br />
            <input
              type="text"
              className="auth-form-input"
              id="al-email-nick-input"
            />
          </label>
          <label>
            Lozinka
            <br />
            <input
              type="text"
              className="auth-form-input"
              id="al-password-input"
            />
          </label>
          <input
            type="submit"
            className="auth-form-input"
            id="al-submit-input"
            value="Prijavi se"
          />
        </form>
      </section>
    </div>
  );
}

export default AuthLogin;
