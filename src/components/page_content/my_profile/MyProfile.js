import { useRef, useContext, useEffect, useState } from "react";
import { MainContext } from "../../../MainContent";

//import icon
import icon from "../../../icons/editIcon.svg";

function MyProfile() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

  //profile fields
  const [email, setEmail] = useState("dummy@dummy.com");
  const [nickname, setNickname] = useState("efos");
  const [password, setPassword] = useState("password");

  // logic for hiding password
  useEffect(() => {
    const passwordHider = () => {
      const length = password.length;
      setPassword("*".repeat(length));
    };

    passwordHider();
  }, [password]);

  useEffect(() => {
    handleElementReveal(revealingElements);
    window.addEventListener("scroll", handleElementReveal(revealingElements));

    return () => {
      window.removeEventListener(
        "scroll",
        handleElementReveal(revealingElements)
      );
    };
  }, [handleElementReveal]);

  return (
    <div id="my-profile-content">
      <div className="component-content">
        <h1 className="mp-heading">Moj profil</h1>
        <div className="mp-fields">
          <div className="mp-fields-field">
            <h3 className="mp-field-heading">E-mail</h3>
            <p className="mp-field-data">{email}</p>
            <button className="mp-field-button">
              <img src={icon} alt="uredi" />
              <span>Uredi</span>
            </button>
          </div>
          <div className="mp-fields-field">
            <h3 className="mp-field-heading">Nadimak</h3>
            <p className="mp-field-data">{nickname}</p>
            <button className="mp-field-button">
              <img src={icon} alt="uredi" />
              <span>Uredi</span>
            </button>
          </div>
          <div className="mp-fields-field">
            <h3 className="mp-field-heading">Lozinka</h3>
            <p className="mp-field-data">{password}</p>
            <button className="mp-field-button">
              <img src={icon} alt="uredi" />
              <span>Uredi</span>
            </button>
          </div>
        </div>
        <button className="mp-delete-button">Izbriši profil</button>
      </div>
    </div>
  );
}

export default MyProfile;
