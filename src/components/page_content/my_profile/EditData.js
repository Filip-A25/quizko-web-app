import { useContext, useEffect, useRef, useState } from "react";
import { ProfileContext } from "./MyProfile";
import { MainContext } from "../../../MainContent";
import "../../../styles.css";
import {
  editEmail,
  editNickname,
  editPassword,
} from "../../../services/api_user";

function EditData(props) {
  const { editOn, setEditOn, setEmail, setNickname } =
    useContext(ProfileContext);
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
  }, [handleElementReveal, editOn]);

  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [dataToChange, setDataToChange] = useState({});

  const checkPasswordMatch = (e) => {
    if (newPassword !== e.target.value) {
      console.log(true, e.target.parentNode);
      e.target.parentNode.classList.add("error-password-match");
    } else e.target.parentNode.classList.remove("error-password-match");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (editOn) {
      case 1:
        try {
          const resp = await editEmail({ email: dataToChange.newEmail });
          setDataToChange({});
          setEditOn(0);
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
        break;
      case 2:
        try {
          console.log("Changing nickname");
          console.log({ username: dataToChange.newNickname });
          const resp = await editNickname({
            username: dataToChange.newNickname,
          });
          console.log(dataToChange);
          setDataToChange({});
          setEditOn(0);
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
        break;
      case 3:
        try {
          console.log("Changing password");
          console.log(dataToChange);
          const resp = await editPassword(dataToChange);
          setDataToChange({});
          setEditOn(0);
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
        break;
      default:
        console.log("No request sent");
    }
  };

  return (
    <section
      ref={(el) => (revealingElements.current[0] = el)}
      className="pt-20 md:pt-32"
    >
      <h1 className="text-xl md:text-2xl lg:text-3xl">{props.headers.h1}</h1>
      <form className="mp-edit-form flex-col text-sm md:text-base h-[60%] md:h-[55%] lg:h-[50%] lg:w-[100%]">
        <label className="mp-edit-label" htmlFor={props.ids.old}>
          {props.headers.old}
        </label>
        <div className="mp-edit-input">
          {editOn == 1 || editOn == 2 ? (
            <input
              type="text"
              placeholder={props.placeholders.old}
              id={props.ids.old}
              name={props.ids.old}
              className="h-10"
            />
          ) : (
            <input
              type="password"
              placeholder={props.placeholders.old}
              id={props.ids.old}
              name={props.ids.old}
              onChange={(e) => {
                setPassword(e.target.value);
                setDataToChange({
                  ...dataToChange,
                  password: e.target.value,
                });
                console.log({ ...dataToChange, password: e.target.value });
              }}
              className="h-10"
            />
          )}
        </div>
        <label className="mp-edit-label" htmlFor="newEmail">
          {props.headers.new}
        </label>
        <div className="mp-edit-input">
          {editOn === 1 || editOn === 2 ? (
            <input
              type="text"
              placeholder={props.placeholders.new}
              id={props.ids.new}
              name={props.ids.new}
              className="h-10"
              onChange={(e) => {
                setDataToChange({ [e.target.name]: e.target.value });
                console.log({ [e.target.name]: e.target.value });
              }}
            />
          ) : (
            <input
              type="password"
              placeholder={props.placeholders.new}
              id={props.ids.new}
              name={props.ids.new}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setDataToChange({
                  ...dataToChange,
                  passwordNew: e.target.value,
                });
                console.log({ ...dataToChange, passwordNew: e.target.value });
              }}
              className="h-10"
            />
          )}
          {editOn === 3 && (
            <div className="new-password-confirm-wrap mt-2 p md:mt-3">
              <input
                type="password"
                placeholder={props.placeholders.confirm}
                id="new-password-confirm"
                name="newPasswordConfirm"
                onChange={(e) => {
                  checkPasswordMatch(e);
                  setDataToChange({
                    ...dataToChange,
                    passwordRepeat: e.target.value,
                  });
                  console.log({
                    ...dataToChange,
                    passwordRepeat: e.target.value,
                  });
                }}
                className="h-10"
              />
            </div>
          )}
        </div>
        <div className="mp-edit-forget">
          <p className="mp-edit-forget-text">{props.headers.forgot}</p>
          <a href="#" className="mp-edit-forget-link">
            Kliknite ovdje.
          </a>
        </div>
        <div className="mp-edit-buttons flex flex-col md:flex-row md:justify-between">
          <button className="mp-edit-submit mt-[3vh] w-[100%] h-[6vh] md:mt-[3vh] md:w-[45%] md:h-[6vh]">
            <input
              type="submit"
              value="Spremi promjene"
              onClick={handleSubmit}
            />
          </button>
          <button
            className="mp-edit-back mt-[1.5vh] w-[100%] h-[6vh] md:mt-[3vh] md:w-[45%] md:h-[6vh]"
            onClick={(e) => {
              e.preventDefault();
              setEditOn(0);
            }}
          >
            Odustani
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditData;
