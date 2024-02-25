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

  //modal state
  const [editOn, setEditOn] = useState(0);

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
        {(() => {
          switch (editOn) {
            case 0:
              return (
                <>
                  <h1 className="mp-heading">Moj profil</h1>
                  <div className="mp-fields">
                    <div className="mp-fields-field">
                      <h3 className="mp-field-heading">E-mail</h3>
                      <p className="mp-field-data">{email}</p>
                      <button
                        className="mp-field-button"
                        onClick={() => setEditOn(1)}
                      >
                        <img src={icon} alt="uredi" />
                        <span>Uredi</span>
                      </button>
                    </div>
                    <div className="mp-fields-field">
                      <h3 className="mp-field-heading">Nadimak</h3>
                      <p className="mp-field-data">{nickname}</p>
                      <button
                        className="mp-field-button"
                        onClick={() => setEditOn(2)}
                      >
                        <img src={icon} alt="uredi" />
                        <span>Uredi</span>
                      </button>
                    </div>
                    <div className="mp-fields-field">
                      <h3 className="mp-field-heading">Lozinka</h3>
                      <p className="mp-field-data">{password}</p>
                      <button
                        className="mp-field-button"
                        onClick={() => setEditOn(3)}
                      >
                        <img src={icon} alt="uredi" />
                        <span>Uredi</span>
                      </button>
                    </div>
                  </div>
                  <button className="mp-delete-button">Izbriši profil</button>
                </>
              );
            case 1:
              return (
                <>
                  <form className="mp-edit-form">
                    <label className="mp-edit-label" htmlFor="emailOld">
                      Stari e-mail
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="text"
                        placeholder="Unesite svoj stari e-mail"
                        id="emailOld"
                        name="emailOld"
                      />
                    </div>
                    <label className="mp-edit-label" htmlFor="newEmail">
                      Novi e-mail
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="text"
                        placeholder="Unesite novi e-mail"
                        id="newEmail"
                        name="newEmail"
                      />
                    </div>
                    <div className="mp-edit-forget">
                      <p className="mp-edit-forget-text">
                        Zaboravili ste e-mail?
                      </p>
                      <a href="#" className="mp-edit-forget-link">
                        Kliknite ovdje.
                      </a>
                    </div>
                    <div className="mp-edit-buttons">
                      <input
                        type="submit"
                        value="Spremi promjene"
                        className="mp-edit-submit"
                      />
                      <button
                        className="mp-edit-back"
                        onClick={() => {
                          setEditOn(0);
                        }}
                      >
                        Odustani
                      </button>
                    </div>
                  </form>
                </>
              );
            case 2:
              return (
                <>
                  <form className="mp-edit-form">
                    <label className="mp-edit-label" htmlFor="oldNickname">
                      Stari nadimak
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="e-mail"
                        placeholder="Unesite svoj stari nadimak"
                        id="nicknameOld"
                        name="nicknameOld"
                      />
                    </div>
                    <label className="mp-edit-label" htmlFor="newNickname">
                      Novi nadimak
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="e-mail"
                        placeholder="Unesite novi nadimak"
                        id="nicknameNew"
                        name="nicknameNew"
                      />
                    </div>
                    <div className="mp-edit-forget">
                      <p className="mp-edit-forget-text">
                        Zaboravili ste nadimak?
                      </p>
                      <a href="#" className="mp-edit-forget-link">
                        Kliknite ovdje.
                      </a>
                    </div>
                    <div className="mp-edit-buttons">
                      <input
                        type="submit"
                        value="Spremi promjene"
                        className="mp-edit-submit"
                      />
                      <button
                        className="mp-edit-back"
                        onClick={() => {
                          setEditOn(0);
                        }}
                      >
                        Odustani
                      </button>
                    </div>
                  </form>
                </>
              );
            case 3:
              return (
                <>
                  <form className="mp-edit-form">
                    <label className="mp-edit-label" htmlFor="passwordOld">
                      Stara lozinka
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="password"
                        placeholder="Unesite svoju staru lozinku"
                        id="passwordOld"
                        name="passwordOld"
                      />
                    </div>
                    <label className="mp-edit-label" htmlFor="newPassword">
                      Nova lozinka
                    </label>
                    <div className="mp-edit-input">
                      <input
                        type="password"
                        placeholder="Unesite novu lozinku"
                        id="newPassword"
                        name="newPassword"
                      />
                      <input
                        type="password"
                        placeholder="Ponovno unesite novu lozinku"
                        id="newPassword"
                        name="newPassword"
                      />
                    </div>
                    <div className="mp-edit-forget">
                      <p className="mp-edit-forget-text">
                        Zaboravili ste lozinku?
                      </p>
                      <a href="#" className="mp-edit-forget-link">
                        Kliknite ovdje.
                      </a>
                    </div>
                    <div className="mp-edit-buttons">
                      <input
                        type="submit"
                        value="Spremi promjene"
                        className="mp-edit-submit"
                      />
                      <button
                        className="mp-edit-back"
                        onClick={() => {
                          setEditOn(0);
                        }}
                      >
                        Odustani
                      </button>
                    </div>
                  </form>
                </>
              );
            default:
              return <h1>Nešto je pošlo po krivu</h1>;
          }
        })()}
      </div>
    </div>
  );
}

export default MyProfile;
