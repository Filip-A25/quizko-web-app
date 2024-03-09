import { useRef, useContext, useEffect, useState, createContext } from "react";
import { MainContext } from "../../../MainContent";
import EditData from "./EditData";

//import icon
import icon from "../../../icons/editIcon.svg";

const ProfileContext = createContext();

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
  }, [handleElementReveal, editOn]);

  return (
    <ProfileContext.Provider
      value={{ setEditOn, editOn, setEmail, setNickname, setPassword }}
    >
      <div id="my-profile-content">
        <div className="component-content">
          {editOn === 0 ? (
            <>
              <section
                className="reveal"
                ref={(el) => (revealingElements.current[0] = el)}
              >
                <h2 className="mp-heading">Moj profil</h2>

                <table className="mp-fields">
                  <tbody>
                    <tr className="mp-fields-field">
                      <td>E-mail</td>
                      <td>{email}</td>
                      <td>
                        <button
                          className="mp-field-button"
                          onClick={() => setEditOn(1)}
                        >
                          <img src={icon} alt="uredi"></img>
                          <span>Uredi</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="mp-fields-field">
                      <td>Nadimak</td>
                      <td>{nickname}</td>
                      <td>
                        <button
                          className="mp-field-button"
                          onClick={() => setEditOn(2)}
                        >
                          <img src={icon} alt="uredi"></img>
                          <span>Uredi</span>
                        </button>
                      </td>
                    </tr>
                    <tr className="mp-fields-field">
                      <td>Lozinka</td>
                      <td>{password}</td>
                      <td>
                        <button
                          className="mp-field-button"
                          onClick={(e) => {
                            e.preventDefault();
                            setEditOn(3);
                          }}
                        >
                          <img src={icon} alt="uredi"></img>
                          <span>Uredi</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button className="mp-delete-button">Izbriši profil</button>
              </section>
            </>
          ) : editOn === 1 ? (
            <EditData
              index={1}
              headers={{
                h1: "Uredi e-mail",
                old: "Stari E-mail",
                new: "Novi E-mail",
                forgot: "Zaboravili ste e-mail?",
              }}
              placeholders={{
                old: "Unesite stari e-mail",
                new: "Unesite novi e-mail",
              }}
              ids={{
                old: "oldEmail",
                new: "newEmail",
              }}
            />
          ) : editOn === 2 ? (
            <EditData
              index={2}
              headers={{
                h1: "Uredi nadimak",
                old: "Stari nadimak",
                new: "Novi nadimak",
                forgot: "Zaboravili ste nadimak?",
              }}
              placeholders={{
                old: "Unesite stari nadimak",
                new: "Unesite novi nadimak",
              }}
              ids={{
                old: "oldNickname",
                new: "newNickname",
              }}
            />
          ) : (
            <EditData
              index={3}
              headers={{
                h1: "Uredi lozinku",
                old: "Stara lozinka",
                new: "Nova lozinka",
                forgot: "Zaboravili ste lozinku?",
              }}
              placeholders={{
                old: "Unesite staru lozinku",
                new: "Unesite novu lozinku",
                confirm: "Ponovo unesite novu lozinku",
              }}
              ids={{
                old: "oldPassword",
                new: "newPassword",
              }}
            />
          )}
        </div>
      </div>
    </ProfileContext.Provider>
  );
}

export default MyProfile;
export { ProfileContext };
