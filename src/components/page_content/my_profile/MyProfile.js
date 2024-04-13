import { useRef, useContext, useEffect, useState, createContext } from "react";
import { MainContext } from "../../../MainContent";
import EditData from "./EditData";
import "../../../styles.css";

//import icon
import icon from "../../../icons/editIcon.svg";
import { getMyProfile } from "../../../services/api_user";

const ProfileContext = createContext();

function MyProfile() {
  const { handleElementReveal } = useContext(MainContext);
  const revealingElements = useRef([]);

  //profile fields
  const [email, setEmail] = useState("dummy@dummy.com");
  const [nickname, setNickname] = useState("hat");
  const [password, setPassword] = useState("");

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

  const fetchData = async () => {
    try {
      const resp = await getMyProfile();
      console.log(resp);
      setEmail(resp.email);
      setPassword(resp.password);
      setNickname(resp.username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        setEditOn,
        editOn,
        setEmail,
        setNickname,
        setPassword,
        password,
      }}
    >
      <div
        id="my-profile-content"
        className="flex h-screen w-screen md:w-[88vw] lg:w-[84vw] absolute right-0"
      >
        <div className="component-content flex justify-center md:block h-full w-full md:ml-72 md:w-[35vw] lg:w-[30vw] xl:w-[25vw]">
          {editOn === 0 ? (
            <>
              <section
                className="reveal flex flex-col pt-24 md:pt-[25%] w-3/4 sm:w-2/5 md:w-full"
                ref={(el) => (revealingElements.current[0] = el)}
              >
                <h1 className="mp-heading text-xl md:text-2xl lg:text-3xl mb-3">
                  Moj profil
                </h1>

                <table className="mp-fields">
                  <tbody className="text-sm md:text-base">
                    <tr className="mp-fields-field">
                      <td>E-mail</td>
                      <td className="font-bold">{email}</td>
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
                      <td className="font-bold">{nickname}</td>
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
                      <td className="font-bold">{password}</td>
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

                <button className="mp-delete-button text-base h-[6vh] w-[60%] md:w-[50%]">
                  Deaktiviraj profil
                </button>
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
